import React, { useEffect, useState } from 'react';
import { products as productsData } from '../../data/newProduct';
import ProductCards from './modules/ProductCards';
import ShopFiltering from './modules/ShopFiltering';
import { getAllProducts, getShopProducts } from '../../../../reduxMarketNew/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const filters = {
	categories: [
		'all',
		'lubricants',
		'safety',
		'piping-hoses',
		'instrumentation',
	],
	colors: ['all', 'red', 'gold', 'white', 'green'],
	priceRanges: [
		{ label: 'Under N30000', min: 0, max: 30000 },
		{ label: 'N30000- N50000', min: 30000, max: 50000 },
		{ label: 'N50000 - N100000', min: 50000, max: 100000 },
		{ label: 'N100000 and above', min: 100000, max: Infinity },
	],
};

const Shop = () => {
	// const [products, setProducts] = useState(productsData);
	const [filtersState, setFiltersState] = useState({
		category: 'all',
		color: 'all',
		priceRange: '',
	});

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getShopProducts());
	// }, [dispatch]);

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);
	const [ProductsPerPage] = useState(6);
	const { category, color, priceRange } = filtersState;

	const [minPrice, maxPrice] = priceRange.split('-').map(Number);

	// const {
	// 	data: { products = [], totalPages, totalProducts } = {},
	// 	error,
	// 	isLoading,
	// } = useFetchAllProductsQuery({
	// 	category: category !== 'all' ? category : '',
	// 	color: color !== 'all' ? color : '',
	// 	minPrice: isNaN(minPrice) ? '' : minPrice,
	// 	maxPrice: isNaN(maxPrice) ? '' : maxPrice,
	// 	page: currentPage,
	// 	limit: ProductsPerPage,
	// });

	// const applyFilters = () => {
	// 	let filteredProducts = productsData;

	// 	//filter by category
	// 	if (filtersState.category && filtersState.category !== 'all') {
	// 		filteredProducts = filteredProducts.filter(
	// 			(product) => product.category === filtersState.category,
	// 		);
	// 	}

	// 	//filter by color
	// 	if (filtersState.color && filtersState.color !== 'all') {
	// 		filteredProducts = filteredProducts.filter(
	// 			(product) => product.color === filtersState.color,
	// 		);
	// 	}

	// 	//filter by price range
	// 	if (filtersState.priceRange) {
	// 		const [minPrice, maxPrice] = filtersState.priceRange
	// 			.split('-')
	// 			.map(Number);

	// 		filteredProducts = filteredProducts.filter(
	// 			(product) => product.price >= minPrice && product.price <= maxPrice,
	// 		);
	// 	}

	// 	setProducts(filteredProducts);
	// };

	// useEffect(() => {
	// 	applyFilters();
	// }, [filtersState]);

	// const {
	// 	products,
	// 	totalPages,
	// 	totalProducts,
	// 	// category: shopC,
	// 	// color,
	// 	// minPrice,
	// 	// maxPrice,
	// 	limit,
	// 	page,
	// } = useSelector((state) => state.products.productsShop);

	const { products } = useSelector((state) => state.products);

	console.log(products);

	// clear the filters

	const clearFilters = () => {
		setFiltersState({
			category: 'all',
			color: 'all',
			priceRange: '',
		});
	};

	const data = {
		category: category !== 'all' ? category : '',
		color: color !== 'all' ? color : '',
		minPrice: isNaN(minPrice) ? '' : minPrice,
		maxPrice: isNaN(maxPrice) ? '' : maxPrice,
		page: currentPage,
		limit: ProductsPerPage
	}

	// const handlePageChange = (pageNumber) => {
	// 	if (pageNumber > 0 && pageNumber <= totalPages) {
	// 		setCurrentPage(pageNumber);
	// 	}
	// };

	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>Error loading products.</div>;

	// const startProduct = (currentPage - 1) * ProductsPerPage + 1;
	// const endProduct = startProduct + products.length - 1;

	return (
		<>
			<section className='section__container bg-amber-50'>
				<h2 className='section__header capitalize'>Shop Page</h2>
				<p className='section__subheader'>
					Discover the Hottest Picks: Elevate Your Style with Our Curated
					Collection of Trending Women's Fashion Products.
				</p>
			</section>
			<section className='section__container'>
				<div className='flex flex-col md:flex-row md:gap-12 gap-8'>
					{/* left side */}
					{/* <ShopFiltering
						filters={filters}
						filtersState={filtersState}
						setFiltersState={setFiltersState}
						clearFilters={clearFilters}
					/> */}

					{/* right side */}
					<div>
						{/* <h3 className='text-xl font-medium mb-4'>
							Showing {startProduct} to {endProduct} of {totalProducts} products
						</h3> */}
						<h3 className='text-xl font-medium mb-4' style={{marginBottom: '20px'}}>
							Products Available: {products?.length}
						</h3>
						<ProductCards products={products} />

						{/* Pagination controls */}
						{/* <div className=' mt-6 flex justify-center'>
							<button
								disabled={currentPage === 1}
								onClick={() => handlePageChange(currentPage - 1)}
								className=' px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'
							>
								Previous
							</button>
							{[...Array(totalPages)].map((_, index) => (
								<button
									key={index}
									onClick={() => handlePageChange(index + 1)}
									className={`px-4 py-2 ${
										currentPage === index + 1
											? ' bg-blue-500 text-white'
											: ' bg-gray-300 text-gray-700'
									} rounded-md mx-1`}
								>
									{index + 1}
								</button>
							))}
							<button
								disabled={currentPage === totalPages}
								onClick={() => handlePageChange(currentPage + 1)}
								className=' px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'
							>
								Next
							</button>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Shop;
