
import Slider from '../../components/slider2/Slider';
import HomeServices from './homeServices/HomeServices';
import Intro from './intro/Intro2';
import Services from './services/Services';


const Home = () => {
  return (
		<>
			<Slider />
			<Intro />
			<Services />
			<HomeServices/>

		</>
	);
}

export default Home