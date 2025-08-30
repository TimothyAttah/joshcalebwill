import React from 'react'
import HeroSlider from '../../components/heroSlider/HeroSlider';
import Slider from '../../components/heroSlider/Slider';
import Intro from './intro/Intro';
import Services from './services/Services';

const Home = () => {
  return (
		<>
			<Slider />
			<Intro />
			<Services/>
		</>
	);
}

export default Home