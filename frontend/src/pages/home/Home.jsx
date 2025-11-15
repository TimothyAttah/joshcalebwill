import * as Styles from './HomeStyles';
import HomeServices from './services/homeServices/HomeServices';
import Welcome from './welcome/Welcome';
import { lazy, Suspense } from 'react';
import ScrollTextEffect from '../../components/ScrollingText';
import Transition from '../../components/Transition'

const Slider = lazy(() => import('../../components/slider/Slider'));

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Slider />
			<ScrollTextEffect />
			<Welcome />
			<HomeServices />
		</Styles.HomeContainer>
	);
};

export default Transition(Home);
