# Uppgift för utvecklare hos Infra

Bonnier News publicerar dagligen nya artiklar och annat redaktionellt
material i sina olika tidningar.
Materialet publiceras under kategorier såsom nyheter, sport, eller kultur.
Visst innehåll publiceras i flera olika kategorier samtidigt. Det senast
publicerade materialet exponeras under RSS-flöden.

## Uppgift

Din uppgift är att ta fram en enkel applikation som:

- Hämtar det senaste innehållet från varje flöde.
- Visar en lista över de tio senast publicerade av alla artiklar som finns
  i de RSS-flöden i filen [feeds.json](feeds.json), sorterade i datumordning.
  För att klara av detta måste du slå samman innehållet från alla flöden och ta
  bort dubletter--innehåll som publicerats i fler än en kategori.
- Resultatet kan se ut ungefär som nedan (här uttryckt i Markdown för att länka artiklarna).

### Exempelresultat

1. [Folkhälsomyndigheten: Fler måste vaccinera sig](https://www.dn.se/sverige/folkhalsomyndigheten-fler-maste-vaccinera-sig/)
2. [Sommarvärmen är tillbaka – tillfälligt](https://www.expressen.se/gt/sommarvarmen-ar-tillbaka-tillfalligt/)
3. [Så vill Danmark locka arbetslösa skåningar](https://www.expressen.se/kvallsposten/sa-vill-danmark-locka-arbetslosa-skaningar/)
4. [Amina Manzoor svarar på era frågor om pandemin](https://www.expressen.se/nyheter/coronaviruset/amina-manzoor-svarar-pa-era-fragor-om-pandemin-em4p6/)
5. [Regionens besked: Då trappar vi ner vaccinationerna](https://www.expressen.se/gt/regionens-besked-da-trappar-vi-ner-vaccinationerna/)
6. [Nalin Pekgul vittnade: ”Hatet var det verkliga skälet till att jag lämnade politiken”](https://www.dn.se/sverige/nalin-pekgul-vittnade-hatet-var-det-verkliga-skalet-till-att-jag-lamnade-politiken/)
7. [Tegnell: Rekommendationer kan ligga kvar för ovaccinerade](https://www.expressen.se/nyheter/coronaviruset/tegnell-rekommendationer-kan-ligga-kvar-for-ovaccinerade/)
8. [Även Moderna experimenterar med kombinerat covid- och influensavaccin](https://www.di.se/live/aven-moderna-experimenterar-med-kombinerat-covid-och-influensavaccin/)
9. [Skäl att fira för champagnetillverkare](https://www.dn.se/ekonomi/skal-att-fira-for-champagnetillverkare/)
10. [Nyanmälda arbetslösa sjönk i USA i förra veckan](https://www.di.se/live/nyanmalda-arbetslosa-sjonk-i-usa-i-forra-veckan/)

## Instruktioner

- Du kan uppfylla uppgiften hur du vill; en webapp, ett web-API, en mobilapp,
  ett library, en CLI-app, eller något annat.
- Du kan använda vilket programmeringsspråk och ramverk du vill.
- Börja med att klona det här repot.
- Din applikation behöver inte klara någon hög last. Fundera ändå på hur du
  skulle kunna anpassa den för att klara mycket högre trafik, exempelvis köras
  vid varje besök på Expressen.se. 
- Lägg inte mer än fyra timmar på uppgiften. Håll det enkelt.
- Tänk på hur du hade löst uppgiften om du haft mer tid. Fundera över vilka
  avvägningar du gör, och vad du hade inkluderat eller jobbat vidare på
  om du hade fortsatt att utveckla applikationen som en applikation redo att
  driftsätta och vidareutveckla.
- Lämna din lösning som en eller gärna flera commits till ett eget
  git-repository på GitHub, GitLab eller liknande, tillsammans med en
  instruktion som beskriver hur man kör applikationen, samt en kort beskrivning
  av vilka avvägningar och avgränsningar du gjort.
- När du skickat in din lösning, kommer du att få möjlighet att göra en mindre
  förändring i en parprogrammeringsuppgift tillsammans med en kollega.

## Kom ihåg

Syftet med uppgiften är inte att skapa den perfekta lösningen, snarare att ta
fram en hyfsat enkel lösning inom loppet av ett par timmar. Du kommer inte att
bedömas enkom på hur du valt att lösa uppgiften, utan lika mycket på hur du
resonerar kring din lösning och hur den kan anpassas.

Lycka till!
