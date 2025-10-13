import Slider from '../../components/slider/Slider';
import SplitText from '../../components/splitText/SplitText';
import * as Styles from './HomeStyles';
import Services from './services/Services';
import Welcome from './welcome/Welcome';

const Home = () => {
	return (
		<Styles.HomeContainer>
			<Slider />
			<SplitText />
			<Welcome />
			<Services />
		</Styles.HomeContainer>
	);
};

export default Home;
