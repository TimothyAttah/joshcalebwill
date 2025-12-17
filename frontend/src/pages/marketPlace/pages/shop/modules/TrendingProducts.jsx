import React, { useState } from 'react';
import ProductCards from './ProductCards';
import { getAllProducts } from '../../../../../reduxMarketNew/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TrendingProducts = () => {
	const [visibleProducts, setVisibleProducts] = useState(8);
	const loadMoreProducts = () => {
		setVisibleProducts((prevCount) => prevCount + 4);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const { products } = useSelector((state) => state.products);

	console.log('products', products);



	return (
		<section className='section__container product__container'>
			<h2 className='section__header'>Trending Products</h2>
			<p className='section__subheader mb-12'>
				Discover the Hottest Picks: Elevate Your Style with Our Curated
				Collection of Trending Women's Fashion Products.
			</p>
			<div className='mt-12' style={{ marginTop: '42px' }}>
				<ProductCards products={products?.slice(0, visibleProducts)} />
			</div>

			<div className='product__btn' style={{ marginTop: '20px' }}>
				{visibleProducts < products.length && (
					<button className='btn' onClick={loadMoreProducts}>
						Load More
					</button>
				)}
			</div>
		</section>
	);
};

export default TrendingProducts;
