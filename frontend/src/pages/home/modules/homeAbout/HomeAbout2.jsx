import pix1 from '../../../../assets/Picture4.png';
import pix2 from '../../../../assets/Picture1.png';
import pix3 from '../../../../assets/Picture3.png';
import welcomePix1 from '../../../../assets/import2.jpg';
import welcomePix2 from '../../../../assets/welcome-2.jpg';
import { FadeInAlways } from '../../../../components/fadeIn/FadeInAlways';
import * as Styles from './HomeAboutStyles';

const HomeAbout = () => {
	return (
		<Styles.HomeAboutParentContainer>
			<Styles.HomeAboutChildrenWrapper>
				<div>
					<Styles.HomeAboutImgWrapper>
						<FadeInAlways delay={0.2} direction='down'>
							<img src={pix1} alt='' />
						</FadeInAlways>
					</Styles.HomeAboutImgWrapper>
					<Styles.HomeAboutImgWrapper2>
						<FadeInAlways delay={0.2} direction='right'>
							<img src={pix2} alt='' />
						</FadeInAlways>
						<FadeInAlways delay={0.3} direction='right'>
							<img src={pix3} alt='' />
						</FadeInAlways>
					</Styles.HomeAboutImgWrapper2>
				</div>

				<Styles.HomeAboutDetailsWrapper>
					<Styles.HomeAboutInfoTitleContainer>
						<FadeInAlways delay={0.2} direction='down'>
							<h4>Welcome to</h4>
						</FadeInAlways>
						<FadeInAlways delay={0.4} direction='down'>
							<h1>Joshcalebwill Oil & Gas Petroleum Limited</h1>
						</FadeInAlways>
					</Styles.HomeAboutInfoTitleContainer>
					<Styles.HomeAboutDetails>
						<FadeInAlways delay={0.4} direction='left'>
							<p>
								JOSHCALEB WILL PETROLEUM LIMITED is a dynamic international
								energy company focused on delivering a strong commitment to
								excellence in service delivery and consistently help the Oil &
								Gas sector achieve success across the entire production and
								value chain from the upstream to the downstream, midstream and
								the gas sub-sector of the oil and gas industry.
							</p>
						</FadeInAlways>
						<FadeInAlways delay={0.5} direction='left'>
							<p>
								Our services include upstream and downstream production,
								instrumentation, installation, construction and maintenance. Our
								main focus is on the oil and gas industry, energy, chemical
								supply and treatments, gas compression, engineering, pipeline
								and construction services consultancy, among others. We are
								driven by innovation, strong ethical standard and quality
								service using the latest technologies and innovations in
								delivering optimum service excellence to our clients.
							</p>
						</FadeInAlways>

						<FadeInAlways delay={0.6} direction='left'>
							<p>
								With our experienced professionals and strategic global
								partners, JOSHCALEBWIL PETROLEUM LIMITED is committed to client
								satisfaction and quality performance which guarantees our
								clients’ confidence in the oil and gas business every step of
								the way.
							</p>
						</FadeInAlways>
					</Styles.HomeAboutDetails>
					<Styles.HomeAboutMissionContainer>
						<div>
							<FadeInAlways delay={0.7} direction='left'>
								<h4>Our mission</h4>
								<p>
									To always deliver competent and credible information
									technology services to our clients, at best cost effective
									rates, and to meet our clients’ quality expectation & delivery
									to ensure their projects succeed regardless the challenges
									encountered, while ensuring health, safety and environmental
									best practices.
								</p>
							</FadeInAlways>
						</div>
						<div>
							<FadeInAlways delay={0.8} direction='left'>
								<h4>Our Vision</h4>
								<p>
									To provide clients with quality goods and service delivered
									consistently on time, in safety and in accordance with
									industry best practices and thus become the preferred vendor
									of goods ad services in our chosen fields.
								</p>
							</FadeInAlways>
						</div>
					</Styles.HomeAboutMissionContainer>
					<Styles.WelcomeImgBoxWrapper>
						<Styles.WelcomeImgBox>
							<FadeInAlways delay={0.3} direction='left'>
								<Styles.WelcomeImg>
									<img src={welcomePix1} alt='' loading='lazy' />
								</Styles.WelcomeImg>
								<p>petroleum products importation</p>
							</FadeInAlways>
						</Styles.WelcomeImgBox>
						<Styles.WelcomeImgBox>
							<FadeInAlways delay={0.5} direction='left'>
								<Styles.WelcomeImg>
									<img src={welcomePix2} alt='' loading='lazy' />
								</Styles.WelcomeImg>
								<p>petroleum products marketing</p>
							</FadeInAlways>
						</Styles.WelcomeImgBox>
					</Styles.WelcomeImgBoxWrapper>
				</Styles.HomeAboutDetailsWrapper>
			</Styles.HomeAboutChildrenWrapper>
		</Styles.HomeAboutParentContainer>
	);
};

export default HomeAbout;
