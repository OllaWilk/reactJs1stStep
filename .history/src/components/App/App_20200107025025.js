//app zajmuje się importowaniem tylko innych komponentów.

import React from 'react'; //import biblioteki react
import styles from './App.scss';


class App extends React.Component { // imprt biblioteki react
  render() { //app musi zawierać metodę render która zostaje wykonana w momencie wstawienia jej na stronie.
    return ( // metoda render zwraca obiekt JSX czyli <div>
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
        </main>
    )
  }
}
//className={style.cośTam} - importowanie z App.scss stałej, której wartość jest komponentem. Nawias {} pozwala na wstawienie kodu JS wewnątrz kodu JSX.

export default App; //eksport klasy app. słowo default, dzięki niemu importując app w pliku index.js możemy pominąć nawiasy klamrowe czyli nie muszimy pisać import {} from'...'

//KOMPONENT MUSI ZWRACAĆ DOKŁADNIE JEDEN ELEMENT NAJWYŻSZEGO POZIOMU. W TYM przypadku jest to div, który , może posiadać w sobie inne elementy ale nie może mieć rodzeństwa. Nie musi być to div może być to sekcja , artykół czy <main></main>