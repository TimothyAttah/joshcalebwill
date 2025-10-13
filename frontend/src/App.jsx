import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Home from './pages/home/Home';
// import OurValues from './pages/whoWeAre/ourValues/OurValues';
// import TheTeam from './pages/whoWeAre/theTeam/TheTeam';
// import RecentAndPast from './pages/whoWeAre/recentAndPast/RecentAndPast';
// import FirstChoice from './pages/whoWeAre/firstChoice/FirstChoice';
// import TodayArticle from './pages/whoWeAre/todayArticle/TodayArticle';
// import ChemicalSupply from './pages/whatWeDo/chemicalSupply/Chemical';
// import Exploration from './pages/whatWeDo/exploration/Exploration2';
// import Pipeline from './pages/whatWeDo/pipeline/Pipeline2';
// import Gas from './pages/whatWeDo/gas/Gas2';
// import Health from './pages/whatWeDo/health/Health2';
// import Haulage from './pages/whatWeDo/haulage/Haulage2';
// import Contact from './pages/contact/Contact';
// import Procurement from './pages/whatWeDo/procurement/Procurement2';
// import Market from './pages/market/Market';
// import ProductItem from './pages/products/ProductItem';
// import QualityPolicy from './pages/sustainability/qualityPolicy/QualityPolicy';
// import HealthPolicy from './pages/sustainability/healthPolicy/HealthPolicy';
// import Cart from './pages/cart/Cart';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';
// import Profile from './pages/profile/Profile';
// import Shipping from './pages/shipping/Shipping';
// import Payment from './pages/payment/Payment';
// import PlaceOrder from './pages/placeOrder/PlaceOrder';
// import Order from './pages/order/Order';
// import WhoWeAre from './pages/whoWeAre/WhoWeAre';
// import Sustainability from './pages/sustainability/Sustainability';
// import Cookie from './components/Cookie';
// import Lubricants from './pages/whatWeDo/lubricants/Lubricants';

const App = () => {
	return (
		<>
			{/* <Cookie/> */}
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					{/* <Route path='/who-we-are' element={<WhoWeAre />} /> */}
					{/* <Route
						path='/who-we-are/values-belief&culture'
						element={<OurValues />}
					/>
					<Route path='/who-we-are/directors' element={<TheTeam />} />
					<Route
						path='/who-we-are/recent-and-past-involvement'
						element={<RecentAndPast />}
					/>
					<Route path='/who-we-are/first-choice' element={<FirstChoice />} />
					<Route
						path="/who-we-are/today's-article&careerse"
						element={<TodayArticle />}
					/> */}

					{/* <Route path='/what-we-do/exploration' element={<Exploration />} />
					<Route
						path='/what-we-do/chemical-supply&treatments'
						element={<ChemicalSupply />}
					/>
					<Route
						path='/what-we-do/pipeline-construction-and-maintenance'
						element={<Pipeline />}
					/>
					<Route
						path='/what-we-do/gas-compression-services'
						element={<Gas />}
					/>
					<Route path='/what-we-do/health-and-safety' element={<Health />} />
					<Route
						path='/what-we-do/procurement-solutions'
						element={<Procurement />}
					/>
					<Route path='/what-we-do/haulage-services' element={<Haulage />} />
					<Route path='/what-we-do/lubricants' element={<Lubricants />} />

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
