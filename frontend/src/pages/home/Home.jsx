import Slider from '../../components/slider/Slider';
import SplitText from '../../components/splitText/SplitText2';
import * as Styles from './HomeStyles';
import HomeServices from './services/homeServices/HomeServices';
import Welcome from './welcome/Welcome';

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Slider />
			<SplitText />
			<Welcome />
			<HomeServices />
		</Styles.HomeContainer>
	);
};

export default Home;
