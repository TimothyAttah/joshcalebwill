import * as Styles from './WelcomeGalleryStyles';
import wg1 from '../../../assets/lub4.png';
import wg2 from '../../../assets/pix-3.jpg';
import wg3 from '../../../assets/wg3.png';
import wg4 from '../../../assets/lub3.png';
import wg5 from '../../../assets/who.jpg';
import wg6 from '../../../assets/newHaulage1.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';

const WelcomeGallery = () => {
	return (
		<Styles.GallerryContainer>
			<Styles.GallerryPixWrapper>
				<div className='pix pix1'>
					{/* <img src={wg1} alt='' /> */}
					<LazyLoadImage
						src={wg1}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg1}
					/>
				</div>
				<div className='pix pix2'>
					{/* <img src={wg2} alt='' /> */}
					<LazyLoadImage
						src={wg2}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg2}
					/>
				</div>
				<div className='pix pix3'>
					{/* <img src={wg3} alt='' /> */}
					<LazyLoadImage
						src={wg3}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg3}
					/>
				</div>
				<div className='pix pix4'>
					{/* <img src={wg4} alt='' /> */}
					<LazyLoadImage
						src={wg4}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg4}
					/>
				</div>
				<div className='pix pix5'>
					{/* <img src={wg5} alt='' /> */}
					<LazyLoadImage
						src={wg5}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg5}
					/>
				</div>
				<div className='pix pix6'>
					{/* <img src={wg6} alt='' /> */}
					<LazyLoadImage
						src={wg6}
						height='100%'
						width='100%'
						effect='blur'
						placeholderSrc={wg6}
					/>
				</div>
			</Styles.GallerryPixWrapper>
		</Styles.GallerryContainer>
	);
};

export default WelcomeGallery;
