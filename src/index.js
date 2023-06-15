import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { CatalogContextProvider } from './components/CatalogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<CatalogContextProvider>
				<App />
			</CatalogContextProvider>
		</Router>
	</React.StrictMode>
);
