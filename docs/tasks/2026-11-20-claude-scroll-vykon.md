# Plynulý scroll na homepage

- Zadanie od Ľuba: homepage seká pri scrolle.
- Autor: Claude
- Vetva: `claude/scroll-perf`

## Príčina a riešenie

Meranie snímok pri scrolle (1440 px) ukázalo, že sekanie spôsobuje animácia svetelných zábleskov v pozadí úvodu (`.wave-lights`): rozmazaná žiara okolo zábleskov (`.wave-glint-halo`, SVG filter a široký ťah) sa prekresľuje v každej snímke. Bez nej: ~130 ms → 16,7 ms na snímku (60 fps).

- `.wave-glint-halo` skrytá; ostrý záblesk (`.wave-glint-core`) zostáva.
- `.wave-lights` vo vlastnej vrstve (`contain: strict`).
- Animácia sa pozastaví, keď úvod nie je na obrazovke (`assets/js/pages/home-perf.js`).

Súbory: `assets/css/sections/home-hero.css`, `assets/js/pages/home-perf.js`, `src/pages/index.html`.
