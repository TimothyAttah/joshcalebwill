import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import OurValues from './pages/whoWeAre/ourValues/OurValues';
import TheTeam from './pages/whoWeAre/theTeam/TheTeam';
import RecentAndPast from './pages/whoWeAre/recentAndPast/RecentAndPast';
import FirstChoice from './pages/whoWeAre/firstChoice/FirstChoice';
import TodayArticle from './pages/whoWeAre/todayArticle/TodayArticle';
import ChemicalSupply from './pages/whatWeDo/chemicalSupply/ChemicalSupply';
import Exploration from './pages/whatWeDo/exploration/Exploration';
import Pipeline from './pages/whatWeDo/pipeline/Pipeline';
import Gas from './pages/whatWeDo/gas/Gas';
import Health from './pages/whatWeDo/health/Health';
import Contact from './pages/contact/Contact';
import Procurement from './pages/whatWeDo/procurement/Procurement';
import Market from './pages/market/Market';
import ProductItem from './pages/market/productItem/ProductItem';
import QualityPolicy from './pages/sustainability/qualityPolicy/QualityPolicy';
import HealthPolicy from './pages/sustainability/healthPolicy/HealthPolicy';

const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route
						path='/who-we-are/values-belief&culture'
						element={<OurValues />}
					/>
					<Route
						path='/who-we-are/meet-the-prolific-team'
						element={<TheTeam />}
					/>
					<Route
						path='/who-we-are/recent-and-past-involvement'
						element={<RecentAndPast />}
					/>
					<Route
						path='/who-we-are/why-were-always-the-first-choice'
						element={<FirstChoice />}
					/>
					<Route
						path="/who-we-are/today's-article&careerse"
						element={<TodayArticle />}
					/>
					<Route path='/what-we-do/exploration' element={<Exploration />} />
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
					<Route
						path='/sustainability/quality-policy-statement'
						element={<QualityPolicy />}
					/>
					<Route
						path='/sustainability/health-safety-environment-hse-policy'
						element={<HealthPolicy />}
					/>

					<Route path='/contact' element={<Contact />} />
					<Route path='/market' element={<Market />} />
					<Route path='/product/:id' element={<ProductItem />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
