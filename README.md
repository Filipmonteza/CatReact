Cat Explorer — ReactJS (Del B)
Projektöversikt
Cat Explorer är en React-applikation som asynkront hämtar data från TheCatAPI och presenterar olika kattraser. Projektet implementerar navigation, sökning, pagination, detaljsidor samt en kundvagn hanterad med Context API. Appen är byggd med React, react-router-dom och react-bootstrap.
Funktioner

Meny för navigation mellan sidor: Home, Cats, Owner, Cart
Startsida med presentation av kattbutiken
Ownersida med kontaktinformation
Kattsida som hämtar kattraser från TheCatAPI (30 raser), visar 10 per sida med pagination
Sökfält som filtrerar resultat och fungerar tillsammans med pagination
Detaljsida per ras med namn, ursprung och bild
Kundvagn via Context API — antal visas i menyn och uppdateras i hela applikationen
Modal med orderformulär (namn, e-post, leveransadress) och orderbekräftelse via alert
Responsiv layout via react-bootstrap

Krav för att köra lokalt
Förutsättningar: Node.js (LTS) och npm.
bash# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build
Projektstruktur
src/
├── components/        # Återanvändbara komponenter (NavbarComp, CatCard, CatList, SearchBar, Pagination m.fl.)
├── pages/             # Sidor (Home, Cats, CatDetails, Owner, Cart)
├── context/
│   └── CartContext.jsx  # Context API för kundvagn
└── services/
    └── api.js           # Funktioner för att hämta raser och bilder från TheCatAPI
API
EndpointAnvändninghttps://api.thecatapi.com/v1/breeds?limit=30Hämtar lista över kattraser https://api.thecatapi.com/v1/images/search?breed_ids={id}Hämtar bild för en specifik ras
Felsökning

Inga katter eller bilder visas: Kontrollera att nätverksanrop inte blockeras av brandvägg eller CORS.
Import-fel på Linux/macOS: Import-paths är skiftlägeskänsliga — se till att de matchar filnamnet exakt (t.ex. api.js, inte Api).
