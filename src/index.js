import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
// assets and helpers
import './helpers';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/animate.min.css'
import './assets/css/index.css'
// components
import App from './components/App'


render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>
    , document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require
        render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp/>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}