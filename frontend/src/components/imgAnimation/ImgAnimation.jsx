import * as Styles from './ImgAnimationStyles';
import img1 from '../../assets/hero1.jpg';
import img2 from '../../assets/hero2.jpg';
import img3 from '../../assets/hero3.jpg';
import img4 from '../../assets/hero4.png';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const ImgAnimation = () => {
	const containerImg = useRef();
	const { scrollYProgress, scrollXProgress } = useScroll({
		target: containerImg,
		offset: ['start start', 'end end'],
	});

	return (
		<Styles.ImgAnimationContainer ref={containerImg}>
			<Styles.ImgAnimationBoxItem>
				<ImgSection1 scrollYProgress={scrollYProgress} />
			</Styles.ImgAnimationBoxItem>
			{/* <Styles.ImgAnimationBoxItem>
				<ImgSection2
					scrollYProgress={scrollYProgress}
					scrollXProgress={scrollXProgress}
				/>
			</Styles.ImgAnimationBoxItem>
			<Styles.ImgAnimationBoxItem>
				<ImgSection3
					scrollYProgress={scrollYProgress}
					scrollXProgress={scrollXProgress}
				/>
			</Styles.ImgAnimationBoxItem> */}
			<Styles.ImgAnimationBoxItem>
				<ImgSection4
					scrollYProgress={scrollYProgress}
					scrollXProgress={scrollXProgress}
				/>
			</Styles.ImgAnimationBoxItem>
		</Styles.ImgAnimationContainer>
	);
};

export default ImgAnimation;

const ImgSection1 = ({ scrollYProgress }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
	return (
		<Styles.ImgAnimationBox style={{ scale, rotate }}>
			<FadeInAlways delay={0.2} direction='right'>
				<Styles.Text>The oil sector needs prolific thinkers</Styles.Text>
			</FadeInAlways>
			<FadeInAlways delay={0.4} direction='left'>
				<Styles.Text>
					Consistency strategies innovation & sustainability is our watch
				</Styles.Text>
			</FadeInAlways>
		</Styles.ImgAnimationBox>
	);
};

// const ImgSection2 = ({ scrollYProgress }) => {
// 	const scale = useTransform(scrollYProgress, [0.5, 0], [1, 0]);
// 	const rotate = useTransform(scrollYProgress, [0.2, 3], [1, -6]);
// 	return (
// 		<Styles.ImgAnimationBox right='true' style={{ scale, rotate }}>
// 			<img src={img2} alt='' />
// 		</Styles.ImgAnimationBox>
// 	);
// };

// const ImgSection3 = ({ scrollYProgress, scrollXProgress }) => {
// 	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
// 	const rotate = useTransform(scrollYProgress, [0, 1], [0, -7]);
// 	return (
// 		<Styles.ImgAnimationBox style={{ scale, rotate }}>
// 			<FadeInAlways delay={0.5} direction='left'>
// 				<img src={img3} alt='' />
// 			</FadeInAlways>
// 		</Styles.ImgAnimationBox>
// 	);
// };

const ImgSection4 = ({ scrollYProgress, scrollXProgress }) => {
	const scale = useTransform(scrollYProgress, [0.5, 0], [1, 0]);
	const rotate = useTransform(scrollYProgress, [0.2, 3], [1, -6]);
	return (
		<Styles.ImgAnimationBox style={{ scale }}>
			{/* <img src={img4} alt='' /> */}
			<FadeInAlways delay={0.3} direction='right'>
				<Styles.Text>
					When you think quality and excellent service delivery, think about us
				</Styles.Text>
			</FadeInAlways>
			<FadeInAlways delay={0.5} direction='left'>
				<Styles.Text>
					Joshcalebwill petroleum is a global vision born for change in the oil
					& gas sector
				</Styles.Text>
			</FadeInAlways>
		</Styles.ImgAnimationBox>
	);
};
