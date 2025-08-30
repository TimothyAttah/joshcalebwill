import { Link } from 'react-router-dom';
import * as Styles from './IntroStyles';
import pix1 from '../../../assets/Picture4.png';
import pix2 from '../../../assets/Picture1.png';
import pix3 from '../../../assets/Picture5.png';
import pix4 from '../../../assets/Picture6.png';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const Intro = () => {
	return (
		<Styles.IntroContainer>
			<Styles.IntroInfoContainer>
				<Styles.IntroTitleBox>
					<FadeInAlways delay={0.1} direction='down'>
						<small>Welcome to Joshcalebwill Petroluem Limited</small>
					</FadeInAlways>

					<FadeInAlways delay={0.3} direction='down'>
						<h4>
							We are a global integrated energy company that produces and
							markets energies
						</h4>
					</FadeInAlways>
					<FadeInAlways delay={0.5} direction='down'>
						<p>
							We provide the energy the world needs: ever more affordable, more
							sustainable, more reliable and accessible to as many people as
							possible.
						</p>
					</FadeInAlways>
				</Styles.IntroTitleBox>

				<Styles.IntroVisionMissionContainer>
					<div>
						<FadeInAlways delay={0.4} direction='down'>
							<h4>Our Mission</h4>
						</FadeInAlways>
						<FadeInAlways delay={0.6} direction='down'>
							<p>
								Building long lasting relationships with clients by providing
								the best Engineering Services through the creation of the
								Stystems and Models which ensures Quality Assurance, Safety and
								Satisfaction for our Clients at all times.
							</p>
						</FadeInAlways>
					</div>

					<div>
						<FadeInAlways delay={0.7} direction='down'>
							<h4>Our Vision</h4>
						</FadeInAlways>
						<FadeInAlways delay={0.8} direction='down'>
							<p>
								To be the first Choice in the Services we offer in the Oil & Gas
								Industry
							</p>
						</FadeInAlways>
					</div>
				</Styles.IntroVisionMissionContainer>
			</Styles.IntroInfoContainer>

			<div>
				<Styles.IntroImgInfoBoxWrapper>
					<FadeInAlways delay={0.3} direction='left'>
						<Styles.IntroImgBoxWrapper>
							<Styles.IntroImgBox>
								<img src={pix1} alt='' loading='lazy' />
							</Styles.IntroImgBox>
							<Styles.IntroImgBox>
								<img src={pix2} alt='' loading='lazy' />
							</Styles.IntroImgBox>
						</Styles.IntroImgBoxWrapper>
					</FadeInAlways>
					<FadeInAlways delay={0.4} direction='left'>
						<Styles.IntroImgInfoTitle>
							<h2>Rehabilitation of production facility</h2>
						</Styles.IntroImgInfoTitle>
					</FadeInAlways>
				</Styles.IntroImgInfoBoxWrapper>

				<Styles.IntroImgInfoBoxWrapper primary>
					<FadeInAlways delay={0.6} direction='right'>
						<Styles.IntroImgBoxWrapper>
							<Styles.IntroImgBox>
								<img src={pix3} alt='' loading='lazy' />
							</Styles.IntroImgBox>
							<Styles.IntroImgBox>
								<img src={pix4} alt='' loading='lazy' />
							</Styles.IntroImgBox>
						</Styles.IntroImgBoxWrapper>
					</FadeInAlways>
					<FadeInAlways delay={0.8} direction='right'>
						<Styles.IntroImgInfoTitle>
							<h2>Ongoing construction of Buoy</h2>
						</Styles.IntroImgInfoTitle>
					</FadeInAlways>
				</Styles.IntroImgInfoBoxWrapper>
			</div>
		</Styles.IntroContainer>
	);
};

export default Intro;
