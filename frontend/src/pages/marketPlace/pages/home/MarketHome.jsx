import React from 'react';
import Banner from './modules/banner/Banner';
import Categories from './modules/categories/Categories';
import HeroSection from './modules/heroSection/HeroSection';
import TrendingProducts from '../shop/modules/TrendingProducts';
import DealsSelection from './modules/dealsSelection/DealsSelection';
import PromoBanner from './modules/promoBanner/PromoBanner';
import Blogs from '../blogs/Blogs';

const MarketHome = () => {
	return (
		<>
			<Banner />
			<Categories />
			<HeroSection />
			<TrendingProducts />
			<DealsSelection />
			<PromoBanner />
			<Blogs />
		</>
	);
};

export default MarketHome;
