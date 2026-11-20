# Vzorová podstránka Bazény

- Zadanie od Ľuba: spracovať vzorovú podstránku Bazény podľa https://wellness-systemy.sk/bazeny/ v štýle schválenej homepage.
- Autor: Aurora
- Vetva: `aurora/bazeny-prototype`
- Stav: na vizuálne odsúhlasenie Ľubom; implementácia dokončená
- Východiskový commit `main`: `ce27428c5456e52bc0353366e0f5c70f32279df9`

## Súbory v rozsahu

- `src/pages/bazeny/index.html`
- `src/partials/bazeny/{hero,solutions,complements,contact}.html`
- `assets/css/pages/bazeny.css`
- `assets/css/sections/bazeny-{hero,solutions,complements}.css`
- `assets/images/bazeny/*`
- `assets/css/shared/{header,subpage}.css`
- `src/partials/shared/{subpage-header,footer}.html`
- Tento záznam úlohy.

## Výsledok a spoločné súbory

Fotografický úvod bez pohybu, obsahové kotvy, štyri typy bazénov, prekrytia,
samostatný produktový blok IronPool, e-mailový a telefonický kontakt a pätička.
Nové spoločné CSS sa zatiaľ načítava iba na podstránke. Homepage nenačítava nové
štýly ani pätičku; jej chránená CSS kaskáda zostáva nezmenená.

Podstránka používa dočasný `shared/subpage-header.html` s relatívnymi odkazmi na
homepage a existujúci navigačný skript. Pôvodný `shared/header.html` sa nemení.
Počas práce vznikol Claudeov PR #3 (`claude/header-links`), ktorý opravuje spoločný
header a kontrolu ciest. Aby sa úlohy neprekrývali, Bazény jeho súbory nemenia.
Po zlúčení #3 možno dočasný partial odstrániť a Bazény prepnúť na spoločný header.
Ostatné podstránky a plošné presmerovanie navigácie nie sú súčasťou tejto úlohy.

`shared/header.css` zachytáva výsledný vzhľad hlavičky pre podstránky.
Po odsúhlasení vzoru možno v samostatnom kroku koordinovane odstrániť duplicitu
pravidiel hlavičky zo starej kaskády homepage. Týmto PR sa pôvodná kaskáda nečistí.

## Obsah a fotografie

Zdroj: https://wellness-systemy.sk/bazeny/, načítané 20. 11. 2026.
Text je skrátený pre prezentačný vzor. Nie sú doplnené nové technické tvrdenia,
ceny, štatistiky ani vymyslené realizácie. E-mail a telefón sú zo zdrojovej stránky.
IronPool zatiaľ odkazuje na existujúci produktový web.
Kontakt používa `mailto:` a `tel:`; nepredstiera odosielanie formulára.

| Lokálny obrázok | Pôvodná cesta pod `https://wellness-systemy.sk/wp-content/uploads/` |
| --- | --- |
| `foliovy.jpg` | `2017/09/76.jpg` |
| `keramicky.jpg` | `2017/09/keramicke.jpg` |
| `prefabrikovany.jpg` | `2017/09/kompozitne.jpg` |
| `nerezovy.jpg` | `2020/06/IMG_20191121_154127.jpg` |
| `prekrytie.jpg` | `2017/09/119.jpg` |
| `ironpool.jpeg` | `2024/05/FIMI0423-2048x1152.jpeg` |

Technický predaj prelivových žľabov, pôvodná cena a staršie číselné tvrdenia sa do
vzorovej prezentačnej kompozície neprenášajú. Ich umiestnenie a aktuálnosť sa doriešia
pri obsahovej revízii. Tento prototyp nie je úplnou migráciou každej informácie starého webu.

## Overenie

- `python3 scripts/build.py`: úspešné, dve stránky.
- `python3 scripts/check_site.py`: úspešné; lokálne assety, CSS URL, ID a relatívne odkazy.
- Desktop: vizuálne skontrolovaný úvod, obsahové riešenia, kontakt a pätička.
- Mobil: skontrolované rozloženie pri úzkej šírke, bez horizontálneho pretekania dokumentu; mobilná navigácia sa otvára, zatvára cez Escape a odkaz Produkty vedie na homepage.
- Klávesnica: menu reaguje na Enter a Escape. Obsahové odkazy fungujú bez JavaScriptu; stránka nepridáva animácie fotografií.
- Homepage: pôvodné CSS a obsahové partialy zostávajú nezmenené; výsledné HTML homepage zostáva totožné.

Pred paralelnou výrobou ďalších podstránok má Ľubo odsúhlasiť tento vizuálny vzor.
