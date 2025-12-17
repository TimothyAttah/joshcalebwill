import { RiStarLine, RiStarFill } from 'react-icons/ri';
import styled from 'styled-components';

const RatingBox =styled.div``

const RatingStars = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(
			<span key={i}>{i <= rating ? <RiStarFill /> : <RiStarLine />}</span>,
		);
	}
	return <div className='product__rating flex'>{stars}</div>;
};

export default RatingStars;
