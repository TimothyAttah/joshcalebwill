import React from 'react';
import commentorIcon from '../../../../../../assets/avatar.png';
import { formatDate } from '../../../../../../utils/formatDate';
import RatingStars from '../../../../components/RatingStars';

const ReviewsCard = ({ productReviews }) => {
	const reviews = productReviews || [];
	return (
		<div className=' my-6 bg-white p-8'>
			<div>
				{reviews.length > 0 ? (
					<div>v
						<h3 className=' text-lg fw-medium'>All comments...</h3>
						<div>
							{reviews.map((review, index) => (
								<div key={index} className='mt-4'>
									<div>
										<img src={commentorIcon} alt='' className=' size-14' />
										<div>
											<p className=' text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{review?.userId?.name}</p>
											<p className=' text-[12px] italic'>{formatDate(review?.updatedAt)}</p>
											<RatingStars rating={review?.rating} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<p>No reviews yet</p>
				)}
			</div>
		</div>
	);
};

export default ReviewsCard;
