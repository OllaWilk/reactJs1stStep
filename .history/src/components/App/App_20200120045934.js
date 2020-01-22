import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </BrowserRouter>
);

export default App;

//po tej zmianie App jest plikiem głównym pli aplikacji. Mówi on aplikacji jakie komponenty ma wyświetlić gdy użytkownik będzie na określonej ścieżce.
// exect pokaże dany widok tylko wtedy gdy będziemy na określonej ścieżce.