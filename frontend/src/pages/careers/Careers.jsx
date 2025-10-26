import * as Styles from './CarrersStyles';
import cultPix1 from '../../assets/car5.png';
import cultPix2 from '../../assets/car7.png';
import cultPix3 from '../../assets/car11.png';
import cultPix4 from '../../assets/car10.png';

import pix1 from '../../assets/car1.png';

import Copy from '../../components/copyText/CopyText';
import { ReactLenis } from 'lenis/react';
import LazyImage from '../../components/LazyImage';

const Careers = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.Careers>
					<Styles.CareersHero>
						{/* <img alt='' /> */}
						<LazyImage src={pix1} />
						<Styles.BlendModeTitle>Careers</Styles.BlendModeTitle>
					</Styles.CareersHero>
					<Styles.CareersInfo>
						<Copy delay={0.5}>
							<p>
								Team members of all experience levels tackle global, real world
								problems facing our business.
							</p>
						</Copy>
					</Styles.CareersInfo>

					<Styles.CareersOptions>
						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								{/* <img alt='' /> */}
								<LazyImage src={cultPix1} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo first>
								<Copy delay={0.5}>
									<h4>careers at joshcalewill</h4>
									<p>
										Joshcalebwill only accepts job applications through our
										Careers website. The site features information about careers
										at Joshcalebwill and current job openings.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix2} alt='' /> */}
								<LazyImage src={cultPix2} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo second>
								<Copy delay={0.5}>
									<h4>service station employment</h4>
									<p>
										Joshcalebwill Service Stations, Inc. is looking for Customer
										Service Representatives who are 18 years or older.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix3} alt='' /> */}
								<LazyImage src={cultPix3} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo third>
								<Copy delay={0.5}>
									<h4>students and recent grads</h4>
									<p>
										Meet employees and recruiters on your college campus or at a
										special event.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix4} alt='' /> */}
								<LazyImage src={cultPix4} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo fourth>
								<Copy delay={0.5}>
									<h4>recruiting fraud</h4>
									<p>
										Joshcalebwill never seeks fees from job applicants under any
										circumstances. If you receive a job offer that you believe
										is fraudulent, contact your local law enforcement agency.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>
					</Styles.CareersOptions>
				</Styles.Careers>
			</ReactLenis>
		</>
	);
};

export default Careers;
