import * as Styles from './WelcomeGalleryStyles';
import wg1 from '../../../assets/lub4.png';
import wg2 from '../../../assets/pix-3.jpg';
import wg3 from '../../../assets/wg3.png';
import wg4 from '../../../assets/lub3.png';
import wg5 from '../../../assets/who.jpg';
import wg6 from '../../../assets/newHaulage1.png';

import LazyImage from '../../../components/LazyImage';

const WelcomeGallery = () => {
	return (
		<Styles.GallerryContainer>
			<Styles.GallerryPixWrapper>
				<div className='pix pix1'>
					<LazyImage src={wg1} />
				</div>
				<div className='pix pix2'>
					<LazyImage src={wg2} />
				</div>
				<div className='pix pix3'>
					<LazyImage src={wg3} />
				</div>
				<div className='pix pix4'>
					<LazyImage src={wg4} />
				</div>
				<div className='pix pix5'>
					<LazyImage src={wg5} />
				</div>
				<div className='pix pix6'>
					<LazyImage src={wg6} />
				</div>
			</Styles.GallerryPixWrapper>
		</Styles.GallerryContainer>
	);
};

export default WelcomeGallery;
