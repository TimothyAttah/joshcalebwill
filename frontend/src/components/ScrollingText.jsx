import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import TextAnimate from './textAnimate/TextAnimate';

const Section = styled.section`
	position: relative;
	height: 200vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	background: #000;
	background: var(--main-color);
	color: #fff;
`;

const Title = styled.div`
	margin-bottom: 200px;
	margin-top: 50px;
	h4 {
		color: #fff;
	}
`;

const LineWrapper = styled.div`
	overflow: hidden;
	width: 100%;
`;

const Text = styled(motion.h1)`
	font-size: clamp(3rem, 8vw, 7rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0;
	text-align: center;
	color: ${(props) => props.color || '#fff'};

	@media screen and (max-width: 450px) {
		font-size: clamp(2rem, 6vw, 5rem);
		margin: 30px 0;
	}
`;

const ScrollTextEffect = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 1.2', 'end 1'],
	});

	const text1 = useTransform(scrollYProgress, [0, 1], ['-150%', '250%']);
	const text2 = useTransform(scrollYProgress, [0, 1], ['200%', '-180%']);
	const text3 = useTransform(scrollYProgress, [0, 1], ['-250%', '410%']);
	const text4 = useTransform(scrollYProgress, [0, 1], ['400%', '-270%']);
	const text5 = useTransform(scrollYProgress, [0, 1], ['-380%', '310%']);
	const text6 = useTransform(scrollYProgress, [0, 1], ['610%', '-280%']);
	const text7 = useTransform(scrollYProgress, [0, 1], ['-450%', '220%']);

	return (
		<Section ref={ref}>
			<Title>Who we are</Title>
			<LineWrapper>
				<Text style={{ x: text1 }}>Professionalism</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text2 }} color='#ccc'>
					integrity
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text3 }} color='#c5c3c3'>
					quality
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text4 }} color='#e5e5e5'>
					safety
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text5 }} color='#e2e2e2'>
					service excellence
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text6 }} color='#eee'>
					team work
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text7 }} color='#ccc'>
					innovators
				</Text>
			</LineWrapper>

			<TextAnimate />

			{/* <LineWrapper>
				<Text style={{ x: leftX, opacity }}>WHO WE ARE</Text>
			</LineWrapper>


			<LineWrapper>
				<Text style={{ x: rightX, opacity }} color='#aaa'>
					SCENTSMITH
				</Text>
			</LineWrapper>


			<LineWrapper>
				<Text style={{ x: leftX, opacity }} color='#999'>
					ELEGANCE IN EVERY NOTE
				</Text>
			</LineWrapper>


			<LineWrapper>
				<Text style={{ x: rightX, opacity }} color='#666'>
					INSPIRED BY YOU
				</Text>
			</LineWrapper> */}
		</Section>
	);
};

export default ScrollTextEffect;
