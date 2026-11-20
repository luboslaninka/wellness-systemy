# Odkazy na novom webe

- Zadanie od Ľuba: dlaždica Bazény v úvodnej sekcii vedie na `/bazeny/`, Sauny na `/sauny/`; ostatné preklinky nevedú na starý web, iba na kotvu.
- Autor: Claude
- Vetva: `claude/links`

## Zmeny

- `home/hero/complexne.html`: Bazény → `{{ base }}bazeny/`, Sauny → `{{ base }}sauny/`, Wellness → `#`.
- `home/hero/produkty.html`: IronWell, IronPool, Vírivky → `#`.
- `home/ponuka.html`: Sauny → `{{ base }}sauny/`, Vírivky → `#`.
- `shared/header.html`: Realizácie → `#`, Kontaktujte nás → `#kontakt` (pätička s formulárom).
- Ostatné odkazy na wellness-systemy.sk a ironpool.sk (realizácie, IRONWELL, IRONPOOL, „Prečítajte si ďalšie užitočné informácie“) → `#`.

Telefón, e-mail v pätičke a vnútorné kotvy (`#kontakt`, logo, Riešenia na mieru, Produkty) zostávajú.

- Dlaždice Bazény a Sauny sú klikateľné celé (`assets/js/pages/home-links.js`, trieda `is-linked`); klávesnica a odkaz „Viac o…“ fungujú ako predtým.
