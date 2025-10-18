import * as Styles from './CarrersStyles';
import LastestSlider from './CarrersSlider';
import cultPix1 from '../../assets/car5.png';
import cultPix2 from '../../assets/car7.png';
import cultPix3 from '../../assets/car11.png';
import cultPix4 from '../../assets/car10.png';

import pix1 from '../../assets/car1.png';

import Copy from '../../components/copyText/CopyText';
import { ReactLenis } from 'lenis/react';

const Careers = () => {
	return (
		<>
			<ReactLenis root>

				<Styles.Careers>
					<Styles.CareersHero>
						<img src={pix1} alt='' />
						<Styles.BlendModeTitle>Careers</Styles.BlendModeTitle>
					</Styles.CareersHero>
					<Styles.CareersInfo>
						<p>
							Team members of all experience levels tackle global, real world
							problems facing our business.
						</p>
					</Styles.CareersInfo>

					<Styles.CareersOptions>
						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								<img src={cultPix1} alt='' />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo first>
								<h4>careers at joshcalewill</h4>
								<p>
									Joshcalebwill only accepts job applications through our
									Careers website. The site features information about careers
									at Joshcalebwill and current job openings.
								</p>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								<img src={cultPix2} alt='' />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo second>
								<h4>service station employment</h4>
								<p>
									Joshcalebwill Service Stations, Inc. is looking for Customer
									Service Representatives who are 18 years or older.
								</p>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								<img src={cultPix3} alt='' />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo third>
								<h4>students and recent grads</h4>
								<p>
									Meet employees and recruiters on your college campus or at a
									special event.
								</p>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								<img src={cultPix4} alt='' />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo fourth>
								<h4>recruiting fraud</h4>
								<p>
									Joshcalebwill never seeks fees from job applicants under any
									circumstances. If you receive a job offer that you believe is
									fraudulent, contact your local law enforcement agency.
								</p>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>
					</Styles.CareersOptions>
				</Styles.Careers>
			</ReactLenis>
		</>
	);
};

export default Careers;
