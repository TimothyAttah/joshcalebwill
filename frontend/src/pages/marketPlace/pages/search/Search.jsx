import React, { useEffect, useState } from 'react';
import { products as productsData } from '../../data/newProduct';
import ProductCards from '../shop/modules/ProductCards';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredProducts, setFilterProducts] = useState(productsData);

	const handleSearch = () => {
		const query = searchQuery.toLowerCase();
		const filtered = productsData.filter(
			(product) =>
				product.name.toLowerCase().includes(query) ||
				product.description.toLowerCase().includes(query),
		);

		setFilterProducts(filtered);
	};

	return (
		<>
			<section className='section__container bg-amber-50'>
				<h2 className='section__header capitalize'>Search Products</h2>
				<p className='section__subheader'>
					Browse a diverse range of categories, from great products to versatile
					accessories. Elevate your style today!
				</p>
			</section>

			<section className='section__container'>
				<div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4' style={{marginBottom: '48px'}}>
					<input
						type='text'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className=' search-bar w-full max-w-4xl p-2 border border-b-2 rounded'
						placeholder='Search for products...'
					/>
					<button
						onClick={handleSearch}
						className='search-button w-full md:w-auto py-2 px-8 bg-red-500 text-white rounded'
						style={{padding: '8px 32px'}}
					>
						Search
					</button>
				</div>

				<ProductCards products={filteredProducts} />
			</section>
		</>
	);
};

export default Search;
