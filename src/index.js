import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/Root'
import createHistory from "history/createBrowserHistory";

const rootDom = document.getElementById('root');
const history = createHistory();

ReactDOM.render(
    <Root history={history} />,
    rootDom    
);

if(module.hot){
    module.hot.accept('./routes/Root',()=>{
        const NewRoot = require('./routes/Root').default;
        ReactDOM.render(
            <NewRoot history={history} />,
            rootDom
        )
    })   
}

