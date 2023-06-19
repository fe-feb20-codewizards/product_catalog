import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
	return (
		<div className="Page" style={{
			color: '#EB5757', margin: '50px auto', textAlign: 'center'
		}}>
			<h1 style={{fontSize: '50px', fontFamily: 'Arial', margin: '25px'}}> Page Not Found! </h1>
			<p style={{fontSize: '20px', fontFamily: 'Arial'}}>Did you mean <Link to="/product_catalog" style={{color: '#EB5757'}}><strong>Catalog Page</strong></Link>?</p>
		</div>
	);
}