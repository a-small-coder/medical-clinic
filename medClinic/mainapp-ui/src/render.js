import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { updateNewSearchText } from './redux/store';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		  <App state={state} updateNewSearchText={updateNewSearchText}/>
		</React.StrictMode>,
		document.getElementById('root')
	  );
	  
}