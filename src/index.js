import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from './redux/store'
import 'toastr/build/toastr.css'
import 'github-markdown-css'


const WithRoute = () => (
    <Provider store={createStore()}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(<WithRoute />, document.getElementById('root'));
serviceWorker.unregister();