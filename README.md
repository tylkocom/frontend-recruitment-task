# frontend-recruitment-task

[Pod tym linkiem](https://www.figma.com/file/4I9prCmnLdCNHaClurysFg/Zadanie-rekrutacyjne-Tylko?node-id=0%3A1) znajdziesz prostą sekcję z karuzelą do zakodowania. 

Na początku chcielibyśmy, abyś zrobił/a forka naszego repozytorium i ustawił go jako prywatne - to bardzo dla nas ważne. Jeśli możesz to wrzuć nam podgląd strony na github pages, heroku lub cokolwiek innego - chętnie przeklikamy co stworzyłaś/eś. 
Sekcja składa się z kafelków z naszymi meblami, karuzeli i prostych filtrów. 


Wszystko co jest potrzebne do wyświetlenia kafelek znajdziesz pobierając dane z przygotowanego przez nas api. Z api skomunikujesz się uderzając pod: `api/getJSON/`. Chcielibyśmy, abyś najpierw wyświetlił/a wszystkie szafki. Po kliknięciu w typy, chcielibyśmy, abyś spróbował/a wyfiltrować je po shelf_type. Klucz to: Type01 Plywood: `shelf_typ: 1`, Type01 Venner: `shelf_type: 1v`, Type02: `shelf_type": 2`

Kodując korzystaj z naszego design systemu. Zależy nam na responsywnej stronie - część naszej sprzedaży odbywa się przy pomocy IE11, dlatego ważne jest dla nas, aby o tym pamiętać.

W tej chwili korzystamy z [tej karuzeli](https://flickity.metafizzy.co/options.html), ale możesz wybrać cokolwiek innego. Chętnie też zobaczymy axiosa, ale tutaj też zostawiamy dobrowolność. 
Pracujemy z sassem, co zobaczysz przeglądając ds.

Chcielibyśmy, aby karuzela reagowała na resize, a także na wybór filtrów.  
 

To teraz wersja tldr: 
1. Zrób forka naszego repo i ustaw jako prywatne. Jeśli możesz to wrzuć nam podgląd strony na github pages, heroku lub cokolwiek innego (nieobowiązkowe, ale fajnie będzie podejrzeć Twoją pracę :) ).
2. Skorzystaj z naszego api, które zwróci Ci poszczególne elementy.
3. Wykorzystaj nasz ds. Jeśli cokolwiek będzie dla Ciebie niejasne, daj nam znać, chętnie wytłumaczymy i uzupełnimy dokumentację. 
4. Zakoduj sekcję responsywnie, zgodnie z tym co znajdziesz w Figmie. 
 
Link do repozytorium: 
[https://github.com/tylkocom/frontend-recruitment-task](https://github.com/tylkocom/frontend-recruitment-task)

Link do projektu: 
[https://www.figma.com/file/4I9prCmnLdCNHaClurysFg/Zadanie-rekrutacyjne-Tylko?node-id=0%3A1](https://www.figma.com/file/4I9prCmnLdCNHaClurysFg/Zadanie-rekrutacyjne-Tylko?node-id=0%3A1)

Link do ds:
[https://docs.google.com/document/d/19DMdkIsiqxsZTsZ5RxQNtPI1XpWCdAabrqdEbm4vl-g/edit](https://docs.google.com/document/d/19DMdkIsiqxsZTsZ5RxQNtPI1XpWCdAabrqdEbm4vl-g/edit)


Obiecujemy, że zrobimy Ci code review i mamy nadzieję, że będzie to fajna przygoda. 
Jeśli masz jakiekolwiek pytania do nas lub do naszych designerów to dawaj znać!


Powodzenia i dobrej zabawy!








## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
