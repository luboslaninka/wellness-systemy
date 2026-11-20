# Spoločné pravidlá práce na Wellness Systémy

Tieto pravidlá platia rovnako pre Auroru, Claude aj ľudských prispievateľov.
Rozdelenie funkčnej práce zatiaľ NIE JE dohodnuté; o úlohách rozhoduje Ľubo.

## Pred začiatkom úlohy

- Načítaj aktuálny `main`, tento súbor a `docs/ARCHITECTURE.md`.
- Prezri otvorené pull requesty a záznamy `docs/tasks/`.
- Pracuj vo vlastnej vetve z aktuálneho `main`: `aurora/<uloha>` alebo `claude/<uloha>`.
- Ak pracujete na rovnakom počítači, používaj vlastný checkout alebo git worktree. Dve vetvy v jednom pracovnom adresári neposkytujú izoláciu.
- V `docs/tasks/<jedinecny-nazov>.md` zaznamenaj zadanie, dotknuté súbory a stav. Každá úloha má vlastný súbor; neupravujte spoločný zoznam súčasne.
- Zápis v dokumente nie je technický zámok. Ak sa súbory prekrývajú s rozpracovanou úlohou, najprv rozsah skoordinuj s Ľubom.

## Rozsah zmien

- Upravuj iba súbory dohodnutej úlohy. Prácu druhej strany nevracaj ani neprepisuj.
- Každá sekcia má vlastný HTML partial a príslušný CSS súbor. Nové sekcie a stránky zakladaj v samostatných súboroch.
- `assets/css/pages/home.css` uchováva pôvodnú schválenú kaskádu. Nové sekčné úpravy patria do `assets/css/sections/home-*.css`; veľké čistenie pôvodnej kaskády je samostatná koordinovaná úloha.
- Spoločné súbory (header, základné štýly, zostavenie, workflow, vstupná stránka) upravuje v danom čase len jeden prispievateľ podľa dohody. Zmeny s dosahom na iné sekcie výslovne popíš v PR.
- Nepíš obrázky ako base64 do HTML alebo CSS. Ulož ich do `assets/images/<stranka-alebo-sekcia>/`.
- Nevymýšľaj novú pracovnú náplň, obsah ani redizajn bez zadania. Zachovaj schválené fotografie, texty a správanie.

## Overenie a spojenie výsledkov

1. Spusť `python3 scripts/build.py` a `python3 scripts/check_site.py`.
2. Prezri dotknuté časti na desktope aj mobile; pri interakciách over myš aj klávesnicu.
3. Otvor úzko zameraný pull request do `main`. Uveď výsledné správanie, dotknuté súbory a overenie.
4. Pred zlúčením zohľadni aktuálny `main`. Konflikty rieš podľa zámeru oboch zmien; nepoužívaj plošné prebratie jednej strany.
5. Nevykonávaj force push do `main`, neobnovuj celú starú kópiu projektu a nepridávaj vygenerovaný `_site/` do gitu.
6. Zlúčenie a publikovanie rob v rozsahu poverenia od Ľuba. `main` sa publikuje automaticky; pracovné vetvy sa nepublikujú na klientsky odkaz.

GitHub a táto štruktúra znižujú riziko konfliktov. Samy nezabránia tomu, aby dvaja autori upravovali ten istý súbor; rozhodujúci je dohodnutý rozsah úlohy a kontrola PR.
