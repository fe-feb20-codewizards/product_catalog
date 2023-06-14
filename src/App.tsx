import React from 'react';
import './styles/App.scss';

import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<main>
				<Content />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
