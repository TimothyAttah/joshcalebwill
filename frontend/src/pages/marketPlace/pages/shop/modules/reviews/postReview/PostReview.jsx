import { useState, useEffect } from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { user } from '../../../../../components/nav/MarketNav';
import { getProductDetails } from '../../../../../../../reduxMarketNew/actions/productAction';
import { createReview } from '../../../../../../../reduxMarketNew/actions/reviewAction';
import { useDispatch } from 'react-redux';

const PostReview = ({ close, isModalOpen }) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	const { id } = useParams();

	const dispatch = useDispatch();

	const handleRating = (value) => {
		setRating(value);
	};

	const handleReviewSubmit = () => {
		const newReview = {
			comment,
			rating,
			userId: user?._id,
			productId: id,
		};

		dispatch(createReview(newReview));
		setComment('');
    setRating(0);
    window.location.reload()
	};

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);
	return (
		<div
			className={` fixed inset-0 bg-black/90 flex items-center justify-center z-40 px-2 ${
				isModalOpen ? 'block' : 'hidden'
			}`}
		>
			<div className='bg-white p-6 rounded-md shadow-lg w-96 z-50'>
				<h2>Post A Review</h2>
				<div className='flex items-center mb-4'>
					{[1, 2, 3, 4, 5].map((star) => (
						<span
							key={star}
							onClick={() => handleRating(star)}
							className=' cursor-pointer text-yellow-500 text-lg'
						>
							{rating >= star ? <RiStarFill /> : <RiStarLine />}
						</span>
					))}
				</div>
				<textarea
					name='comment'
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					rows='4'
					className=' w-full border-gray-300 rounded-md mb-4'
				></textarea>
				<div className=' flex justify-end gap-2'>
					<button onClick={close} className=' px-4 py-2 bg-gray-300'>
						Cancel
					</button>
					<button
						onClick={handleReviewSubmit}
						className=' px-4 py-2 bg-red-600 text-white rounded-md'
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostReview;
