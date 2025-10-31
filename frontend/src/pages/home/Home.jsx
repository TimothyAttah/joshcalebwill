import * as Styles from './HomeStyles';
import HomeServices from './services/homeServices/HomeServices';
import Welcome from './welcome/Welcome';
import { lazy, Suspense } from 'react';
import ScrollTextEffect from '../../components/ScrollingText';

const Slider = lazy(() => import('../../components/slider/Slider'));

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Suspense fallback={<div>Loading...</div>}>
				<Slider />
			</Suspense>
			<ScrollTextEffect />
			<Welcome />
			<HomeServices />
		</Styles.HomeContainer>
	);
};

export default Home;
