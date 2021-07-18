import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

export let rerenderEntireTree = () => {
    console.log(store);
	ReactDOM.render(
		<React.StrictMode>
		  <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	  );
	  
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();




