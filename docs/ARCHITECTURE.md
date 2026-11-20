# Štruktúra projektu

Web je statický HTML/CSS/JavaScript. Malý Python skript iba skladá HTML z partialov; nie sú potrebné balíky, npm ani framework.

| Umiestnenie | Účel |
| --- | --- |
| `src/pages/index.html` | Zostavenie homepage: head, odkazy na štýly a skripty, poradie sekcií |
| `src/pages/<stranka>/index.html` | Budúce samostatné podstránky; aktuálne sa nevytvárajú |
| `src/partials/shared/header.html` | Spoločné logo a navigácia |
| `src/partials/home/hero.html` | Obal hero sekcie a dekoratívne vlny |
| `src/partials/home/hero/complexne.html` | Ľavý panel komplexných riešení |
| `src/partials/home/hero/produkty.html` | Pravý panel produktových riešení |
| `src/partials/home/experience.html` | Skúsenosti a vyjadrenie konateľa |
| `src/partials/home/showcase.html` | Panoramatická fotografia sauny |
| `assets/css/shared/base.css` | Pôvodné premenné, reset a základná typografia |
| `assets/css/pages/home.css` | Pôvodná schválená kaskáda homepage v zachovanom poradí |
| `assets/css/sections/home-hero.css` | Priestor pre ďalšie úpravy hero sekcie |
| `assets/css/sections/home-experience.css` | Priestor pre ďalšie úpravy sekcie skúseností |
| `assets/css/sections/home-showcase.css` | Priestor pre ďalšie úpravy panoramatickej fotografie |
| `assets/js/shared/navigation.js` | Menu a jeho ovládanie klávesnicou |
| `assets/js/pages/home.js` | Karty a existujúce efekty homepage |
| `assets/images/shared/` | Logo, výročný symbol a dekoratívna textúra |
| `assets/images/home/` | Fotografie homepage; duplicitné vložené obrázky sú zjednotené |
| `public/` | Súbory kopírované do koreňa výsledného webu |
| `scripts/build.py` | Skladanie HTML a kopírovanie assetov do `_site/` |
| `scripts/check_site.py` | Kontrola lokálnych ciest, obrázkov, CSS URL a odkazov na ID |
| `.github/workflows/pages.yml` | Kontrola PR a nasadenie z `main` na GitHub Pages |
| `docs/tasks/` | Samostatný záznam rozsahu každej budúcej úlohy |

## HTML partialy

Vlož partial zápisom `{{ include: home/experience.html }}`. Cesta je relatívna k `src/partials/`.
Partialy môžu obsahovať ďalšie partialy. Zostavenie odmietne kruhové alebo chýbajúce odkazy.

Pre odkazy na assets používaj `{{ base }}assets/...`.
Zostavenie nahradí `{{ base }}` relatívnou cestou podľa hĺbky stránky: na homepage prázdnou cestou, na `/bazeny/` cestou `../`.
Nepoužívaj `/assets/...`: náhľad žije pod `/wellness-systemy/`, nie v koreni domény.
CSS `url(...)` sa vyhodnocuje relatívne k CSS súboru.

## Štýly a izolácia zmien

Základné a pôvodné homepage štýly sa načítavajú ako prvé. Sekčné CSS súbory sa načítajú po nich.
Nové pravidlá obmedz na kontajner sekcie, napr. `.experience ...` alebo `#komplexne ...`.
Nevkladaj všeobecné selektory `h2`, `button` alebo `img` do sekčného CSS.
Ak sa majú paralelne meniť oba hero panely, vytvorte pre každý vlastný CSS súbor a raz koordinovane ho pripojte v `src/pages/index.html`.

Pôvodnú kaskádu sme zámerne neroztriedili podľa selektorov: zmena poradia existujúcich prekrytí by mohla zmeniť schválený vzhľad. Jej ďalší refaktoring je samostatná úloha.

## Lokálny náhľad

```sh
python3 scripts/build.py
python3 scripts/check_site.py
python3 -m http.server 8000 --directory _site
```

Potom otvor `http://localhost:8000`. Po zmene HTML partialov zopakuj build; server nemá automatické obnovovanie.

## Publikovanie

Pull request iba zostaví a skontroluje web. Úspešné zlúčenie do `main` zostaví a publikuje `_site/` cez GitHub Actions.
Klientsky odkaz ostáva https://luboslaninka.github.io/wellness-systemy/.
V nastavení Pages musí byť Source = GitHub Actions.
Vygenerovaný výstup `_site/` sa neukladá do repozitára, takže ho autori nemusia spoločne upravovať ani riešiť jeho konflikty.
