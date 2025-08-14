import * as Styles from './GalleryStyles';
import pix1 from '../../assets/hero1.jpg'
import pix2 from '../../assets/hero2.jpg';
import pix3 from '../../assets/hero3.jpg';
import pix4 from '../../assets/hero4.png';
import pix5 from '../../assets/hero5.png';
import pix6 from '../../assets/pix-3.jpg';
import pix7 from '../../assets/pix-4.jpg';
import pix8 from '../../assets/pix-5.jpg';
import pix9 from '../../assets/pix-6.jpg';
import pix10 from '../../assets/pix-7.jpg';
import pix11 from '../../assets/service-2.jpg';
import pix12 from '../../assets/pix-9.jpg';




const Gallery = () => {
  return (
		<Styles.GalleryContainer>
			<div>
				<img src={pix1} alt='' />
			</div>
			<div>
				<img src={pix2} alt='' />
			</div>
			<div>
				<img src={pix3} alt='' />
			</div>
			<div>
				<img src={pix4} alt='' />
			</div>
			<div>
				<img src={pix5} alt='' />
			</div>
			<div>
				<img src={pix6} alt='' />
			</div>
			<div>
				<img src={pix7} alt='' />
			</div>
			<div>
				<img src={pix8} alt='' />
			</div>
			<div>
				<img src={pix9} alt='' />
			</div>
			<div>
				<img src={pix10} alt='' />
			</div>
			<div>
				<img src={pix11} alt='' />
			</div>
			<div>
				<img src={pix12} alt='' />
			</div>
		</Styles.GalleryContainer>
	);
}

export default Gallery