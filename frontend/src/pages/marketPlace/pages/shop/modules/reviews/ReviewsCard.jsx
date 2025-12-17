import React from 'react';
import commentorIcon from '../../../../../../assets/avatar.png';
import { formatDate } from '../../../../../../utils/formatDate';
import RatingStars from '../../../../components/RatingStars';
import { useState } from 'react';
import PostReview from './postReview/PostReview';

const ReviewsCard = ({ productReviews }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const reviews = productReviews || [];

	const handleOpenReviewModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseReviewModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className=' my-6 bg-white p-8'>
			<div>
				{reviews.length > 0 ? (
					<div>
						<h3 className=' text-lg fw-medium'>All comments...</h3>
						<div>
							{reviews.map((review, index) => (
								<div key={index} className='mt-4'>
									<div className=' flex gap-4 items-center'>
										<img src={commentorIcon} alt='' style={{ width: '50px' }} />
										<div>
											<p className=' text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>
												{review?.userId?.name}
											</p>
											<p className=' text-[12px] italic'>
												{formatDate(review?.updatedAt)}
											</p>
											<RatingStars rating={review?.rating} />
										</div>
									</div>
									<div className=' text-gray-600 mt-5 border p-8'>
										<p className='md:w-4/5'>{review?.comment}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<p>No reviews yet</p>
				)}
			</div>

			<div>
				<button
					onClick={handleOpenReviewModal}
					className='px-6 py-3 bg-red-600 text-white rounded-md'
				>
					Add a Review
				</button>
			</div>

			<PostReview close={handleCloseReviewModal} isModalOpen={isModalOpen}/>
		</div>
	);
};

export default ReviewsCard;
