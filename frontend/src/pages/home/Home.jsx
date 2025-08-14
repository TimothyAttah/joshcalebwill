import React from 'react';
import NewSlider from '../../components/slider/NewSlider';
import Welcome from './modules/welcome/Welcome';
import ImgAnimation from '../../components/imgAnimation/ImgAnimation';
import HomeServices from './modules/homeServices/HomeServices';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
	return (
		<div>
			<NewSlider />
			<Welcome />
			<ImgAnimation />
			<HomeServices />
			{/* <Gallery/> */}
		</div>
	);
};

export default Home;
