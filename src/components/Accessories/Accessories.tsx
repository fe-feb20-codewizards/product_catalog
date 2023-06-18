import React from 'react';
import { useCatalogContext } from '../CatalogContext';
import ListProduct from '../ListProducts/ListProduct';
import { Link } from 'react-router-dom';
import './Accessories.scss';

export function Accessories() {
	const { phonesData } = useCatalogContext();
	return (
		<div className='accessories'>
			<div>
				<Link to="/" className="accessories__link">
					<img src={process.env.PUBLIC_URL + '/images/Home.jpg'} alt="" className='accessories__home' />
				</Link> 
				{'    >    '}
				<Link to="/accessories" className="accessories__link" >Accessories</Link>
			</div>
			<header className='accessories__header'>
				<h1 className='header__title'>Accessories</h1>
				<p className='header__title-text'>x models</p>
			</header>
			<section>
				<ListProduct list={phonesData} />
			</section>
		</div>
	);
}