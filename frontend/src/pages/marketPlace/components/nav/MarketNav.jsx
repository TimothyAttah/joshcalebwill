import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiSearchLine, RiShoppingBagLine, RiUserLine } from 'react-icons/ri';
import * as Styles from './MarketNavStyles';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from '../../pages/shop/modules/cartModal/CartModal';
import avatarImg from '../../../../assets/avatar.png';
import { logoutUser } from '../../../../reduxMarketNew/actions/userActions';

export const { user } = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: {};

const MarketNav = () => {
	const products = useSelector((state) => state.cart.products);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleCartToggle = () => {
		setIsCartOpen((prev) => !prev);
	};

	//Total calculations
	const subtotal = products?.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);
	const totalItems = products?.reduce((acc, item) => acc + item.quantity, 0);
	const shippingFee = totalItems * 0.05;
	const orderTotal = subtotal + shippingFee;

	// show user if logged in
	const dispatch = useDispatch();
	// const { user } = useSelector((state) => state?.user);

	console.log(user);

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
		// { label: 'Dashboard', path: '/market/dashboard' },
		{ label: 'Profile', path: '/market/dashboard/profile' },
		// { label: 'Payments', path: '/market/dashboard/payments' },
		{ label: 'Orders', path: '/market/dashboard/orders' },
	];

	const dropdownMenus =
		user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus];

	const handleLogout = async () => {
		dispatch(logoutUser());
		localStorage.removeItem('token');
		localStorage.removeItem('user');

		navigate('/market');
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
							{totalItems > 0 && (
								<sup className=' text-sm inline-block px-1.5 text-white rounded-full bg-red-500 text-center'>
									{totalItems}
								</sup>
							)}
						</Styles.ShoppingBag>
					</span>
					<span>
						{user ? (
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
														onClick={() => handleDropDownToggle()}
														className=' dropdown-items'
													>
														{menu.label}
													</Link>
												</li>
											))}
											<li>
												<div
													onClick={() => handleLogout()}
													className=' dropdown-items cursor-pointer'
												>
													Logout
												</div>
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
					totalItems={totalItems}
					subtotal={subtotal}
					shippingFee={shippingFee}
					orderTotal={orderTotal}
					isOpen={isCartOpen}
					onClose={() => setIsCartOpen(false)}
				/>
			)}
		</div>
	);
};

export default MarketNav;
