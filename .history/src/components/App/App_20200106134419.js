import React from 'react';

class App extends React.Component { // imprt biblioteki react
  render() {
    return (
      <div>
        <h1>My first React app</h1>
        <h2>Hello world!</h2>
      </div>
    )
  }
}

export default App; //eksport klasy app. słowo default, dzięki niemu importując app w pliku index.js możemy pominąć nawiasy klamrowe czyli nie muszimy pisać import {} from'...'
