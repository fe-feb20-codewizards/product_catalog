import React from 'react';

import './Header.scss';
// import favorite from '../../images/favourites.svg';
// import cart from '../../images/Cart.svg';
// import logo from '../../images/Logo.png';

export const Header = () => {
	return (
		<header className="homepage-header">
			<nav className="header-navigation navigation-header">
				<div className="navigation-header__left">
					<ul className="navigation-header__list_left">
						<li className="navigation-header__item logo">
							<a
								href="#home"
								className="navigation-header__link"
							>
								<img
									className="navigation-header__image"
									//   src={logo}
									alt="logo"
								/>
							</a>
						</li>
						<li className="navigation-header__item_l">
							<a 
								href="/"
								className='navigation-header__link active'
							>
                Home
							</a >
						</li>
						<li className="navigation-header__item_l">
							<a 
								href="/phones"
								className='navigation-header__link'
							>
                Phones
							</a >
						</li>
						<li className="navigation-header__item_l">
							<a 
								href="/tablets"
								className='navigation-header__link'
                    
							>
                Tablets
							</a >
						</li>
						<li className="navigation-header__item_l">
							<a 
								href="/accessories"
								className='navigation-header__link'
							>
                Accessories
							</a >
						</li>
					</ul>
				</div>
				<div className="navigation-header__right">
					<ul className="navigation-header__list_right">
						<li
							className='navigation-header__item'
						>
						</li>
        
						<li className="navigation-header__item">
							<a href="/favourites" className="navigation-header__link">
								<img
									className="navigation-header__image"
									//   src={favorite}
									alt="favorites"
								/>
							</a>
						</li>
						<li className="navigation-header__item">
							<a href="/cart" className="navigation-header__link">
								<img
									className="navigation-header__image"
									//   src={cart}
									alt="cart"
								/>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};