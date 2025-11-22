import { Outlet } from 'react-router-dom';
import MarketNav from './components/nav/MarketNav';
import Footer from './components/Footer';
import './MarketPlace.css'

const Market = () => {
	return (
		<>
			<MarketNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default Market;
