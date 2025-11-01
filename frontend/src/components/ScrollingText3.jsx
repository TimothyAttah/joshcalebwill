import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import pix1 from '../assets/intro1.png';
import pix2 from '../assets/intro2.png';
import pix3 from '../assets/intro3.png';
import pix4 from '../assets/intro4.png';

const Wrapper = styled.div`
	background: #000;
	color: #fff;
	overflow: hidden;
`;

const Section = styled.section`
	position: relative;
	height: 120vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	overflow: hidden;
`;

const BackgroundImage = styled(motion.img)`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
	pointer-events: none;
`;

const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.4),
		rgba(0, 0, 0, 0.8)
	);
	z-index: 1;
`;

const Content = styled.div`
	position: relative;
	z-index: 2;
	max-width: 900px;
	padding: 0 2rem;
`;

const Title = styled(motion.h1)`
	font-size: clamp(2.5rem, 7vw, 6rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.15em;
	margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
	font-size: clamp(1rem, 2vw, 1.5rem);
	color: #ccc;
`;

function StorySection({ image, title, subtitle }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// Parallax background movement
	const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

	// Fade text in/out
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	return (
		<Section ref={ref}>
			<BackgroundImage src={image} style={{ y }} alt={title} />
			<Overlay />
			<Content>
				<Title style={{ opacity }}>{title}</Title>
				<Subtitle style={{ opacity }}>{subtitle}</Subtitle>
			</Content>
		</Section>
	);
}

export default function StoryScroll() {
	return (
		<Wrapper>
			<StorySection
				image={pix1}
				title='Crafted with Precision'
				subtitle='Every fragrance begins with a vision — a blend of art and chemistry at Scentsmith.'
			/>
			<StorySection
				image={pix2}
				title='Nature Meets Innovation'
				subtitle='We source pure, sustainable ingredients to create scents that tell your story.'
			/>
			<StorySection
				image={pix3}
				title='Elegance in Every Note'
				subtitle='Each perfume is an emotion, meticulously balanced to linger in memory.'
			/>
			<StorySection
				image={pix4}
				title='Inspired by You'
				subtitle='Our craft is guided by your individuality — your scent, your signature.'
			/>
		</Wrapper>
	);
}
