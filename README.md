# Interrogazioni-app

## Descrizione generale dell'applicazione

Webapp per gestire le interrogazioni e gli avvisi in classe con interfaccia admin per gestire gli interrogati, le materie e gli avvisi

# Installazione

Guida passo passo per installare e avviare l'applicazione sul proprio ambiente di sviluppo.

## Installa le dipendenze
    npm install

## Database
### Preparazione della struttura
Prepara il database MySql utilizzando la query nel file _database.sql_

### Inserimento dei dati
Utilizzare la seguente query per inserire i dati degli studenti e materie, personalizzando i valori d'esempio usando i dati effettivi (inserire gli studenti nell'ordine predefinito, per esempio in ordine alfabetico per cognome)
```
INSERT INTO studente (nome, cognome) VALUES ('Nome', 'Cognome'), ('Nome', 'Cognome')
INSERT INTO materia (nome, abbreviazione, endpoint, attivo) VALUES ('Nome materia', 'Abbreviazione materia', 'endpoint da utilizzare', 1), ('Nome materia', 'Abbreviazione materia', 'endpoint da utilizzare', 1)
```
Infine eseguire la seguente query per preparare in ordine gli studenti per ogni materia (questa non va personalizzata)

```
INSERT INTO e_interrogato (id_studente, id_materia, posizione, interrogato, offerto) SELECT s.id, m.id, s.id, 0, 0 FROM materia m, studente s;
```

## Variabili d'ambiente
Nel file _.env.example_ sono presenti le variabili d'ambiente utilizzate dall'app. Si crea quindi un file _.env_ contente quelle variabili d'ambiente con i dati corretti (quelli presenti nel file sono di esempio).
Di seguito sono elencate le variabili d'ambiente e il loro utilizzo
```
SECRET_PASSWORD=password da utilizzare per accedere al pannello di amministrazione
SECRET_DB_HOST=indirizzo dell'host
SECRET_DB_USER=utente da utilizzare nel database
SECRET_DB_PASSWORD=password per accedere al database con l'utente specificato sopra
SECRET_DB_NAME=nome del database da utilizzare
```

## Build dell'applicazione
Eseguire il comando
```
npm run build
```

## Preview in locale
Per visualizzare in locale l'applicazione
```
npm run preview
```


