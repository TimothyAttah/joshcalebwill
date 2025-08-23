import welcomePix1 from '../../../../assets/import2.jpg';
import welcomePix2 from '../../../../assets/welcome-2.jpg';
import * as Styles from './WelcomeStyles';
import { FadeInAlways } from '../../../../components/fadeIn/FadeInAlways';

const Welcome = () => {
	return (
		<Styles.WelcomeContainer>
			<Styles.WelcomeWrapper>
				<Styles.WelcomeInfo>
					<FadeInAlways delay={0.1} direction='right'>
						<h4>Welcome to Joshcalebwill Oil & Gas Ltd.</h4>
					</FadeInAlways>
					<FadeInAlways delay={0.2} direction='right'>
						<h2>We are a Leading Petroluem Company in Nigeria</h2>
					</FadeInAlways>
					<FadeInAlways delay={0.4} direction='right'>
						<p>
							Joshcalebwill is an Indigenous Oil and Gas Company active across
							the entire downstream value chain, with emphasis on the petroleum
							trading, marketing, distribution and retail segments of the
							Nigerian Oil and Gas Sector.
						</p>
					</FadeInAlways>
					<FadeInAlways delay={0.5} direction='right'>
						<p>
							The company was founded in 2004 with Head Quarters in Lagos, one
							of Africa’s largest business hubs. Our performance within the
							sector has resulted in significant growth in market share and
							customers…
						</p>
					</FadeInAlways>
				</Styles.WelcomeInfo>
				<Styles.WelcomeImgBoxWrapper>
					<Styles.WelcomeImgBox>
						<FadeInAlways delay={0.3} direction='left'>
							<Styles.WelcomeImg>
								<img src={welcomePix1} alt='' />
							</Styles.WelcomeImg>
							<p>petroleum products importation</p>
						</FadeInAlways>
					</Styles.WelcomeImgBox>
					<Styles.WelcomeImgBox>
						<FadeInAlways delay={0.5} direction='left'>
							<Styles.WelcomeImg>
								<img src={welcomePix2} alt='' />
							</Styles.WelcomeImg>
							<p>petroleum products marketing</p>
						</FadeInAlways>
					</Styles.WelcomeImgBox>
				</Styles.WelcomeImgBoxWrapper>
			</Styles.WelcomeWrapper>
		</Styles.WelcomeContainer>
	);
};

export default Welcome;
