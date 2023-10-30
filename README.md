# Resepti sovellus Twitter

# Projekti rakenne

RecipeBook/
|-- assets/
|-- components/
|   |-- RecipeCard.js
|   |-- Comment.js
|   |-- ...
|-- screens/
|   |-- Login.js
|   |-- AddRecipe.js
|   |-- SearchRecipe.js
|   |-- RecipeDetails.js
|   |-- Profile.js
|-- App.js
|-- package.json

# Koodin Rakenne
 Tilanhallinta: Reduxi tai React Context API käyttäjän tilan, reseptien ja kommenttien hallintaan.
# Reititys:
 React Navigation -kirjasto näkymien välisen navigoinnin hallintaan.
# Tietokanta
 Firebase, koska se tarjoaa myös käyttäjän autentikoinnin.
# Tietokannan integraatio:
 Integroidaan Firebase React Native -sovellukseesi ja luodaan toiminnot (CRUD – Create, Read, Update, Delete) resepteille ja kommentteille.
# Käyttöliittymä
 1. Komponentit: Luodaan uudelleenkäytettäviä   komponentteja, kuten RecipeCard, jota voit käyttää sekä etusivulla että hakutuloksissa.
2. Stailaus: Käytetään Flexboxia tai styled-components -kirjastoa sovelluksen ulkoasun muokkaamiseen.
# Testaus ja Dokumentointi
1. Yksikkötestit: Jest- ja React Testing Library -kirjastoja.
2. Dokumentointi: Gitin versiohallinta.