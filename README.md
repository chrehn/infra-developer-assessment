## Instruktion för att köra och tankar.

Klona repot, se till att ha nodejs installerat. Kör en npm install och sen kan ni starta med npm run start. 
Sedan kan ni göra en GET mot localhost:3000/latest-feeds så får ni svaret i en json-array med objekt som innehåller artikelns titel och en länk till artikeln.
Jag valde att köra på en rest-server då det känns som en versatil lösning då man kan avgöra från annat håll hur man ev. vill visa upp svaret. Det blir anpassningsbart. Jag valde bibliotek baserat på vad som var bekvämt med det jag är lite van vid, jag hittade t.ex. ett rss-parser bibliotek men valde bort att använda det. Jag avgränsade det helt till att bara visa de 10 senaste, något jag tänkte man ganska enkelt kan få in och uttöka med är att välja hur många av de senaste artiklarna man vill ha. Det är byggt lite med tanken "minimum requirement", så många förbättrings/utökning möjligheter finns såklart.
