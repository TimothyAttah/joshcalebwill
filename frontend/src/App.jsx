import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';


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
const Market = lazy(() => import('./pages/market/Market'));
const ProductItem = lazy(() => import('./pages/products/ProductItem'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Shipping = lazy(() => import('./pages/shipping/Shipping'));
const Payment = lazy(() => import('./pages/payment/Payment'));
const PlaceOrder = lazy(() => import('./pages/placeOrder/PlaceOrder'));
const Order = lazy(() => import('./pages/order/Order'));
const UserList = lazy(() => import('./pages/userList/UserList'));
const UserEdit = lazy(() => import('./pages/userEdit/UserEdit'));
const ProductLists = lazy(() => import('./pages/productLists/ProductLists'));
const ProductEdit = lazy(() => import('./pages/productEdit/ProductEdit'));
const OrderList = lazy(() => import('./pages/orderList/OrderList'));
















const App = () => {
	return (
		<>
			{/* <Cookie/> */}
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path='/who-we-are'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<WhoWeAre />
							</Suspense>
						}
					/>

					<Route
						path='/who-we-are/our-culture'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Culture />
							</Suspense>
						}
					/>

					<Route
						path='/who-we-are/leadership'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Leaders />
							</Suspense>
						}
					/>
					<Route
						path='/who-we-are/leadership/leader/:name'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<LeaderProfile />
							</Suspense>
						}
					/>

					<Route
						path='/who-we-are/our-history'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<History />
							</Suspense>
						}
					/>

					<Route
						path='/who-we-are/contact-us'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Contact />
							</Suspense>
						}
					/>

					<Route
						path='/sustainability'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Sustainability />
							</Suspense>
						}
					/>

					<Route
						path='/sustainability/environment'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Environment />
							</Suspense>
						}
					/>

					<Route
						path='/sustainability/communities'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Communities />
							</Suspense>
						}
					/>

					<Route
						path='/who-we-are/jobs'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Careers />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/chemical-supply&treatments'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Chemical />
							</Suspense>
						}
					/>
					<Route
						path='/what-we-do/exploration'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Exploration />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/gas-compression-services'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Gas />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/haulage-services'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Haulage />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/health-and-safety'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Health />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/procurement-solutions'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Procurement />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/pipeline-construction-and-maintenance'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Pipeline />
							</Suspense>
						}
					/>

					<Route
						path='/what-we-do/lubricants'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Lubricants />
							</Suspense>
						}
					/>

					

					<Route
						path='/market'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Market />
							</Suspense>
						}
					/>

					<Route
						path='/search/:keyword'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Market />
							</Suspense>
						}
					/>

					<Route
						path='/page/:pageNumber'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Market />
							</Suspense>
						}
					/>

					<Route
						path='/search/:keyword/page/:pageNumber'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Market />
							</Suspense>
						}
					/>

					<Route
						path='/product/:id'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<ProductItem />
							</Suspense>
						}
					/>

					<Route
						path='/admin/productlist/'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<ProductLists />
							</Suspense>
						}
					/>

					<Route
						path='/admin/productlist/:pageNumber'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<ProductLists />
							</Suspense>
						}
					/>

					<Route
						path='/admin/product/:id/edit'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<ProductEdit />
							</Suspense>
						}
					/>

					<Route
						path='/admin/orderlist'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<OrderList />
							</Suspense>
						}
					/>

					<Route
						path='/cart/:id?'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Cart />
							</Suspense>
						}
					/>

					<Route
						path='/login'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Login />
							</Suspense>
						}
					/>

					<Route
						path='/register'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Register />
							</Suspense>
						}
					/>

					<Route
						path='/profile'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Profile />
							</Suspense>
						}
					/>

					<Route
						path='/admin/userlist'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<UserList />
							</Suspense>
						}
					/>

					<Route
						path='/admin/user/:id/edit'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<UserEdit />
							</Suspense>
						}
					/>

					<Route
						path='/shipping'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Shipping />
							</Suspense>
						}
					/>

					<Route
						path='/register/shipping'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Shipping />
							</Suspense>
						}
					/>

					<Route
						path='/payment'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Payment />
							</Suspense>
						}
					/>

					<Route
						path='/placeorder'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<PlaceOrder />
							</Suspense>
						}
					/>

					<Route
						path='/order/:id'
						element={
							<Suspense fallback={<div>loading...</div>}>
								<Order />
							</Suspense>
						}
					/>

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
			<ToastContainer />
		</>
	);
};

export default App;
