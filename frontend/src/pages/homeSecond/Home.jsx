import React from 'react';
import NewSlider from '../../components/newSlider/NewSliderItem';
import Welcome from './modules/welcome/Welcome';
import ImgAnimation from '../../components/imgAnimation/ImgAnimation';
import HomeServices from '../home/homeServices/HomeServices';
import Gallery from '../../components/gallery/Gallery';
import LastestSlider from '../../components/lastestSlider/LastestSlider';
import HomeAbout from './modules/homeAbout/HomeAbout2';
import TextAnimate from '../../components/textAnimate/TextAnimate';

const Home = () => {
	return (
		<div>
			<NewSlider />
			{/* <LastestSlider/> */}
			{/* <Welcome /> */}
			<HomeAbout />
			<TextAnimate />
			{/* <ImgAnimation /> */}
			<HomeServices />
			{/* <Gallery/> */}
		</div>
	);
};

export default Home;
