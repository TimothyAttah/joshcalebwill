import React from 'react';
import NewSlider from '../../components/newSlider/NewSliderItem';
import Welcome from './modules/welcome/Welcome';
import ImgAnimation from '../../components/imgAnimation/ImgAnimation';
import HomeServices from './modules/homeServices/HomeServices';
import Gallery from '../../components/gallery/Gallery';
import LastestSlider from '../../components/lastestSlider/LastestSlider';

const Home = () => {
	return (
		<div>
			<NewSlider />
			{/* <LastestSlider/> */}
			<Welcome />
			<ImgAnimation />
			<HomeServices />
			{/* <Gallery/> */}
		</div>
	);
};

export default Home;
