# Laravel API & Vite Boolfolio Project

## Descrizione del Progetto

Questo progetto si compone di due parti principali: la creazione di un'API Laravel per gestire i dati dei progetti e l'implementazione di un'interfaccia frontend utilizzando Vite. Di seguito sono descritte le milestone raggiunte durante lo sviluppo del progetto.

## Milestone 1: Creazione e Configurazione della Repository Laravel API

1. **Creazione di una nuova repository**:
    - Nome repository: `laravel-api`
    - Copiata dalla repository esistente: `laravel-many-to-many`

2. **Aggiunta del Controller per la serializzazione dei dati**:
    - Creato `PostController` in `app/Http/Controllers/API`
    - Configurato per serializzare i dati dalla tabella `Project`

3. **Aggiunta della rotta API**:
    - Modificato `routes/api.php` per includere la rotta del nuovo controller.

## Milestone 2: Testing della Chiamata API

- Utilizzato Postman per testare la chiamata API.
- La chiamata API è stata eseguita con successo, restituendo i dati attesi.

## Milestone 3: Creazione della Repository Vite Boolfolio

1. **Creazione di una nuova repository su GitHub**:
    - Nome repository: `vite-boolfolio`

2. **Creazione di un nuovo progetto e installazione delle dipendenze**:
    - Configurato un nuovo progetto Vite.
    - Installate le dipendenze necessarie tramite npm o yarn.

3. **Collegamento del progetto alla nuova repository**:
    - Inizializzato il repository Git locale.
    - Aggiunto il remote origin e pushato il codice iniziale.

## Milestone 4: Implementazione del Componente Vue e Chiamata API

1. **Creazione del componente `AppMain.vue`**:
    - Posizionato in `src/components`.

2. **Chiamata API nel componente**:
    - Effettuata la chiamata all'API Laravel nel `mounted` hook del componente.
    - Visualizzazione dei dati ricevuti tramite `console.log`.

3. **Verifica dei dati**:
    - I dati sono stati ricevuti correttamente e visualizzati nella console del browser.
