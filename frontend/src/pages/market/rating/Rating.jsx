import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';

const RatingSpan = styled.div`
	span {
		margin: 0.1rem;
	}
`;

const Rating = ({ product,value,text, color }) => {
	return (
		<RatingSpan className='rating'>
			<span style={{color}}>
				{value >= 1 ? (
					<FaStar />
				) : value >= 0.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 2 ? (
					<FaStar />
				) : value >= 1.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 3 ? (
					<FaStar />
				) : value >= 2.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 4 ? (
					<FaStar />
				) : value >= 3.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span style={{color}}>
				{value >= 5 ? (
					<FaStar />
				) : value >= 4.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaStar />
				)}
			</span>
			<span>{text && text}</span>
		</RatingSpan>
	);
};

export default Rating;
