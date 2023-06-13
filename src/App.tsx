import React from 'react';
import './styles/App.scss';
import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PhonesPage } from './components/Content/PhonesPage';
import Content from './components/Content/Content';
import { NotFoundPage } from './components/Content/NotFoundPage';

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>

			<Routes>
				<Route path="/" element={<Content />} />
				<Route path="/home" element={<Navigate to="/" />} />
				<Route path="phonesPage">
					<Route index element={<PhonesPage />} />
					<Route path=":phoneId" element={<PhonesPage />} />
				</Route>
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
