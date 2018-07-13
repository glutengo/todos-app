import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {MuiThemeProvider} from 'material-ui';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
