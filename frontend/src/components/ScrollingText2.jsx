import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	height: 160vh; /* a bit taller for the stagger effect */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background: #000;
	color: #fff;
`;

const LineWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	margin: 0.8rem 0;
`;

const Text = styled(motion.h1)`
	font-size: clamp(2rem, 6vw, 5rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0;
	text-align: center;
	color: ${(props) => props.color || '#fff'};
`;

export default function ScrollTextEffect2() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 0.9', 'end 0.1'],
	});

	// Each line has slightly different timing for a staggered reveal
	// const line1X = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.3, 0.45, 1],
	// 	['-60%', '0%', '0%', '0%'],
  // );

  const line1X = useTransform(
		scrollYProgress,
		[0, 0.3, 0.45, 1],
		['-60%', '80%', '50%', '0%'],
	);
	const line2X = useTransform(
		scrollYProgress,
		[0.1, 0.4, 0.55, 1],
		['60%', '0%', '0%', '0%'],
	);
	const line3X = useTransform(
		scrollYProgress,
		[0.2, 0.5, 0.65, 1],
		['-60%', '0%', '0%', '0%'],
	);
	const line4X = useTransform(
		scrollYProgress,
		[0.3, 0.6, 0.75, 1],
		['60%', '0%', '0%', '0%'],
	);

	// Fade in / fade out for all lines
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.5, 0.8, 1],
		[0, 1, 1, 0.8, 0],
	);

	return (
		<Section ref={ref}>
			<LineWrapper>
				<Text style={{ x: line1X, opacity }}>WHO WE ARE</Text>
			</LineWrapper>
			<LineWrapper>
				<Text style={{ x: line2X, opacity }} color='#aaa'>
					SCENTSMITH
				</Text>
			</LineWrapper>
			<LineWrapper>
				<Text style={{ x: line3X, opacity }} color='#999'>
					ELEGANCE IN EVERY NOTE
				</Text>
			</LineWrapper>
			<LineWrapper>
				<Text style={{ x: line4X, opacity }} color='#666'>
					INSPIRED BY YOU
				</Text>
			</LineWrapper>
		</Section>
	);
}
