import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

//styles
import 'normalize.css/normalize.css';
import 'flexboxgrid/css/flexboxgrid.min.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter/>, document.getElementById('app'))
