import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {reducer} from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App onCardClick={() => {}}/>
    </Provider>,
    document.getElementById(`root`)
);
