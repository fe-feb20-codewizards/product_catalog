import React from 'react';
import { useCatalogContext } from '../CatalogContext';
import './Phones.scss';
import { Link } from 'react-router-dom';
import ListProduct from '../ListProducts/ListProduct';

export default function PhonesPage() {
	const { phonesData } = useCatalogContext();
	return (
		<div className='phones'>
			<div className='phones_link'>
				<Link to="/" className="phones__link">
					<img src={process.env.PUBLIC_URL + '/images/Home.jpg'} alt="" className='phones__home'/>
				</Link>
				{' > '} 
				<Link to="/phones" className="phones__link">Phones</Link>
			</div>
			<header className='phones__header'>
				<h1 className='phones__header__title'>Phones Model</h1>
				<p className='phones__header__title-text'>95 models</p>
			</header>
			<section>
				<ListProduct list={phonesData} />  
			</section>
		</div>
	);
}