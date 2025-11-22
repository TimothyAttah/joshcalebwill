import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiSearchLine, RiShoppingBagLine, RiUserLine } from 'react-icons/ri';
import * as Styles from './MarketNavStyles';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from '../../pages/shop/modules/cartModal/CartModal';
import avatarImg from '../../../../assets/avatar.png';
import { useLogoutUserMutation } from '../../../../reduxMarket/features/auth/authApi';
import { logout } from '../../../../reduxMarket/features/auth/authSlice';

const MarketNav = () => {
	const products = useSelector((state) => state.cart.products);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleCartToggle = () => {
		setIsCartOpen((prev) => !prev);
	};

	// show user if logged in
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const [logoutUser] = useLogoutUserMutation();
	const navigate = useNavigate();

	//dropdown menus
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const handleDropDownToggle = () => {
		setIsDropDownOpen((prev) => !prev);
	};

	//admin dropdown menus
	const adminDropDownMenus = [
		{ label: 'Dashboard', path: '/market/dashboard/admin' },
		{ label: 'Manage Items', path: '/market/dashboard/manage-products' },
		{ label: 'All Orders', path: '/market/dashboard/manage-orders' },
		{ label: 'Add New Post', path: '/market/dashboard/add-new-post' },
	];

	//user dropdown menus
	const userDropDownMenus = [
		{ label: 'Dashboard', path: '/market/dashboard' },
		{ label: 'Profile', path: '/market/dashboard/profile' },
		{ label: 'Payments', path: '/market/dashboard/payments' },
		{ label: 'Orders', path: '/market/dashboard/orders' },
	];

	const dropdownMenus =
		user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus];

	const handleLogout = async () => {
		try {
			await logoutUser().unwrap();
			dispatch(logout());
			navigate('/market');
		} catch (err) {
			console.error('Failed to log out', err);
		}
	};
	return (
		<div className=' fixeed-nav-bar w-nav' style={{ paddingTop: '120px' }}>
			<div className=' market__nav max-w-screen-2x1 mx-auto px-4 justify-between items-center'>
				<ul className='nav__links'>
					<li className='link'>
						<Link to='/market'>Home</Link>
					</li>
					<li className='link'>
						<Link to='/market/shop'>Shop</Link>
					</li>
					<li className='link'>
						<Link to='/market'>Pages</Link>
					</li>
					<li className='link'>
						<Link to='/market'>Contact</Link>
					</li>
				</ul>

				<div className='nav__logo'>
					<Link to='/'>
						Joshcalebwill<span>.</span>
					</Link>
				</div>

				<div className='nav__icons relative'>
					<span>
						<Link to='/market/search'>
							<RiSearchLine />
						</Link>
					</span>
					<span>
						<Styles.ShoppingBag
							onClick={handleCartToggle}
							className=' hover:text-red-500'
						>
							<RiShoppingBagLine />
							<sup className=' text-sm inline-block px-1.5 text-white rounded-full bg-red-500 text-center'>
								{products.length}
							</sup>
						</Styles.ShoppingBag>
					</span>
					<span>
						{user && user ? (
							<>
								<img
									onClick={handleDropDownToggle}
									src={user?.profileImage || avatarImg}
									alt=''
									className=' size-6 rounded-full cursor-pointer'
								/>

								{isDropDownOpen && (
									<div className=' absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
										<ul className=' font-medium space-y-4 p-2'>
											{dropdownMenus.map((menu, index) => (
												<li key={index}>
													<Link
														to={menu.path}
														onClick={() => setIsDropDownOpen(false)}
														className=' dropdown-items'
													>
														{menu.label}
													</Link>
												</li>
											))}
											<li>
												<Link
													onClick={handleLogout}
													className=' dropdown-items'
												>
													Logout
												</Link>
											</li>
										</ul>
									</div>
								)}
							</>
						) : (
							<Link to='/market/login'>
								<RiUserLine />
							</Link>
						)}
					</span>
				</div>
			</div>

			{isCartOpen && (
				<CartModal
					products={products}
					isOpen={isCartOpen}
					onClose={() => setIsCartOpen(false)}
				/>
			)}
		</div>
	);
};

export default MarketNav;
