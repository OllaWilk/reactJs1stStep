const test = "1"

import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('app')); //linia służy do wyświetlania zawartości strony.
//^^ TA LINIA MÓWI. ZNAJDŹ ELEMENT KTÓREGO id JEST APP I WSTAW DO NIEGO KOMPONENT App