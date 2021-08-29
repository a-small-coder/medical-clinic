import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from "react-cookie";
import store from './redux/store';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<CookiesProvider>
			<Provider store={store}>
			<App/>
			</Provider>
			</CookiesProvider>
		</React.StrictMode>,
		document.getElementById('root')
	  );
	  
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();




