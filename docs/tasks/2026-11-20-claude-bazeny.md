# Podstránka Bazény podľa vzoru Sáun

- Zadanie od Ľuba: spracovať Bazény rovnakým postupom ako Sauny, podľa https://wellness-systemy.sk/bazeny/, a nahradiť predchádzajúci prototyp (PR #5). Čísla: 26 rokov skúseností. Fotografie z Unsplash.
- Autor: Claude
- Vetva: `claude/bazeny` (stavia na `claude/sauny`)
- Stav: na kontrolu
- Východiskový commit `main`: `1920353`

## Súbory v rozsahu

- `src/pages/bazeny/index.html`
- `src/partials/bazeny/{hero,typy,cisla,realizacie}.html`
- `assets/images/bazeny/*.jpg` (Unsplash, bezplatná licencia; `ironpool.jpg` a `prekrytia.jpg` sú fotografie z pôvodného webu, prekrytie dodal Ľubo)
- `assets/css/shared/subpage.css` – spoločný vzor podstránok (presunutý zo Sáun, výsledok Sáun je pixelovo rovnaký)
- `assets/js/shared/counters.js` – narátanie čísel (presunuté zo Sáun)
- `docs/tasks/2026-11-20-claude-bazeny.md`

## Zásahy do spoločných súborov

- Odstránené súbory prototypu z PR #5, ktoré používala iba stránka Bazény: `assets/css/pages/bazeny.css`, `assets/css/sections/bazeny-*.css`, `assets/css/shared/header.css`, pôvodný `assets/css/shared/subpage.css`, `src/partials/shared/subpage-header.html`, `src/partials/bazeny/*` a pôvodné obrázky v `assets/images/bazeny/`.
- `assets/css/shared/subpage.css` teraz obsahuje vzor podstránok (trieda `body.subpage`); Sauny aj Bazény ho načítavajú.

## Obsah

Texty doslova zo vzorovej stránky v jej poradí; opravené len zjavné preklepy („AgrobBuchtal“ → „AgroBuchtal“, „Deutche“ → „Deutsche“, „liatého“ → „liateho“, „počasi“ → „počasia“, „šírim“ → „šírym“, „zabráňuje“ → „zabraňuje“, chýbajúca čiarka a bodka).
Farby pásov: svetlá → sivá → tmavá ako na vzore. Tlačidlá „Vyžiadať cenovú ponuku“ sú tam, kde na vzore (fóliové, keramické, prefabrikované, nerezové), „Zistiť viac“ vedie na ironpool.sk.
Blok „V prípade záujmu…“ je nahradený pätičkou, rovnako ako pri Saunách.

## Overenie

- Build a `check_site.py`: úspešné (3 stránky).
- Snímky 1440 px a 390 px bez rozbitých obrázkov a bez horizontálneho pretečenia.
- Sauny po presune štýlov do `shared/subpage.css`: snímka pixelovo zhodná s predchádzajúcou.
