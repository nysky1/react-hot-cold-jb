import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import HotCold from './components/hotCold';
import store from './store';

import './index.css';

ReactDOM.render(  
<Provider store={store}>
    <HotCold />
</Provider>, 
document.getElementById('root')
);
