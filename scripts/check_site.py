#!/usr/bin/env python3
"""Check generated HTML, local assets, CSS URLs and accessible ID references."""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

SITE = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / '_site').resolve()
errors = []


def local_target(page, value):
    url = urlsplit(value)
    if url.scheme or url.netloc or not url.path:
        return None
    if url.path.startswith('/'):
        errors.append(str(page.relative_to(SITE)) + ': root-relative URL breaks project hosting: ' + value)
        return None
    target = (page.parent / unquote(url.path)).resolve()
    if SITE not in target.parents:
        errors.append('Reference outside output: ' + value)
    elif not target.exists():
        errors.append(str(page.relative_to(SITE)) + ': missing ' + value)
    return target


class CheckHTML(HTMLParser):
    def __init__(self, page):
        super().__init__(convert_charrefs=True)
        self.page, self.ids, self.references = page, set(), []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append('Duplicate id: ' + attrs['id'])
            self.ids.add(attrs['id'])
        for key in ['src', 'href', 'poster']:
            value = attrs.get(key)
            if value:
                local_target(self.page, value)
                if value.startswith('#') and len(value) > 1:
                    self.references.append(value[1:])
        for key in ['aria-controls', 'aria-labelledby', 'aria-describedby']:
            self.references.extend((attrs.get(key) or '').split())


pages = list(SITE.rglob('*.html'))
if not (SITE / 'index.html').exists():
    errors.append('Missing generated homepage')
for page in pages:
    text = page.read_text(encoding='utf-8')
    if '{{' in text or '}}' in text:
        errors.append('Unresolved template in ' + str(page))
    parser = CheckHTML(page)
    parser.feed(text)
    for reference in parser.references:
        if reference not in parser.ids:
            errors.append(str(page.relative_to(SITE)) + ': missing ID ' + reference)
for css in (SITE / 'assets').rglob('*.css'):
    for value in re.findall(r'url\(\s*[\'\"]?([^\)\'\"]+)', css.read_text(encoding='utf-8')):
        local_target(css, value.strip())
if errors:
    raise SystemExit('\n'.join(errors))
print('Checked ' + str(len(pages)) + ' page(s): local assets, CSS URLs and ID references are valid.')
