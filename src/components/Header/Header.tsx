import React from 'react';

import './Header.scss';
import { NavLink } from 'react-router-dom';
import classNames  from 'classnames';


export const Header = () => {
	return (
		<header className="homepage-header">
			<nav className="header-navigation navigation-header">
				<div className="navigation-header__left">
					<ul className="navigation-header__list_left">
						<li className="navigation-header__item logo">
							<NavLink
								to="/"
								className="navigation-header__link__logo is-active-link"
							>
								<img
									className="navigation-header__image"
									src={process.env.PUBLIC_URL + '/images/logo.svg'}
									alt="logo"
								/>
							</NavLink>
						</li>
						<li className="navigation-header__item_l">
							<NavLink 
								to="/"
								className={
								({isActive}) => classNames('navigation-header__link', {'active': isActive})}
							>
                Home
							</NavLink >
						</li>
						<li className="navigation-header__item_l">
							<NavLink 
								to="/phones"
								className={
								({isActive}) => classNames('navigation-header__link', {'active': isActive})}
							>
                Phones
							</NavLink >
						</li>
						<li className="navigation-header__item_l">
							<NavLink 
								to="/tablets"
								className={
								({isActive}) => classNames('navigation-header__link', {'active': isActive})}
                    
							>
                Tablets
							</NavLink >
						</li>
						<li className="navigation-header__item_l">
							<NavLink 
								to="/accessories"
								className={
								({isActive}) => classNames('navigation-header__link', {'active': isActive})}
							>
                Accessories
							</NavLink >
						</li>
					</ul>
				</div>
				<div className="nav-buttons">
					<a href="/favorites" className="nav-buttons__element">
						<img 
							src={process.env.PUBLIC_URL + '/images/Shopping bag (Cart).svg'}
							alt="favorities icon" 
							className="nav-buttons__icon"
						/>
					</a>
					<a href="/cart" className="nav-buttons__element">
						<img 
							src={process.env.PUBLIC_URL + '/images/Vector (Stroke).svg'}
							alt="favorities icon" 
							className="nav-buttons__icon"
						/>
					</a>
				</div>
			</nav>
		</header>
	);
};