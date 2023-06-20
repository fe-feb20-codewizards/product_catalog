import React, { useState } from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import BurgerPopUp from '../BurgerPopUp/BurgerPopUp';
import { Badge } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useCatalogContext } from '../CatalogContext';

export const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const { favorites, cartQuantity } = useCatalogContext();

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
							to="/product_catalog/"
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
							to="/product_catalog/"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Home
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/product_catalog/phones"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Phones
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/product_catalog/tablets"
							className={({ isActive }) =>
								classNames('navigation-header__link', { active: isActive })
							}
						>
						Tablets
						</NavLink>
					</li>
					<li className="navigation-header__item_l">
						<NavLink
							to="/product_catalog/accessories"
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
						to="/product_catalog/favorites"
						className="nav-buttons__element block"
					>
						<Badge badgeContent={favorites.length} color="primary"   sx={{
							'& .MuiBadge-badge': {
								color: 'white',
								backgroundColor: 'red'
							}
						}}>
							<FavoriteBorderOutlinedIcon color='action' />
						</Badge>
					</Link>
					<Link
						to="/product_catalog/cart"
						className="nav-buttons__element block"
					>
						<Badge badgeContent={cartQuantity} color="primary">
							<LocalMallOutlinedIcon color='action' />
						</Badge>
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