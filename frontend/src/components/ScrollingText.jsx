import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import TextAnimate from './textAnimate/TextAnimate';
import pix1 from '../assets/intro1.png';
import pix2 from '../assets/intro2.png';
import pix3 from '../assets/intro3.png';
import pix4 from '../assets/intro4.png';
import textBg1 from '../assets/textBg1.png';
import textBg2 from '../assets/textBg2.png';
import textBg3 from '../assets/textBg3.png';
import textBg4 from '../assets/textBg4.png';








const Section = styled.section`
	position: relative;
	/* height: 200vh; */
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	background: #000;
	background: var(--main-color);
	color: #fff;
`;

const Title = styled.div`
	margin-bottom: 400px;
	margin-top: 50px;
	h4 {
		color: #fff;
	}

	@media screen  and (max-width: 450px){
		margin-bottom: 100px;
	}
`;

const LineWrapper = styled.div`
	/* overflow: hidden; */
	width: 100%;
	position: relative;

	img {
		width: 320px;
		height: 250px;
		object-fit: cover;
		border-radius: 20px;
	}

	.pix1Img {
		position: absolute;
		top: -300px;
		left: 30%;
		transform: translateX(-50%);
	}

	.pix2Img {
		position: absolute;
		top: -20px;
		left: 70%;
		transform: translateX(-50%);
	}

	/* .pix3Img {
		position: absolute;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
	} */

	.pix4Img {
		position: absolute;
		top: -250px;
		left: 20%;
		transform: translateX(-50%);
	}

	@media screen and (max-width: 450px) {
		img {
			width: 220px;
			height: 100px;
		}

		.pix1Img {
			top: -90px;
			left: 30%;
			transform: translateX(-50%);
		}

		.pix2Img {
			top: -0px;
			left: 70%;
			transform: translateX(-70%);
		}

		.pix4Img {
			top: -50px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.text1 {
		font-weight: bold;
		background-image: url(${textBg1}); /* Replace with your image path */
		background-size: cover;
		background-position: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}

	.text2 {
		font-weight: bold;
		background-image: url(${textBg2}); /* Replace with your image path */
		background-size: cover;
		background-position: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
	.text3 {
		font-weight: bold;
		background-image: url(${textBg3}); /* Replace with your image path */
		background-size: cover;
		background-position: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
	.text4 {
		font-weight: bold;
		background-image: url(${textBg4}); /* Replace with your image path */
		background-size: cover;
		background-position: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}
`;

const Text = styled(motion.h1)`
	font-size: clamp(3rem, 8vw, 7rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0;
	text-align: center;
	color: ${(props) => props.color || '#817c4c'};
	margin: 30px auto;
	position: relative;
	z-index: 99;


	@media screen and (max-width: 450px) {
		font-size: clamp(2rem, 6vw, 5rem);
		margin: 18px 0;
	}
`;

const ScrollTextEffect = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 1.9', 'end 0.5'],
	});

	// const text1 = useTransform(scrollYProgress, [0, 1], ['-150%', '250%']);
	// const text2 = useTransform(scrollYProgress, [0, 1], ['200%', '-180%']);
	// const text3 = useTransform(scrollYProgress, [0, 1], ['-250%', '410%']);
	// const text4 = useTransform(scrollYProgress, [0, 1], ['400%', '-270%']);
	// const text5 = useTransform(scrollYProgress, [0, 1], ['-380%', '310%']);
	// const text6 = useTransform(scrollYProgress, [0, 1], ['610%', '-280%']);
	// const text7 = useTransform(scrollYProgress, [0, 1], ['-450%', '220%']);

	const text1 = useTransform(scrollYProgress, [0, 1], ['-200%', '250%']);
	const text2 = useTransform(scrollYProgress, [0, 1], ['250%', '-190%']);
	const text3 = useTransform(scrollYProgress, [0, 1], ['-260%', '350%']);
	const text4 = useTransform(scrollYProgress, [0, 1], ['400%', '-270%']);
	const text5 = useTransform(scrollYProgress, [0, 1], ['-380%', '310%']);
	const text6 = useTransform(scrollYProgress, [0, 1], ['610%', '-280%']);
	const text7 = useTransform(scrollYProgress, [0, 1], ['-450%', '220%']);


	const topY = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		['-100%', '0%', '0%', '0%'],
	);

	const fade = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.8, 1],
		[0, 1, 1, 0.8, 0],
	);


	return (
		<Section ref={ref}>
			<Title>Who we are</Title>
			<LineWrapper>
				<Text style={{ x: text1 }} className='text1'>
					Professionalism
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text2 }} color='#d75e70' className='text2'>
					integrity
				</Text>
			</LineWrapper>

			<LineWrapper>
				<img
					src={pix1}
					alt=''
					className='pix1Img'
					style={{ y: topY, opacity: fade }}
				/>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text3 }} color='#c5c3c3' className='text3'>
					quality
				</Text>
			</LineWrapper>

			<LineWrapper>
				<img src={pix2} alt='' className='pix2Img' />
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text4 }} color='#e5e5e5' className='text1'>
					safety
				</Text>
			</LineWrapper>

			{/* <LineWrapper>
				<img src={pix3} alt='' className='pix3Img' />
			</LineWrapper> */}

			<LineWrapper>
				<Text style={{ x: text5 }} color='#e2e2e2' className='text4'>
					service excellence
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text6 }} color='#eee' className='text3'>
					team work
				</Text>
			</LineWrapper>

			<LineWrapper>
				<img src={pix4} alt='' className='pix4Img' />
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text7 }} color='#ccc' className='text2'>
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
