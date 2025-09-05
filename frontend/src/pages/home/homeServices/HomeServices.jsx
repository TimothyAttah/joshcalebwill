import * as Styles from './HomeServicesStyles';
import { Link } from 'react-router-dom';
import servicePic1 from '../../../assets/service-1.jpg';
import servicePic2 from '../../../assets/oil2.jpg';
import servicePic3 from '../../../assets/petrol1.jpg';
import servicePic4 from '../../../assets/haulage2.jpg';
import servicePic5 from '../../../assets/haulage5.jpg';

import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';
import Gallery from '../../../components/gallery/Gallery';

const HomeServices = () => {
	return (
		<Styles.HomeServicesContainer>
			<Styles.HomeServicesWrapper>
				<Styles.HomeServicesInfo>
					<Styles.HomeServicesInfoTitle>
						<FadeInAlways delay={0.1} direction='down'>
							<h4>what we do</h4>
						</FadeInAlways>
						<FadeInAlways delay={0.3} direction='down'>
							<h2>
								{' '}
								energy that fuels <br /> the world
							</h2>
						</FadeInAlways>
					</Styles.HomeServicesInfoTitle>
					<Styles.HomeServicesInfoDesc>
						<FadeInAlways delay={0.4} direction='down'>
							{/* <p>
								We offer one of the largest offshore liquid bulk terminals
								(SPM/CBM) in Africa to provide efficient discharge of products
								for operators, complemented by world class storage facilities
								and retail outlets/channels in all six geopolitical zones in
								Nigeria. We continually develop strategic infrastructure to
								facilitate the operational efficiency of our integrated bouquet
								of services.
							</p> */}
						</FadeInAlways>
					</Styles.HomeServicesInfoDesc>
				</Styles.HomeServicesInfo>
				<Styles.HomeServicesImgWrapper>
					<FadeInAlways delay={0.3} direction='right'>
						<Styles.HomeServicesImgBox>
							<Styles.HomeServicesImg>
								<img src={servicePic1} alt='' />
							</Styles.HomeServicesImg>
							<Link>Offshore Intake/Offtake Facilities</Link>
						</Styles.HomeServicesImgBox>
					</FadeInAlways>
					<FadeInAlways delay={0.4} direction='right'>
						<Styles.HomeServicesImgBox>
							<Styles.HomeServicesImg>
								<img src={servicePic2} alt='' />
							</Styles.HomeServicesImg>
							<Link>Storage Facilities</Link>
						</Styles.HomeServicesImgBox>
					</FadeInAlways>
					<FadeInAlways delay={0.5} direction='right'>
						<Styles.HomeServicesImgBox>
							<Styles.HomeServicesImg>
								<img src={servicePic3} alt='' />
							</Styles.HomeServicesImg>
							<Link>Petroleum Service Stations</Link>
						</Styles.HomeServicesImgBox>
					</FadeInAlways>
					<FadeInAlways delay={0.6} direction='right'>
						<Styles.HomeServicesImgBox>
							<Styles.HomeServicesImg>
								<img src={servicePic4} alt='' />
							</Styles.HomeServicesImg>
							<Link>Logistics & Haulage Services</Link>
						</Styles.HomeServicesImgBox>
					</FadeInAlways>
					<FadeInAlways delay={0.8} direction='right'>
						<Styles.HomeServicesImgBox>
							<Styles.HomeServicesImg>
								<img src={servicePic5} alt='' />
							</Styles.HomeServicesImg>
							<Link>LPG gas station</Link>
						</Styles.HomeServicesImgBox>
					</FadeInAlways>
				</Styles.HomeServicesImgWrapper>
			</Styles.HomeServicesWrapper>
			{/* <Gallery/> */}
		</Styles.HomeServicesContainer>
	);
};

export default HomeServices;
