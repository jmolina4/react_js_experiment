import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
