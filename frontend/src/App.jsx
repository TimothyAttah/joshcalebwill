import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Culture from './pages/whoWeAre/modules/culture/Culture';
import Leaders from './pages/whoWeAre/modules/leaders/Leaders';
import WhoWeAre from './pages/whoWeAre/WhoWeAre';
import Contact from './pages/contact/Contact';
import Sustainability from './pages/sustainability/Sustainability';
import Environment from './pages/sustainability/environment/Environment';
import Climate from './pages/sustainability/climate/Climate';
import Careers from './pages/careers/Careers';
import Communities from './pages/sustainability/communities/Communities';
import Exploration from './pages/whatWeDo/exploration/Exploration';
import Procurement from './pages/whatWeDo/procurement/Procurement';
import Haulage from './pages/whatWeDo/haulage/Haulage2';


const App = () => {
	return (
		<>
			{/* <Cookie/> */}
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/who-we-are' element={<WhoWeAre />} />
					<Route path='/who-we-are/our-culture' element={<Culture />} />
					<Route path='/who-we-are/leadership' element={<Leaders />} />
					<Route path='/who-we-are/contact-us' element={<Contact />} />
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
