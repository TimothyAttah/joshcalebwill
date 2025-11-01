import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import pix4 from '../assets/intro4.png';


const Section = styled.section`
	position: relative;
	height: 160vh; /* extra height to give scroll space */
	background: #000;
	color: #fff;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
`;

const Title = styled(motion.h1)`
	font-size: clamp(2.5rem, 7vw, 6rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	margin: 0;
`;

const Subtitle = styled(motion.p)`
	font-size: clamp(1rem, 2vw, 1.5rem);
	color: #aaa;
	margin-top: 1rem;
`;

const ImageWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	pointer-events: none;
	overflow: hidden;
`;

const MovingImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export default function ImageOverText() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// Image moves vertically (can also do horizontally)
	const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

	// Optional fade for text as image crosses
	const textOpacity = useTransform(
		scrollYProgress,
		[0.1, 0.5, 0.9],
		[1, 0.5, 1],
	);

	return (
		<Section ref={ref}>
			{/* Moving image */}
			<ImageWrapper>
				<MovingImage
					src={pix4} // replace with your perfume image or scent visual
					alt='Scentsmith visual'
					style={{ y: imageY }}
				/>
			</ImageWrapper>

			{/* Text content */}
			<ContentWrapper>
				<Title style={{ opacity: textOpacity }}>Who We Are</Title>
				<Subtitle style={{ opacity: textOpacity }}>
					Discover the artistry of fragrance at Scentsmith
				</Subtitle>
			</ContentWrapper>
		</Section>
	);
}
