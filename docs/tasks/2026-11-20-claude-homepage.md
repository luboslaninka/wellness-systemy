# Homepage pod úvodnými panelmi podľa vzoru podstránok

- Zadanie od Ľuba: vrch homepage (header a dva panely Komplexné / Produktové riešenia) ponechať bez zmeny; sekcie pod ním spracovať rovnakým postupom ako podstránky, obsah podľa https://wellness-systemy.sk/. Fotografia tímu, logá klientov a realizované projekty zo vzorového webu; pätička schválená.
- Autor: Claude
- Vetva: `claude/homepage`
- Stav: na kontrolu
- Východiskový commit `main`: `6318e2a`

## Súbory v rozsahu

- `src/pages/index.html` – pripojené `shared/subpage.css`, `shared/footer.css`, pätička a `footer-form.js`; `body.subpage`
- `src/partials/home/{onas,ponuka,realizacie,klienti,tim}.html` (nové)
- `assets/images/home/{komplexne-riesenia,ponuka-virivky,ponuka-sauny,nas-tim}.jpg`, `assets/images/home/realizacie/*`, `assets/images/home/klienti/*` – zo vzorového webu
- `assets/css/shared/subpage.css` – nové spoločné prvky: podnadpis, podpis, hlavička sekcie, delený úvod, polovice ponuky, rad fotografií, logá, široká fotografia
- šípky v tlačidlách: `src/partials/{shared,sauny,bazeny,home}/*.html`
- Odstránené: `src/partials/home/{experience,showcase}.html`, `assets/css/sections/home-{experience,showcase}.css`, `assets/images/home/sauna-panorama.jpg`, `assets/images/shared/vyrocie.png`

## Zásahy do spoločných súborov

`assets/css/pages/home.css` sa nemení. Úvodné panely sú po zmene pixelovo rovnaké (porovnané na 1440 px).
Doplnky v `shared/subpage.css` sú nové triedy; Sauny a Bazény sa nemenia.

## Obsah

Podľa spätnej väzby Ľuba: úvod o firme ako na vzore – vrstvené plochy bez vlastného pozadia, ktoré čiastočne prekrývajú úvodné panely aj sekciu ponuky pod nimi (vyvýšená biela plocha s odznakom 26 rokov od ľavého okraja, tmavá karta so zlatým rámikom a citáciou konateľa až po pravý okraj), ponuka víriviek a sáun ako slider cez celú šírku (prelínanie dvoch snímok, tlačidlá, bodky, klávesnica, automatický posun s pauzou pri myši/fokuse, vypnutý pri obmedzenom pohybe – `assets/js/shared/hero-slider.js`), posledné realizované projekty – všetkých šesť fotografií vedľa seba cez celú šírku na sivom pozadí, naši spokojní klienti, náš tím vám pomôže v usporiadaní ako na vzore (fotografia od ľavého okraja, biela karta s textom a tlačidlom prečnieva nad predchádzajúcu sekciu, pod ňou „Navštívte showroom v sídle spoločnosti“ na tmavom pozadí), pätička. Texty doslova zo vzoru.

Na celom webe sú odstránené šípky z CTA tlačidiel (aj „Kontaktujte nás“ v hlavičke a „Odoslať“ v pätičke).

## Overenie

- Build a `check_site.py`: úspešné (3 stránky).
- Snímky 1440 px a 390 px bez rozbitých obrázkov a bez horizontálneho pretečenia.
