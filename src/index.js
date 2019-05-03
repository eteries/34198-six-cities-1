import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const offers = [
  {id: 1, title: `Beautiful & luxurious apartment at great location`},
  {id: 2, title: `Wood and stone place`},
  {id: 3, title: `Canal View Prinsengracht`},
  {id: 4, title: `Nice, cozy, warm big bed apartment`}
];

ReactDOM.render(
    <App cards={offers} />,
    document.getElementById(`root`)
);
