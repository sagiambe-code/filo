# Filo — Bottega creativa

Prototipo statico del sito di **Filo** (filobottega.it): sei pagine in HTML, CSS e un po' di JavaScript, da guardare su qualunque dispositivo prima di trasformarle nel tema WordPress.

## Le pagine

| File | Pagina |
| --- | --- |
| `index.html` | Home |
| `servizi.html` | Servizi |
| `lavori.html` | Lavori, con il racconto di Mey |
| `bottega-aperta.html` | Bottega aperta, con la checklist interattiva |
| `chi-ce-dietro.html` | Chi c'è dietro |
| `contatti.html` | Contatti |

Gli stili comuni sono in `assets/style.css`, i comportamenti (lampadina, menu sul telefono, checklist, modulo) in `assets/main.js`.

## Come vederlo online con GitHub Pages

1. Sul repository vai in **Settings → Pages**.
2. In **Build and deployment**, alla voce **Source** scegli **Deploy from a branch**.
3. In **Branch** scegli **main** e la cartella **/ (root)**, poi **Save**.
4. Dopo un minuto o due, in cima alla stessa pagina compare l'indirizzo del sito, del tipo `https://sagiambe-code.github.io/filo/`.

Ogni volta che il repository viene aggiornato, il sito si aggiorna da solo in un paio di minuti.

## Cose da sapere

- È un **prototipo**: i segnaposto tra parentesi quadre ([Cognome], [Ritratto], [anno]…) vanno sostituiti con i contenuti veri.
- Il **modulo dei contatti non spedisce ancora nulla**: mostra solo il messaggio di ringraziamento. Nel tema WordPress verrà collegato all'invio delle mail.
- Le pagine hanno `noindex`, quindi i motori di ricerca non le mostrano.
- I caratteri (Inter Tight, Literata, JetBrains Mono) arrivano da Google Fonts. Nel sito definitivo li ospiteremo sul nostro server, per rispetto della privacy dei visitatori.
