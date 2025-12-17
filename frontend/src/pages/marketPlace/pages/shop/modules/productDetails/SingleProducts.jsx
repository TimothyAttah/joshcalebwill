import { RiArrowRightSLine } from 'react-icons/ri';
import { data, Link, useParams } from 'react-router-dom';
import RatingStars from '../../../../components/RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../../../../reduxMarketNew/actions/productAction';
import { addToCart } from '../../../../../../reduxMarketNew/actions/cartActions';
import ReviewsCard from '../reviews/ReviewsCard';

import { useEffect } from 'react';

const SingleProducts = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch]);

	const { product } = useSelector((state) => state.products);
	const  reviews  = useSelector((state) => state.products.product);

	console.log(product);
	console.log(reviews);

	// const productReviews = [];

	const productReviews = reviews?.reviews;
	console.log('pro', productReviews);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<>
			<section className='section__container bg-amber-50'>
				<h2 className='section__header capitalize'>Single Product Page</h2>
				<div className=' section-subheader space-x-2 flex items-center justify-center'>
					<span className=' hover:text-red-500'>
						<Link to='/market'>home</Link>
					</span>
					<RiArrowRightSLine />
					<span className=' hover:text-red-500'>
						<Link to='/market/shop'>shop</Link>
					</span>
					<RiArrowRightSLine />
					<span className=' hover:text-red-500'>{product?.product?.name}</span>
				</div>
			</section>

			<section className=' section-container mt-8'>
				<div className='flex flex-col items-center md:flex-row gap-8 '>
					<div className=' md:w-1/2 w-full'>
						<img
							src={product?.product?.image}
							alt=''
							className='rounded-md w-full h-auto'
						/>
					</div>

					<div className=' md:w-1/2 w-full'>
						<h3 className=' text-2xl font-semibold mb-4'>
							{product?.product?.name}
						</h3>
						<p className=' text-xl text-red-500 mb-4 space-x-1'>
							${product?.product?.price}
							{product?.product?.oldPrice && (
								<s className=' ml-1'> ${product?.product?.oldPrice}</s>
							)}
						</p>
						<p className=' text-gray-400 mb-4'>
							{product?.product?.description}
						</p>

						<div className=' flex flex-col space-y-2'>
							<p>
								<strong>Category:</strong> {product?.product?.category}
							</p>
							<p>
								<strong>Color:</strong> {product?.product?.color}
							</p>
							<div className=' flex gap-1 items-center'>
								<strong>Rating:</strong>
								<RatingStars rating={product?.product?.rating} />
							</div>
							<button
								onClick={(e) => {
									e.stopPropagation();
									handleAddToCart(product);
								}}
								className=' mt-6 px-6 py-3 bg-red-500 text-white rounded-md'
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className=' section-container mt-8'>
				<ReviewsCard productReviews={productReviews} />
			</section>
		</>
	);
};

export default SingleProducts;
