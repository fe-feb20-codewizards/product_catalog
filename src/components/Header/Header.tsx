import React, { useState } from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import BurgerPopUp from '../BurgerPopUp/BurgerPopUp';

export const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleBurgerClick = () => {
		setIsActive((prevIsActive) => !prevIsActive);
	};

	const linkHref = isActive ? '#nav' : '#';

	return (
		<div className="navigation-header__left">
			<BurgerPopUp />
			
			<ul className="navigation-header__list_left">
				<div className='navigation-header__cotainer'>
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
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Home
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/phones"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Phones
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/tablets"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Tablets
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/accessories"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Accessories
						</NavLink>
					</li>
				</div>
				<div className="nav-buttons">
					<Link
						to="/favorites"
						className="nav-buttons__element block"
					>
						<img
							src={process.env.PUBLIC_URL + '/images/heart.svg'}
							alt="favorities icon"
							className="nav-buttons__icon"
						/>
					</Link>
					<Link
						to="/cart"
						className="nav-buttons__element block"
					>
						<img
							src={process.env.PUBLIC_URL + '/images/Shopping bag (Cart).svg'}
							alt="favorities icon"
							className="nav-buttons__icon"
						/>
					</Link>
					
					<a
						href={linkHref}
						className={`nav-buttons__element none ${isActive ? 'lineactive' : ''
						}`}
						onClick={handleBurgerClick}
					>
						<div className="burgerline"></div>
						<div className="burgerline"></div>
						<div className="burgerline"></div>
					</a>
				</div>
			</ul>
		</div>
	);
};