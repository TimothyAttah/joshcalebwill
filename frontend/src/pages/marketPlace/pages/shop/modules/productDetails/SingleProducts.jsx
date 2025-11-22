import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../../../../reduxMarket/features/products/productsApi';
import { addToCart } from '../../../../../../reduxMarket/features/cart/cartSlice';
import ReviewsCard from '../reviews/ReviewsCard';

const SingleProducts = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, error, isLoading } = useFetchProductByIdQuery(id);

	const singleProduct = data?.product || {};
	const productReviews = data?.reviews || [];

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading product details.</p>;

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
					<span className=' hover:text-red-500'>{singleProduct?.name}</span>
				</div>
			</section>

			<section className=' section-container mt-8'>
				<div className='flex flex-col items-center md:flex-row gap-8 '>
					<div className=' md:w-1/2 w-full'>
						<img
							src={singleProduct?.image}
							alt=''
							className='rounded-md w-full h-auto'
						/>
					</div>

					<div className=' md:w-1/2 w-full'>
						<h3 className=' text-2xl font-semibold mb-4'>
							{singleProduct?.name}
						</h3>
						<p className=' text-xl text-red-500 mb-4 space-x-1'>
							${singleProduct?.price}
							{singleProduct?.oldPrice && (
								<s className=' ml-1'> ${singleProduct?.oldPrice}</s>
							)}
						</p>
						<p className=' text-gray-400 mb-4'>{singleProduct?.description}</p>

						<div className=' flex flex-col space-y-2'>
							<p>
								<strong>Category:</strong> {singleProduct?.category}
							</p>
							<p>
								<strong>Color:</strong> {singleProduct?.color}
							</p>
							<div className=' flex gap-1 items-center'>
								<strong>Rating:</strong>
								<RatingStars rating={singleProduct?.rating} />
							</div>
							<button
								onClick={(e) => {
									e.stopPropagation();
									handleAddToCart(singleProduct);
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
