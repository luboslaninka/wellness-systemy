# Dizajnový základ Wellness Systémy

Tento dokument je spoločný podklad pre Auroru, Claude a ďalších prispievateľov.
Vychádza zo schválenej homepage a dohôd s Ľubom. Východiskom je `main`
`ec1c27b1a21677523c7a129ba3b7d3397789dc1c` (20. 11. 2026).

Existujúci vzhľad opisujeme ako záväzný základ. Návrhy pre podstránky a presun
štýlov sú označené osobitne: tento dokument ich ešte neimplementuje ani
nenahrádza vizuálne odsúhlasenie vzorovej podstránky.

## 1. Charakter webu a publikum

Prémiová prezentácia wellness s architektonickým charakterom. Hlavnú úlohu majú
veľké fotografie, výrazná typografia, priestor a presné zarovnanie. Tmavomodrá
vytvára atmosféru, svetlé sekcie zlepšujú čitateľnosť a teplé akcenty vedú pozornosť.
Kovové rámiky a pohyb používame striedmo, aby medzi sebou prvky nesúťažili.

Web má dve obsahové vetvy s jedným vizuálnym jazykom:

| Vetva | Publikum | Čo má stránka vysvetliť |
| --- | --- | --- |
| Riešenia na mieru: bazény, sauny, wellness | Projektanti, investori, hotely a zákazníci s individuálnym projektom | Možnosti riešenia priestoru, odbornosť, postup a realizácie |
| Produkty: IronWell, IronPool, vírivky | Koncoví zákazníci | Použitie, varianty, výhody a praktické informácie |

Regionálnym východiskom komunikácie sú Spiš a Tatry s presahom do širšieho okolia.
Konkrétny rozsah dodávok či servisu uvádzame len podľa potvrdených podkladov.
Podstránky majú ponúknuť viac informácií; nemusia kopírovať celú kompozíciu homepage.

## 2. Farby

Tieto premenné už existujú v `assets/css/shared/base.css`:

| Premenná | Hodnota | Úloha |
| --- | --- | --- |
| `--navy` | `#07315b` | Základná tmavomodrá |
| `--blue` | `#337db4` | Modrý akcent |
| `--light-blue` | `#a9cdeb` | Jemné akcenty, viditeľný fokus |
| `--cream` | `#f3efe7` | Krémové plochy a svetlé akcenty |
| `--stone` | `#d7d1c6` | Pieskové čiarky a podčiarknutia |
| `--text` | `#283e51` | Text na svetlom pozadí |
| `--muted` | `#65717b` | Vedľajší text |

Homepage používa aj priame hodnoty. Pri budúcom zjednotení ich pomenujeme
spoločnými premennými; zatiaľ nejde o existujúce tokeny:

| Hodnota | Použitie na homepage |
| --- | --- |
| `#020e1c` | Najtmavšie pozadie s vlnami |
| `#08233d` | Tmavá karta so zvýrazneným textom |
| `#fff` | Biele obsahové plochy a svetlé prvky |
| `#c4b89f` | Pieskový odtieň v pôvodných deklaráciách rámika |
| `#da9f55` / `#cb9c47` | Výplň / okraj kontaktného tlačidla v hlavičke |

Kontaktné tlačidlo má aktuálne biely text. Pri prejdení myšou má krémové pozadie
a tmavomodrý text. Nepreberať staršiu deklaráciu pieskového tlačidla s tmavým
textom ako jeho výsledný bežný stav.

Výrazný rámik v sekcii Skúsenosti má vo výsledku statický kovový zlatý prechod,
nie iba jednofarebný pieskový okraj. Tento akcent nie je univerzálnou dekoráciou kariet.

## 3. Typografia, priestor a tvary

- Nadpisy: **Cal Sans**; bežný text: **Source Sans 3**, so záložným systémovým písmom podľa `base.css`.
- Veľké nadpisy sú dominantné a stručné. Zachovať prirodzené zalamovanie a dostatok priestoru okolo nich.
- Charakteristickým motívom je tenká piesková čiarka pod nadpisom: na homepage 52 px, na menších obrazovkách 42 px.
- Malý úvodný nadpis môže používať verzálky, väčšie rozostupy písmen a krátku svetlomodrú čiarku. Nie je povinný nad každým nadpisom.
- Veľké písmená patria krátkym štítkom a odkazom, nie dlhým odsekom.
- Rozostupy a veľkosti písma majú reagovať na šírku obrazovky. Dlhší obsah podstránok potrebuje pohodlnú čitateľnú šírku.

Zaoblenia nie sú rovnaké pre všetky prvky:

| Prvok | Východisko homepage |
| --- | --- |
| Lokálne premenné v `home.css` | `--radius: 12px`, `--radius-small: 8px`, `--radius-large: 20px` |
| Fotografické panely | Základ 24 px, pri užšom zobrazení 20 px; výsledné horné rohy fotografie sú rovné |
| Kontaktné tlačidlo | 30 px, tvar kapsuly |
| Karta Skúsenosti | Výsledné zaoblenie 3 px |
| Ozdobný rámik pri karte | 12 px, na úzkom mobile 10 px |

Pri extrakcii štýlov zachovať tieto rozdiely. Nepoužiť plošne 24 px na všetky karty.

## 4. Hlavička, tlačidlá a odkazy

Na desktope je logo v strede, vľavo Riešenia na mieru a Realizácie, vpravo
Produkty a Kontaktujte nás. Hlavička je priehľadná nad fotografiou s tmavým
prechodom pre čitateľnosť a používa biele logo. Navigácia má pieskové podčiarknutie.
Na mobile sa mení na hamburger s tmavomodrým panelom.

Hlavná výzva má byť na stránke jasne rozpoznateľná. Existujúci kontakt v hlavičke
určuje jej farebný charakter. Odkazy typu „Viac o…“ používajú krátky text,
verzálky, jemné svetlomodré podčiarknutie a šípku. Šípka dopĺňa zrozumiteľný názov odkazu.

Aktuálne odkazy na starý web sa zmenia v samostatnej integračnej úlohe, keď
budú nové cieľové stránky pripravené. Tento dokument ich nemení.

## 5. Hero a pohyb — schválený výsledný stav

Homepage má dva fotografické panely pre dve hlavné vetvy ponuky. Fotografie
siahajú po okraje panelov pod hlavičkou; staršie odsadené varianty v CSS nie sú
predlohou aktuálneho vzhľadu. Na mobile sa panely skladajú pod seba.

**Veľké hero fotografie sú pevné.** Nenakláňajú sa za myšou, nemajú pohyblivý
lesk a nemenia sa pri prejdení po kategóriách alebo ich otvorení. To zodpovedá
Ľubovej požiadavke zachovať vybrané fotografie bez pohybu podľa kurzora.

Tmavé pozadie používa `assets/images/shared/wave-texture.svg`. Jemný posun
vĺn a pomalé svetelné záblesky v pozadí zostávajú samostatným dekoratívnym efektom.
Pevná fotografia teda neznamená vypnutie všetkého pohybu v pozadí.

V kóde sú staršie deklarácie a výpočty náklonu. Rozhoduje výsledná kaskáda,
nie komentár alebo skorší blok. Pri presune štýlov tieto efekty nechtiac neobnoviť.

**Návrh pre podstránky:** jeden fotografický úvod s nadpisom a krátkym vysvetlením,
rovnakou atmosférou a pevnou fotografiou. Jeho výšku, rozloženie a nadväznosť
na obsah najprv overíme na jednej vzorovej podstránke.

## 6. Obsahové prvky

- **Výberové karty:** ikona, názov a fotografia; otvorený stav doplní vysvetlenie a odkaz. Jemné nadvihnutie môže zostať na zariadeniach s vhodným ukazovateľom. Obsah musí byť dostupný aj dotykom a klávesnicou.
- **Ikony:** tenké obrysové SVG bez výplne, zaoblené konce a spoje, hrúbka čiary približne 1,15–1,2 v existujúcich ikonách. Rozmer prispôsobiť komponentu; 36 × 36 nie je povinné všade.
- **Svetlá obsahová sekcia:** biele pozadie a ohraničená šírka obsahu, na homepage približne 1280 px. Viacstĺpcové rozloženie sa na mobile skladá do čitateľného poradia.
- **Zvýraznený text:** tmavá karta s posunutým kovovým rámikom je výrazný podpis sekcie Skúsenosti. Používať pri skutočne dôležitom obsahu, nie pri každom odseku. Rámik je statický.
- **Panoramatická fotografia:** široký obrazový predel s premysleným orezom pre desktop aj mobil. Neumiestňovať podstatnú informáciu iba do obrázka.
- **Odznak skúseností:** existujúci odznak zachovať na homepage. Nie je povinnou súčasťou každej podstránky; jeho údaj nerozširovať ani neprepočítavať bez potvrdenia.

## 7. Mobil, prístupnosť a obsah

Zachovať viditeľný fokus, ovládanie navigácie a kariet klávesnicou, zmysluplné
stavy otvorenia a zatvorenia vrátane Escape. Skryté ovládacie prvky nemajú
zostávať v poradí klávesnicového fokusu. Dôležitý obsah nesmie byť dostupný iba cez hover.

Rešpektovať `prefers-reduced-motion`: dekoratívne animácie a pohyb nesmú byť
potrebné na získanie informácií. Pri nových kombináciách farieb overiť kontrast.
Fotografie kontrolovať aj na úzkej obrazovke, aby orez nezakryl hlavný objekt.

Zachovať schválené fotografie a texty homepage. Nové texty, technické údaje,
ceny, referencie a tvrdenia o realizáciách musia vychádzať z dodaných alebo
výslovne povolených podkladov. Dizajnový dokument nie je povolením vymýšľať obsah.
Optimalizácia veľkých fotografií je samostatná úloha s kontrolou výslednej kvality.

## 8. Budúci spoločný základ a poradie práce

Nasledujúce cesty sú návrhom organizácie, nie tvrdením, že už existujú:

| Oblasť | Navrhované spoločné miesto |
| --- | --- |
| Farby, písma a základné premenné | Rozšírenie existujúceho `assets/css/shared/base.css` |
| Hlavička a navigácia | `assets/css/shared/header.css` a existujúci spoločný HTML partial |
| Tlačidlá a textové odkazy | `assets/css/shared/buttons.css` |
| Opakovateľné nadpisy a textové vzory | `assets/css/shared/typography.css` |
| Úvod a obsahové rozloženie podstránok | `assets/css/shared/subpage.css` |
| Spoločná pätička | `src/partials/shared/footer.html` |

Po dohode spoločný základ pripraví jeden autor. Najprv sa prenesú výsledné
pravidlá bez zmeny homepage, potom sa vytvorí jedna vzorová podstránka a pätička.
Presný počet spoločných CSS súborov prispôsobíme skutočnému opakovaniu prvkov.
Ľubo odsúhlasí vzor, až následne rozdelíme implementáciu ďalších stránok.

Pri tomto kroku overiť:

1. Rovnakú homepage pred zmenou a po nej na desktope aj mobile.
2. Pevné fotografie, výsledné farby tlačidla, tvary kariet a statický rámik.
3. Navigáciu, karty, klávesnicu a režim obmedzeného pohybu.
4. Build a kontrolu lokálnych ciest, obrázkov a ID.

Vlastníctvo spoločných súborov a jednotlivých stránok sa riadi `AGENTS.md`
a samostatnými záznamami v `docs/tasks/`. Tento dokument nerozdeľuje úlohy medzi autorov.
