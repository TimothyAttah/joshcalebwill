import * as Styles from './WelcomeGalleryStyles';
import wg1 from '../../../assets/wg1.png'
import wg2 from '../../../assets/wg2.png';
import wg3 from '../../../assets/wg3.png';
import wg4 from '../../../assets/wg4.png';
import wg5 from '../../../assets/wg5.png';
import wg6 from '../../../assets/wg6.png';
import wg7 from '../../../assets/wg7.png';
import wg8 from '../../../assets/wg8.png';
import wg9 from '../../../assets/wg9.png';
import wg10 from '../../../assets/wg10.png';
import wg11 from '../../../assets/wg11.png';


const WelcomeGallery = () => {
  return (
		<Styles.GallerryContainer>
			<Styles.GallerryPixWrapper>
				<div className='pix pix1'>
					<img src={wg1} alt='' />
				</div>
				<div className='pix pix2'>
					<img src={wg2} alt='' />
				</div>
				<div className='pix pix3'>
					<img src={wg3} alt='' />
				</div>
				<div className='pix pix4'>
					<img src={wg4} alt='' />
				</div>
				<div className='pix pix5'>
					<img src={wg5} alt='' />
				</div>
				<div className='pix pix6'>
					<img src={wg6} alt='' />
				</div>
				{/* <div className='pix pix7'>
					<img src={wg7} alt='' />
				</div>
				<div className='pix pix8'>
					<img src={wg8} alt='' />
				</div>
				<div className='pix pix9'>
					<img src={wg9} alt='' />
				</div> */}
			</Styles.GallerryPixWrapper>
		</Styles.GallerryContainer>
	);
}

export default WelcomeGallery
