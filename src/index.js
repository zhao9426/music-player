import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import Root from './routes/Root'
import createHistory from "history/createBrowserHistory";

const rootDom = document.getElementById('root');
const history = createHistory();

ReactDOM.render(
    <AppContainer>
        <Root history={history}/>
    </AppContainer>,
    rootDom    
);

if(module.hot){
    module.hot.accept('./routes/Root',()=>{
        const NewRoot = require('./routes/Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot history={history}/>
            </AppContainer>,
            rootDom
        )
    })   
}

