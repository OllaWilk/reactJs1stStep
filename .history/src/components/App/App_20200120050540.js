import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;

//po tej zmianie App jest plikiem głównym pli aplikacji. Mówi on aplikacji jakie komponenty ma wyświetlić gdy użytkownik będzie na określonej ścieżce.
// exect pokaże dany widok tylko wtedy gdy będziemy na określonej ścieżce.