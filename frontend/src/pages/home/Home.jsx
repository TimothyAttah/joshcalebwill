// import Slider from '../../components/heroSlider/Slider';
// import Slider from '../../components/slider2/Slider';
import Slider from '../../components/slider3/Slider';
import TextAnimat1 from '../../components/textAnimate1/TextAnimat1';

// import Slider from '../../components/lastestSlider/LastestSlider';
// import Slider from '../../components/slider/NewSlider';

import HomeServices from './homeServices/HomeServices';
import Intro from './intro/Intro2';
import SecondServices from './secondServices/SecondServices';
import Services from './services/Services2';

const Home = () => {
	return (
		<>
			<Slider />
			<Intro />
			<SecondServices />
			<Services />
			<HomeServices />
		</>
	);
};

export default Home;
