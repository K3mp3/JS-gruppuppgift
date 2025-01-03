# JS-gruppuppgift


## Produktbeskrivning
Vi bygger en webbplats som ska ha en fungerande reseplanerare.
Den ska dynamiskt lägga till/ändra HTML-element. Första intrycket användaren får är texten "Vart vill du resa?" och när användaren skrivit in sitt svar i en input-ruta så möts den av frågan "Vart reser du ifrån?". Efter användaren har svarat på den frågan läggs resan med start och destination högst upp i en lista. Om användaren lägger till fler resmål, läggs resorna till i listan. Man kan ta bort och ändra i listan. 


## Instruktioner för att skapa en javascript fil och koppla till HTML-filen
1. Skapa en ny javascript fil i mappen scripts.
2. I javascript filen skriver du din kod i en funktion som du sedan exporterar med hjälp av export. ex `export const functionName = () => { // code }`
3. I script.js filen skriver du `import { functionName } from './scripts/filnamn.js'` för att importera funktionen.
4. Använd funktionen init() för att köra koden när sidan laddas.
5. Om du vill att funktionen ska köras vid ett specifikt event, skriv `document.querySelector('#idNamn').addEventListener('event', functionName)`. Om du jobbar med form och vill att funktionen ska köras när formuläret skickas, skriv `document.querySelector('#idNamn').addEventListener('submit', functionName)`.
6 I html-filen skriver du in en unik id på elementet som du vill att funktionen ska köras på. ex `<form id="idNamn"></form>`
7. Finns exempel på detta i filen /scripts/test.js som har en funktion som heter testAlert().