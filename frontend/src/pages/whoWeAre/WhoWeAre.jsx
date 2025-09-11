import picBg from '../../assets/who.jpg';
import Overlay from '../../components/Overlay';
import * as Styles from './WhoWeAreStyles';
import visionLogo from '../../assets/visionLogo.png';
import pix1 from '../../assets/sliderPix2.png';
import pix2 from '../../assets/haulage5.png';
import pix3 from '../../assets/value.png';
import { FaCircle } from 'react-icons/fa';
import History from './history/History';
import TheTeam from './theTeam/TheTeam';
import { FadeInAlways } from '../../components/fadeIn/FadeInAlways';
import { FadeInCommon } from '../../components/fadeIn/FadeInCommon';

const WhoWeAre = () => {
	return (
		<>
			<Styles.WhoWeAreContainer>
				<Styles.WhoWeAreHeroContainer>
					<Styles.WhoWeAreHeroOverlay />
					<img src={picBg} alt='' loading='lazy' />

					<Styles.ContentContent>
						<FadeInCommon delay={0.5} direction='down'>
							<h2>Who we are</h2>
						</FadeInCommon>
					</Styles.ContentContent>
				</Styles.WhoWeAreHeroContainer>

				<FadeInCommon delay={0.5} direction='down'>
					<Styles.WhoWeAreTitle>
						{/* JOSHCALEB WILL PETROLEUM LIMITED is a dynamic global energy company
with businesses and operations across the entire spectrum of the
energy value chain. */}
						JOSHCALEB WILL PETROLEUM LIMITED is a dynamic international energy
						company focused on delivering a strong commitment to excellence in
						service delivery and consistently help the Oil & Gas sector achieve
						success across the entire production and value chain from the
						upstream to the downstream, midstream and the gas sub-sector of the
						oil and gas industry.
					</Styles.WhoWeAreTitle>
				</FadeInCommon>

				<Styles.WhoWeAreValuesContainer>
					<FadeInCommon delay={0.5} direction='down'>
						<Styles.WhoWeAreValuesPic>
							<img src={visionLogo} alt='' loading='lazy' />
						</Styles.WhoWeAreValuesPic>
					</FadeInCommon>

					<Styles.WhoWeAreValuesBox>
						<FadeInAlways delay={0.5} direction='right'>
							<Styles.WhoWeAreValuesItem>
								<FadeInAlways delay={0.5} direction='up'>
									<h4> Our Vision</h4>
								</FadeInAlways>

								<FadeInAlways delay={0.6} direction='up'>
									<Styles.WhoWeAreValueImg>
										<img src={pix1} alt='' />
									</Styles.WhoWeAreValueImg>
								</FadeInAlways>

								<FadeInAlways delay={0.7} direction='up'>
									<p>
										Building long lasting relationships with clients by
										providing the best Engineering Services through the creation
										of the Stystems and Models which ensures Quality Assurance,
										Safety and Satisfaction for our Clients at all times.
									</p>
								</FadeInAlways>
							</Styles.WhoWeAreValuesItem>
						</FadeInAlways>
						<FadeInAlways delay={0.7} direction='right'>
							<Styles.WhoWeAreValuesItem>
								<FadeInAlways delay={0.5} direction='up'>
									<h4> Our Mission</h4>
								</FadeInAlways>
								<FadeInAlways delay={0.6} direction='up'>
									<Styles.WhoWeAreValueImg>
										<img src={pix2} alt='' />
									</Styles.WhoWeAreValueImg>
								</FadeInAlways>
								<FadeInAlways delay={0.7} direction='up'>
									<p>
										To be the first Choice in the Services we offer in the Oil &
										Gas Industry
									</p>
								</FadeInAlways>
							</Styles.WhoWeAreValuesItem>
						</FadeInAlways>

						<FadeInAlways delay={0.9} direction='right'>
							<Styles.WhoWeAreValuesItem>
								<FadeInAlways delay={0.5} direction='up'>
									<h4> Our Values</h4>
								</FadeInAlways>
								<FadeInAlways delay={0.6} direction='up'>
									<Styles.WhoWeAreValueImg>
										<img src={pix3} alt='' />
									</Styles.WhoWeAreValueImg>
								</FadeInAlways>

								<ul>
									<FadeInAlways delay={0.2} direction='left'>
										<li>
											<FaCircle /> Professionalism
										</li>
									</FadeInAlways>
									<FadeInAlways delay={0.3} direction='left'>
										<li>
											<FaCircle />
											integrity
										</li>
									</FadeInAlways>
									<FadeInAlways delay={0.4} direction='left'>
										<li>
											<FaCircle />
											quality
										</li>
									</FadeInAlways>
									<FadeInAlways delay={0.5} direction='left'>
										<li>
											<FaCircle />
											safety
										</li>
									</FadeInAlways>
									<FadeInAlways delay={0.6} direction='left'>
										<li>
											<FaCircle />
											service excellence
										</li>
									</FadeInAlways>
									<FadeInAlways delay={0.7} direction='left'>
										<li>
											<FaCircle />
											team work
										</li>
									</FadeInAlways>
								</ul>
							</Styles.WhoWeAreValuesItem>
						</FadeInAlways>
					</Styles.WhoWeAreValuesBox>
				</Styles.WhoWeAreValuesContainer>
				<History />
				<TheTeam />
			</Styles.WhoWeAreContainer>
		</>
	);
};

export default WhoWeAre;
