import * as Styles from './HomeStyles';
import SplitText from '../../components/splitText/SplitText2';
import HomeServices from './services/homeServices/HomeServices';
import Welcome from './welcome/Welcome';
import { lazy, Suspense } from 'react';

const Slider = lazy(() => import('../../components/slider/Slider'));

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Suspense fallback={<div>Loading...</div>}>
				<Slider />
			</Suspense>
			<SplitText />
			<Welcome />
			<HomeServices />
		</Styles.HomeContainer>
	);
};

export default Home;
