/**
 * All'inizio di un file è buona cosa importare componenti, fogli di stile e librerie per renderle disponibili
 * nel flusso di React. 
 * Il primo import di un file è quasi sicuramente sempre React, in questo modo ci permette di accedere sempre ai
 * suoi metodi
 */

import React from 'react';
import ClassComponent from './components/classComponent';
import FunctionalComponent from './components/functionalComponent';

/**
 * Il primo componente che create-react-app definisce è un componente funzionale. Le guide di React più vecchie tendevano
 * a guidare l'utente a rimodellare il componente in una classe. In questo caso a noi non serve perché abbiamo gli hooks.
 * Con gli hooks possiamo già rendere dinamico questo componente!
 */

function App() {
  /**
   * Possiamo chiamare l'hooks useState esposto da React per inizializzare il primo stato dell'applicativo. useState è niente di
   * più che una funzione che prende in ingresso un solo parametro: lo stato iniziale. Il suo return, espone invece un array, che 
   * attraverso la sintassi di ES6 possiamo destrutturare in due variabili, di cui decidiamo noi il nome!
   * E' buona regola nelle nuove implementazioni di Js definire tutte le variabili che non andiamo a mutare come constanti (const).
   * Ma il codice funziona anche se utilizziamo delle variabili generiche (let o var) 
   */
  const [isFunctional, setIsFunctional] = React.useState(false); 

  /**
   * Abbiamo definito qui anche un effect hook. In questo caso gestirà i nostri effetti collaterali stampando in console lo stato
   * che abbiamo prima definito. Siccome come secondo parametro gli abbiamo passato un array con uno stato (possiamo però passare qualsiasi variabile 
   * dichiarata nella pancia del nostro componente), l'hook verrà eseguito solo al variare di quel determinato stato.
   * Si usa un array perché è possibile passare n variabili d'ascolto al nostro effect hook
   */

  React.useEffect(() => {
    console.log(`isFunctional state const is changed into ${isFunctional}`)
  }, [isFunctional])


  /**
   * In un componente funzionale il render è effettuato dal return del componente stesso.
   * Come possiamo vedere nel render è presente UN SOLO MARKUP PADRE. Questa soluzione è obbligatoria in JSX: non è possibile effettuare il render
   * di due div fratelli senza un wrapper principale, si dovranno usare, in quel caso delle strategie diverse (le vediamo evnerdì sui componenti di costa).
   * Dentro al wrapper abbiamo un button che gestisce un evento tutto sommato molto semplice: cambia il suo stato invocando il setter che abbiamo definito noi;
   * Il contenuto del button visibile all'utente è anch'esso dinamico e dipende ancora una volta dal nostro stato. Tra le parentesi graffe, dentro ad un render
   * possiamo eseguire QUASI OGNI funzione Javascript con delle limitazioni sulla sintassi (ad esempio non possiamo usare condizioni esplicite con IF o cicli con FOR).
   * Sotto al button abbiamo poi inserito i nostri due componenti: funzionale e di classe. Il loro render è CONDIZIONATO dal nostro stato -> ed è qui che React
   * offre un grosso BOOST alla UI: un rendering condizionato significa che in base ad una props o ad uno stato possiamo mostrare uno o l'altro componente (o quello che vogliamo);
   * quello che non stiamo mostrando NON viene caricato nel DOM HTML, non è presente in memoria, non esegue funzioni, non esiste in memoria!
   */

  return (
    <div className="App">
        <button className="btntimer" onClick={() => setIsFunctional(!isFunctional)}>Show {isFunctional ? 'Class Component' : 'Functional Component'}</button>
        {
          isFunctional ? 
          <FunctionalComponent></FunctionalComponent> :
          <ClassComponent></ClassComponent>
        }
    </div>
  );
}

/**
 * Dopo aver definito i nostri componenti, li possiamo (e dobbiamo per poterli raggiungere) esportare. La parola riservata default ci
 * consente di esportare il componente senza curarci del nome con cui lo importeremo negli altri file. E' possibile esportare una sola 
 * funzione o un solo componente con il default. 
**/ 
export default App;
