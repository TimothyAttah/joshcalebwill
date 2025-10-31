import styled from 'styled-components';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Paragrapgh = styled.p`
	font-size: 50px !important;
	max-width: 1000px;
	margin: auto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	line-height: 1.1;
	font-weight: bold;
	color: #fff;
	.word {
		margin-right: 12px;
		margin-top: 12px;
		position: relative;

		.shadow {
			position: absolute;
			opacity: 0.1;
		}
	}

	@media screen and (max-width: 720px) {
		font-size: 30px !important;
		padding: 10px;
	}

	@media screen and (max-width: 450px) {
		font-size: 26px !important;
		text-align: center !important;
	}
`;

const Character = ({ value }) => {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start 0.9', 'start -0.100'],
	});

	const words = value.split(' ');
	return (
		<Paragrapgh ref={element}>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<NewWord key={i} range={[start, end]} progress={scrollYProgress}>
						{word}
					</NewWord>
				);
			})}
		</Paragrapgh>
	);
};

export default Character;

const NewWord = ({ children, range, progress }) => {
	const characters = children.split('');
	const amount = range[1] - range[0];
	const step = amount / children.length;
	return (
		<span className='word'>
			{characters.map((character, i) => {
				const start = range[0] + step * i;
				const end = range[0] + step * (i + 1);
				return (
					<NewCharacter key={i} range={[start, end]} progress={progress}>
						{character}
					</NewCharacter>
				);
			})}
		</span>
	);
};

const NewCharacter = ({ children, range, progress }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span>
			<span className='shadow'>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
