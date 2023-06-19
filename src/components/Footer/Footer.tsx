import React from 'react';
import './footer.scss';

export default function Footer() {
	return (
		<div className="footer">
			<div className='footer__container'>
				<div className='footer__logo'>
					<img
						className='footer__logo-img'
						src={process.env.PUBLIC_URL + '/images/logo.svg'}
						alt="logo"
					/>
				</div>
				<div className='footer__links'>
					<a href="https://github.com/fe-feb20-codewizards/product_catalog" className="footer__link uppercase">GITHUB</a>
					<a href="#contacts" className="footer__link uppercase">CONTACTS</a>
					<a href="#rights" className="footer__link uppercase">RIGHTS</a>
				</div>
				<a className="footer__goTop" href="#">
					<p className="footer__goTop-text small-text">Back to top</p>
					<img
						className="footer__goTop-icon"
						src={process.env.PUBLIC_URL + '/images/goTop-icon.svg'}
						alt="go to the top icon"
					/>
				</a>
			</div>
		</div>
	);
}
