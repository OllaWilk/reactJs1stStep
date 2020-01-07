import React from 'react';

class App extends React.Component { // imprt biblioteki react
  render() { //app musi zawierać metodę render która zostaje wykonana w momencie wstawienia jej na stronie.
    return ( // metoda render zwraca obiekt JSX czyli <div>
      <div>
        <h1>My first React app</h1>
        <h2>Hello world!</h2>
      </div>
    )
  }
}

export default App; //eksport klasy app. słowo default, dzięki niemu importując app w pliku index.js możemy pominąć nawiasy klamrowe czyli nie muszimy pisać import {} from'...'
