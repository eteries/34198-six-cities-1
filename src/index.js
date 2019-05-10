import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';
import {offers} from './mocks/offers';

ReactDOM.render(
    // eslint-disable-next-line no-console
    <App offers={offers} onCardClick={(a) => console.log(a)}/>,
    document.getElementById(`root`)
);
