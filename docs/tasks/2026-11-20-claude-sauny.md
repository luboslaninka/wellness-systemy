# Vzorová podstránka Sauny

- Zadanie od Ľuba: spracovať podstránku Sauny ako jeden z dvoch vzorov podstránky (Aurora paralelne spracuje Bazény). Po porovnaní Ľubo vyberie prvky do spoločného vzoru. Texty doslova a rozloženie podľa https://wellness-systemy.sk/sauny/ (opravené len zjavné preklepy: „byt“ → „byť“, „infromácie“ → „informácie“, chýbajúce bodky), rámčeky pri fotografiách podľa kovového rámika zo sekcie Skúsenosti, nízka header sekcia ako na vzore, tlačidlá ako „Kontaktujte nás“ v menu homepage. Čísla 26 / 268 / 100 % podľa Ľuba (26 rokov skúseností), s ikonami a animáciou narátania pri zobrazení (vypnutá pri obmedzenom pohybe).
- Autor: Claude
- Vetva: `claude/sauny`
- Stav: na kontrolu
- Východiskový commit `main`: `ce27428`

## Súbory v rozsahu

- `src/pages/sauny/index.html`
- `src/partials/sauny/*.html`
- `assets/css/pages/sauny.css`
- `assets/js/pages/sauny.js` (narátanie čísel)
- `assets/images/sauny/*.jpg` (fotografie z Unsplash, bezplatná licencia: hero, fínska, parná, infra, luxusné, realizácie)
- `docs/tasks/2026-11-20-claude-sauny.md`
- `src/partials/shared/footer.html`, `assets/css/shared/footer.css`, `assets/js/shared/footer-form.js` (nová spoločná pätička)

## Zásahy do spoločných súborov

Nová spoločná pätička (podľa zadania Ľuba z kontaktnej sekcie Sáun): logo, kontakt a formulár iba ako frontend – kontrola polí a potvrdenie, nič sa neodosiela. Zatiaľ je pripojená len na `/sauny/`; homepage a Bazény ju dostanú pri zjednotení vzoru.
Okrem pätičky žiadne. Stránka načítava existujúce `shared/base.css` a `pages/home.css` (kvôli hlavičke a schváleným základným štýlom) bez ich úpravy; všetky nové pravidlá sú v `pages/sauny.css` a obmedzené na `.sauny-page`.
Spoločný header partial sa nemení, preto odkazy „Riešenia na mieru“ a „Produkty“ (kotvy homepage) na podstránke zatiaľ nevedú správne; rieši ich budúca integračná úloha.
Pri IRONWELL sa používa existujúca `assets/images/home/hero-produkty.png` z panelu Produktové riešenia. Fotografie z Unsplash sú ilustračné; na ostrom webe ich treba nahradiť vlastnými realizáciami.

## Overenie

- Build: `python3 scripts/build.py`
- Kontrola ciest a ID: `python3 scripts/check_site.py`
- Desktop/mobil a interakcie: snímky 1440 px a 390 px, navigácia klávesnicou, `prefers-reduced-motion`
- Pull request: `claude/sauny` → `main` (nezlučovať pred porovnaním s Bazénmi)
