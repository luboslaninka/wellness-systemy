# Wellness Systémy

Prezentačný návrh webu: https://luboslaninka.github.io/wellness-systemy/

## Začiatok práce

Najprv čítaj [spoločné pravidlá](AGENTS.md) a [štruktúru projektu](docs/ARCHITECTURE.md).
Platí to rovnako pre Auroru, Claude a ďalších autorov. Funkčné úlohy sa rozdelia po dohode s Ľubom.

HTML stránky sa skladajú zo samostatných sekcií. CSS, JavaScript a obrázky sú mimo HTML.
Každá úloha má vlastnú vetvu a pull request; `main` publikuje spoločný výsledok.

```sh
python3 scripts/build.py
python3 scripts/check_site.py
python3 -m http.server 8000 --directory _site
```

Otvoriť: http://localhost:8000

Potrebný je iba Python 3.9 alebo novší, bez ďalších balíkov.
Neupravuj vygenerovaný `_site/`; upravuj `src/` a `assets/`.
Adresáre a konkrétne súbory vysvetľuje [architektúra](docs/ARCHITECTURE.md).
