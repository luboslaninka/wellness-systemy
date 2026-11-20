# Vzorová podstránka Sauny

- Zadanie od Ľuba: spracovať podstránku Sauny ako jeden z dvoch vzorov podstránky (Aurora paralelne spracuje Bazény). Po porovnaní Ľubo vyberie prvky do spoločného vzoru. Texty a rozloženie podľa https://wellness-systemy.sk/sauny/, všade zatiaľ rovnaká fotografia, pätička sa nerieši, čísla 20 / 268 / 100 potvrdené.
- Autor: Claude
- Vetva: `claude/sauny`
- Stav: na kontrolu
- Východiskový commit `main`: `ce27428`

## Súbory v rozsahu

- `src/pages/sauny/index.html`
- `src/partials/sauny/*.html`
- `assets/css/pages/sauny.css`
- `docs/tasks/2026-11-20-claude-sauny.md`

## Zásahy do spoločných súborov

Žiadne. Stránka načítava existujúce `shared/base.css` a `pages/home.css` (kvôli hlavičke a schváleným základným štýlom) bez ich úpravy; všetky nové pravidlá sú v `pages/sauny.css` a obmedzené na `.sauny-page`.
Spoločný header partial sa nemení, preto odkazy „Riešenia na mieru“ a „Produkty“ (kotvy homepage) na podstránke zatiaľ nevedú správne; rieši ich budúca integračná úloha.
Fotografia `assets/images/home/sauna.jpg` je dočasne použitá na všetkých miestach a nekopíruje sa.

## Overenie

- Build: `python3 scripts/build.py`
- Kontrola ciest a ID: `python3 scripts/check_site.py`
- Desktop/mobil a interakcie: snímky 1440 px a 390 px, navigácia klávesnicou, `prefers-reduced-motion`
- Pull request: `claude/sauny` → `main` (nezlučovať pred porovnaním s Bazénmi)
