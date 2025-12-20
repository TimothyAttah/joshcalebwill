import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import TextAnimate from './textAnimate/TextAnimate';
import pix1 from '../assets/intro1.png';
import pix2 from '../assets/intro2.png';
import pix4 from '../assets/intro4.png';


const Section = styled.section`
	position: relative;
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

		color: hsl(50 90% 50%);
		color: hsl(14.39deg 93.44% 46.47%);
	}

	.text2 {
		color: hsl(14.39deg 93.44% 38.47%);
		font-weight: 900 !important;
	}
	.text3 {
		color: hsl(1.39deg 90.44% 30.47%);
	}
	.text4 {
		color: hsl(48deg 100% 51.37%);
	}

	.text5 {
		color: hsl(55deg 100% 55.47%);
	}

	.text6 {
		color: hsl(42deg 100% 50.37%);
	}
`;

const Text = styled(motion.h1)`
	font-size: clamp(3rem, 8vw, 7rem);
	font-size: clamp(8rem, 10vw, 14rem);
	font-weight: 700;
	text-transform: lowercase;
	letter-spacing: 0;
	text-align: center;
	color: ${(props) => props.color || '#817c4c'};
	margin: 0px 30px auto;
	position: relative;
	z-index: 99;


	@media screen and (max-width: 450px) {
		font-size: clamp(3rem, 6vw, 5rem);
		margin: 18px 0;
	}
`;

const ScrollTextEffect = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 2.7', 'end 0.8'],
	});

	const text1 = useTransform(scrollYProgress, [0, 1], ['-320%', '300%']);
	const text2 = useTransform(scrollYProgress, [0, 1], ['250%', '-190%']);
	const text3 = useTransform(scrollYProgress, [0, 1], ['-440%', '320%']);
	const text4 = useTransform(scrollYProgress, [0, 1], ['420%', '-220%']);
	const text5 = useTransform(scrollYProgress, [0, 1], ['-500%', '180%']);
	const text6 = useTransform(scrollYProgress, [0, 1], ['660%', '-140%']);
	const text7 = useTransform(scrollYProgress, [0, 1], ['-550%', '80%']);


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
				<Text style={{ x: text1 }} color='#e2e2e2' className='text1'>
					Professionalism
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text2 }} color='#c5c3c3' className='text2'>
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



			<LineWrapper>
				<Text style={{ x: text5 }} color='#e2e2e2' className='text5'>
					service excellence
				</Text>
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text6 }} color='#eee' className='text4'>
					team work
				</Text>
			</LineWrapper>

			<LineWrapper>
				<img src={pix4} alt='' className='pix4Img' />
			</LineWrapper>

			<LineWrapper>
				<Text style={{ x: text7 }} color='#ccc' className='text6'>
					innovators
				</Text>
			</LineWrapper>

			<TextAnimate />
		</Section>
	);
};

export default ScrollTextEffect;
