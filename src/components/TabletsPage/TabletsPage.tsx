import React from 'react';
import { useCatalogContext } from '../CatalogContext';
// import ListProduct from '../ListProducts/ListProduct';
// import { Link } from 'react-router-dom';
import './TabletsPage.scss';
import { Loader } from '../Features/Loader/Loader';

export function TabletsPage() {
	// const { phonesData } = useCatalogContext();
	return (
		<div className='tablets'>
			<Loader />
			{/* <div className='tablets__links'>
				<Link to="/product_catalog/" className="tablets__link">
					<img src={process.env.PUBLIC_URL + '/images/Home.jpg'} alt="" className='tablets__home'/>
				</Link>
				{'    >    '} 
				<Link to="/product_catalog/tablets" className="tablets__link" >Tablets</Link>
			</div>
			<header className='tablets__header'>
				<h1 className='header__title'>Tablets</h1>
				<p className='header__title-text'>x models</p>
			</header>
			<section>
				<ListProduct list={phonesData} />  
			</section> */}
			{/* <h1 style={{fontSize: '50px', textAlign: 'center'}}>Page in building process!!!</h1> */}
		</div>
	);
}