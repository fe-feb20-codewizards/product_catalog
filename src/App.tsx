import React from 'react';
import './styles/App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import PhonesPage  from './components/PhonesPage/PhonesPage';
import Content from './components/Content/Content';
import { NotFoundPage } from './components/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import ProductPage from './components/ProductPage/ProductPage';
import Favorites from './components/Favorites/Favorites';
import { TabletsPage } from './components/TabletsPage/TabletsPage';
import { Accessories } from './components/Accessories/Accessories';

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<Routes>
				<Route path="/product_catalog/item/:itemId" element={<ProductPage />} />
				<Route path="/product_catalog" element={<Content />}>
					<Route path=':direction' element={<Content />}/>
				</Route>
				<Route path="/product_catalog/home" element={<Navigate to="/" />} />
				<Route path="/product_catalog/phones" element={<PhonesPage />} />
				<Route path="/product_catalog/tablets" element={<TabletsPage />} />
				<Route path="/product_catalog/accessories" element={<Accessories />} />
				<Route path="/product_catalog/favorites" element={<Favorites />} />
				<Route path="/product_catalog/cart" element={<Cart />} />
				<Route path="/product_catalog/product_catalog" element={<Navigate to="/" />} />
				<Route path="/product_catalog/*" element={<NotFoundPage />} />
			</Routes>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
