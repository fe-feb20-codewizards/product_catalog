import React from 'react';
import './styles/App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PhonesPage } from './components/Content/PhonesPage';
import Content from './components/Content/Content';
import { NotFoundPage } from './components/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<Routes>
				<Route path="/item/:itemId" element={<ProductPage />} />
				<Route path="/" element={<Content />}>
					<Route path=':direction' element={<Content />}/>
				</Route>
				<Route path="/home" element={<Navigate to="/" />} />
				<Route path="phones" element={<PhonesPage />} />
				<Route path="tablets" element={<h1>tabletPage</h1>} />
				<Route path="accessories" element={<h1>accessoriesPage</h1>} />
				<Route path="favorites" element={<h2>Favories</h2>} />
				<Route path="cart" element={<Cart />} />
				<Route path="product_catalog" element={<Navigate to="/" />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
