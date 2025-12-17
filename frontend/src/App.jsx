import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Preloader from './components/Preloader';
import Cookies from './components/Cookies';

const Home = lazy(() => import('./pages/home/Home'));
const WhoWeAre = lazy(() => import('./pages/whoWeAre/WhoWeAre'));
const Culture = lazy(() => import('./pages/whoWeAre/modules/culture/Culture'));
const Leaders = lazy(() => import('./pages/whoWeAre/modules/leaders/Leaders'));
const LeaderProfile = lazy(() =>
	import('./pages/whoWeAre/modules/leaders/LeaderProfile'),
);
const History = lazy(() => import('./pages/whoWeAre/modules/history/History'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Sustainability = lazy(() =>
	import('./pages/sustainability/Sustainability'),
);
const Environment = lazy(() =>
	import('./pages/sustainability/environment/Environment'),
);
const Communities = lazy(() =>
	import('./pages/sustainability/communities/Communities'),
);
const Careers = lazy(() => import('./pages/careers/Careers'));
const Chemical = lazy(() => import('./pages/whatWeDo/chemicalSupply/Chemical'));
const Exploration = lazy(() =>
	import('./pages/whatWeDo/exploration/Exploration'),
);
const Gas = lazy(() => import('./pages/whatWeDo/gas/Gas'));
const Haulage = lazy(() => import('./pages/whatWeDo/haulage/Haulage2'));
const Health = lazy(() => import('./pages/whatWeDo/health/Health2'));
const Procurement = lazy(() =>
	import('./pages/whatWeDo/procurement/Procurement'),
);
const Pipeline = lazy(() => import('./pages/whatWeDo/pipeline/Pipeline2'));
const Lubricants = lazy(() => import('./pages/whatWeDo/lubricants/Lubricants'));

//Market Links
const Market = lazy(() => import('./pages/marketPlace/Market'));
const MarketHome = lazy(() =>
	import('./pages/marketPlace/pages/home/MarketHome'),
);
const Categories = lazy(() =>
	import('./pages/marketPlace/pages/categories/Categories'),
);
const Search = lazy(() => import('./pages/marketPlace/pages/search/Search'));
const Shop = lazy(() => import('./pages/marketPlace/pages/shop/Shop'));

const SingleProduct = lazy(() =>
	import(
		'./pages/marketPlace/pages/shop/modules/productDetails/SingleProducts'
	),
);

const Login = lazy(() => import('./pages/marketPlace/pages/login/Login'));
const Register = lazy(() =>
	import('./pages/marketPlace/pages/register/Register'),
);

const Profile = lazy(() =>
	import('./pages/marketPlace/pages/userProfile/UserProfile'),
);
const Shipping = lazy(() =>
	import('./pages/marketPlace/pages/shipping/Shipping'),
);

const Payment = lazy(() => import('./pages/marketPlace/pages/payment/Payment'));
const PlaceOrder = lazy(() =>
	import('./pages/marketPlace/pages/placeOrder/PlaceOrder'),
);
const PlaceOrderItems = lazy(() =>
	import('./pages/marketPlace/pages/placeOrder/PlaceOrderItems'),
);
const Order = lazy(() => import('./pages/marketPlace/pages/order/Order'));
const MyOrders = lazy(() =>
	import('./pages/marketPlace/pages/userProfile/myOrders/MyOrders'),
);
const AllUsers = lazy(() =>
	import('./pages/marketPlace/pages/admin/userList/UserList'),
);

const UserEdit = lazy(() =>
	import('./pages/marketPlace/pages/admin/userEdit/UserEdit'),
);

const ProductsAdmin = lazy(() =>
	import('./pages/marketPlace/pages/admin/products/Products'),
);

const EditProductsAdmin = lazy(() =>
	import('./pages/marketPlace/pages/admin/editProduct/EditProduct'),
);

const CreateProductsAdmin = lazy(() =>
	import('./pages/marketPlace/pages/admin/createProduct/CreateProduct'),
);

const ListOrdersAdmin = lazy(() =>
	import('./pages/marketPlace/pages/admin/orderLists/OrderLists'),
);

const App = () => {
	const [preloader, setPreloader] = useState(true);

	return (
		<>
			{/* {preloader ? (
				<Preloader preloader={preloader} setPreloader={setPreloader} />
			) : (


			)} */}

			<>
				<AnimatePresence mode='wait'>
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Home />} />
							<Route path='/who-we-are' element={<WhoWeAre />} />

							<Route path='/who-we-are/our-culture' element={<Culture />} />

							<Route path='/who-we-are/leadership' element={<Leaders />} />
							<Route
								path='/who-we-are/leadership/leader/:name'
								element={<LeaderProfile />}
							/>

							<Route path='/who-we-are/our-history' element={<History />} />

							<Route path='/who-we-are/contact-us' element={<Contact />} />

							<Route path='/sustainability' element={<Sustainability />} />

							<Route
								path='/sustainability/environment'
								element={<Environment />}
							/>

							<Route
								path='/sustainability/communities'
								element={<Communities />}
							/>

							<Route path='/who-we-are/jobs' element={<Careers />} />

							<Route
								path='/what-we-do/chemical-supply&treatments'
								element={<Chemical />}
							/>
							<Route path='/what-we-do/exploration' element={<Exploration />} />

							<Route
								path='/what-we-do/gas-compression-services'
								element={<Gas />}
							/>

							<Route
								path='/what-we-do/haulage-services'
								element={<Haulage />}
							/>

							<Route
								path='/what-we-do/health-and-safety'
								element={<Health />}
							/>

							<Route
								path='/what-we-do/procurement-solutions'
								element={<Procurement />}
							/>

							<Route
								path='/what-we-do/pipeline-construction-and-maintenance'
								element={<Pipeline />}
							/>

							<Route path='/what-we-do/lubricants' element={<Lubricants />} />

							<Route path='/market' element={<Market />}>
								<Route path='/market' element={<MarketHome />} />
								<Route
									path='categories/:categoryName'
									element={<Categories />}
								/>
								<Route path='search' element={<Search />} />
								<Route path='shop' element={<Shop />} />
								<Route path='shop/:id' element={<SingleProduct />} />
								<Route path='login' element={<Login />} />
								<Route path='register' element={<Register />} />
								<Route path='dashboard/profile' element={<Profile />} />
								<Route path='shipping' element={<Shipping />} />
								<Route path='payment' element={<Payment />} />
								<Route path='order' element={<PlaceOrder />} />
								<Route path='order/:id' element={<Order />} />
								<Route path='dashboard/orders' element={<MyOrders />} />
								<Route path='dashboard/admin' element={<AllUsers />} />
								<Route path='admin/user/:id/edit' element={<UserEdit />} />
								<Route
									path='dashboard/manage-products'
									element={<ProductsAdmin />}
								/>
								<Route
									path='admin/product/:id/edit'
									element={<EditProductsAdmin />}
								/>

								<Route
									path='dashboard/add-new-post'
									element={<CreateProductsAdmin />}
								/>

								<Route
									path='dashboard/manage-orders'
									element={<ListOrdersAdmin />}
								/>
							</Route>

							{/* <Route path='/search/:keyword' element={<Market />} />

							<Route path='/page/:pageNumber' element={<Market />} />

							<Route
								path='/search/:keyword/page/:pageNumber'
								element={<Market />}
							/>

							<Route path='/product/:id' element={<ProductItem />} />

							<Route path='/admin/productlist/' element={<ProductLists />} />

							<Route
								path='/admin/productlist/:pageNumber'
								element={<ProductLists />}
							/>

							<Route
								path='/admin/product/:id/edit'
								element={<ProductEdit />}
							/>

							<Route path='/admin/orderlist' element={<OrderList />} />

							<Route path='/cart/:id?' element={<Cart />} />

							<Route path='/login' element={<Login />} />

							<Route path='/register' element={<Register />} />

							<Route path='/profile' element={<Profile />} />

							<Route path='/admin/userlist' element={<UserList />} />

							<Route path='/admin/user/:id/edit' element={<UserEdit />} />

							<Route path='/shipping' element={<Shipping />} />

							<Route path='/register/shipping' element={<Shipping />} />

							<Route path='/payment' element={<Payment />} />

							<Route path='/placeorder' element={<PlaceOrder />} />

							<Route path='/order/:id' element={<Order />} /> */}

							{/*
				<Route path='/sustainability' element={<Sustainability />} />
				<Route path='/sustainability/environment' element={<Environment />} />
				<Route path='/sustainability/communities' element={<Communities />} />
				<Route path='/who-we-are/jobs' element={<Careers />} />
				<Route path='/what-we-do/exploration' element={<Exploration />} />
				<Route
					path='/what-we-do/procurement-solutions'
					element={<Procurement />}
				/>
				<Route path='/what-we-do/haulage-services' element={<Haulage />} />
				<Route
					path='/what-we-do/chemical-supply&treatments'
					element={<Chemical />}
				/>
				<Route
					path='/what-we-do/pipeline-construction-and-maintenance'
					element={<Pipeline2 />}
				/>
				<Route
					path='/what-we-do/gas-compression-services'
					element={<Gas />}
				/>

				<Route path='/what-we-do/health-and-safety' element={<Health2 />} />
				<Route path='/what-we-do/lubricants' element={<Lubricants />} /> */}

							{/* <Route path='/what-we-do/exploration' element={<Exploration />} />



				<Route path='/what-we-do/health-and-safety' element={<Health />} />




				<Route path='/sustainability' element={<Sustainability />} /> */}

							{/* <Route
					path='/sustainability/quality-policy-statement'
					element={<QualityPolicy />}
				/>
				<Route
					path='/sustainability/health-safety-environment-hse-policy'
					element={<HealthPolicy />}
				/> */}

							{/* <Route path='/contact' element={<Contact />} />
				<Route path='/market' element={<Market />} />
				<Route path='/product/:id' element={<ProductItem />} />
				<Route path='/cart/:id?' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/login/shipping' element={<Shipping />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/placeorder' element={<PlaceOrder />} />
				<Route path='/order/:id' element={<Order />} /> */}
						</Route>
					</Routes>
				</AnimatePresence>
			</>
			<ToastContainer />
		</>
	);
};

export default App;
