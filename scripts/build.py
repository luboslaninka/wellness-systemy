#!/usr/bin/env python3
"""Build the static site from small HTML partials; Python standard library only."""
import argparse
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / 'src/pages'
PARTIALS = ROOT / 'src/partials'
INCLUDE = re.compile(r'\{\{\s*include:\s*([\w/.-]+)\s*\}\}')


def render(text, base, stack=()):
    def include(match):
        path = (PARTIALS / match.group(1)).resolve()
        if PARTIALS.resolve() not in path.parents:
            raise ValueError('Include outside src/partials: ' + match.group(1))
        if path in stack:
            raise ValueError('Circular include: ' + match.group(1))
        return render(path.read_text(encoding='utf-8'), base, stack + (path,))
    result = INCLUDE.sub(include, text).replace('{{ base }}', base)
    if '{{' in result or '}}' in result:
        raise ValueError('Unresolved template expression')
    return result


def build(destination):
    destination = destination.resolve()
    if destination == ROOT or destination in ROOT.parents:
        raise ValueError('Build output cannot replace the project or its parents')
    # Only remove outputs previously created by this builder.
    if destination.exists():
        if not (destination / '.wellness-build').is_file():
            raise ValueError('Output directory exists without .wellness-build marker')
        shutil.rmtree(destination)
    destination.mkdir(parents=True)
    (destination / '.wellness-build').touch()
    shutil.copytree(ROOT / 'assets', destination / 'assets')
    for source in (ROOT / 'public').rglob('*'):
        if source.is_file():
            target = destination / source.relative_to(ROOT / 'public')
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)
    for page in sorted(PAGES.rglob('*.html')):
        relative = page.relative_to(PAGES)
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        base = '../' * (len(relative.parts) - 1)
        target.write_text(render(page.read_text(encoding='utf-8'), base), encoding='utf-8')
    print('Built site: ' + str(destination))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', default=str(ROOT / '_site'))
    build(Path(parser.parse_args().output))
