## Installation
### NPM
`npm install cypress --save-dev`

### Direktdownload
[Download from CDN](https://download.cypress.io/desktop)

### Installation im Docker-Container
[Dokumentation](https://github.com/cypress-io/cypress-docker-images)

### Dokumentation zu Installation
[Installationsguide](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## Cypress starten
### Installationen mit npm
Für die Live-Tests `npm run cy:live`, für die Test-Installation `npm run cy:test`. Hierbei werden die Testergebnisse in cypress/results gespeichert.

### Direktinstallation
Die Cypress-App starten und die Testdateien auswählen. Dann einfach starten.

## Tests schreiben
Die Testverfahren können einfach erweitert werden. Die [Dokumentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test) zeigt alle wichtigen Schritte auf.

## Fehlermeldungen
Cypress prüft und validiert nach vielen Faktoren. Wenn ein Test fehlschlägt wird eine detaillierte Fehlermeldung angegeben. Bei Timeout-Fehlern lohnt es sich den Test erneut zu starten, da diese auch an einer zeitweise schlechten Verbindung liegen können.

### Fehler beim Logo-Check
Beim Aufruf des Logo-Checks wird ein Fehler ausgegeben, dieser tritt auf weil der Link im Logo ohne Protokoll (https://) eingetragen ist.

### Allgemeine Fehler
Cypress prüft auf diverse Statuscodes. Wenn eine Seite bswp. Javascript Fehler enthält, kann dies schon zu einem Cypress-Fehler führen. In der Regel lohnt ein Blick in die Konsole.