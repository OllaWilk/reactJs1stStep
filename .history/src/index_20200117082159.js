import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

//^^ TA LINIA MÓWI. ZNAJDŹ ELEMENT KTÓREGO id JEST APP I WSTAW DO NIEGO KOMPONENT App
