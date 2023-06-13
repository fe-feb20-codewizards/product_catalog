import React, { useState } from 'react';

import './Header.scss';


export const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleBurgerClick = () => {
		setIsActive((prevIsActive) => !prevIsActive);
	};

	const linkHref = isActive ? '#nav' : '#';

	return (
		<header className="homepage-header">
			<nav className="header-navigation navigation-header">
				<div className="navigation-header__left">
					<ul className="navigation-header__list_left">
						<li className="navigation-header__item logo">
							<a
								href="#home"
								className="navigation-header__link__logo"
							>
								<img
									className="navigation-header__image"
									src={process.env.PUBLIC_URL + '/images/logo.svg'}
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
				<div className="nav-buttons">
					<a href="/favorites" className="nav-buttons__element block">
						<img 
							src={process.env.PUBLIC_URL + '/images/Shopping bag (Cart).svg'}
							alt="favorities icon" 
							className="nav-buttons__icon"
						/>
					</a>
					<a href="/cart" className="nav-buttons__element block">
						<img 
							src={process.env.PUBLIC_URL + '/images/Vector (Stroke).svg'}
							alt="favorities icon" 
							className="nav-buttons__icon"
						/>
					</a>
					<a 
						href={linkHref}
						className={`nav-buttons__element none ${isActive ? 'lineactive' : ''}`}
						onClick={handleBurgerClick}
					>
						<div className="burgerline"></div>
						<div className="burgerline"></div>
						<div className="burgerline"></div>
					</a>
				</div>
			</nav>
		</header>
	);
};