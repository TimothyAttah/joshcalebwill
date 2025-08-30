import { Link } from 'react-router-dom';
import * as Styles from './IntroStyles'
import pix1 from '../../../assets/Picture4.png';
import pix2 from '../../../assets/Picture1.png';
import pix3 from '../../../assets/Picture5.png';
import pix4 from '../../../assets/Picture6.png';



const Intro = () => {
  return (
		<Styles.IntroContainer>
			<Styles.IntroInfoContainer>
				<Styles.IntroTitleBox>
					<small>Welcome to Joshcalebwill Petroluem Limited</small>
					<h4>
						We are a global integrated energy company that produces and markets
						energies <br />
						<span></span>
					</h4>
					<p>
						We provide the energy the world needs: ever more affordable, more
						sustainable, more reliable and accessible to as many people as
						possible.
					</p>
				</Styles.IntroTitleBox>

				<Styles.IntroVisionMissionContainer>
					<div>
						<h4>Our Mission</h4>
						<p>
							Building long lasting relationships with clients by providing the
							best Engineering Services through the creation of the Stystems and
							Models which ensures Quality Assurance, Safety and Satisfaction
							for our Clients at all times.
						</p>
					</div>

					<div>
						<h4>Our Vision</h4>
						<p>
							To be the first Choice in the Services we offer in the Oil & Gas
							Industry
						</p>
					</div>
				</Styles.IntroVisionMissionContainer>
			</Styles.IntroInfoContainer>

			<div>
				<Styles.IntroImgInfoBoxWrapper>
					<Styles.IntroImgBoxWrapper>
						<Styles.IntroImgBox>
							<img src={pix1} alt='' loading='lazy' />
						</Styles.IntroImgBox>
						<Styles.IntroImgBox>
							<img src={pix2} alt='' loading='lazy' />
						</Styles.IntroImgBox>
					</Styles.IntroImgBoxWrapper>
					<Styles.IntroImgInfoTitle>
						<h2>Rehabilitation of production facility</h2>
					</Styles.IntroImgInfoTitle>
				</Styles.IntroImgInfoBoxWrapper>

				<Styles.IntroImgInfoBoxWrapper primary>
					<Styles.IntroImgBoxWrapper>
						<Styles.IntroImgBox>
							<img src={pix3} alt='' loading='lazy' />
						</Styles.IntroImgBox>
						<Styles.IntroImgBox>
							<img src={pix4} alt='' loading='lazy' />
						</Styles.IntroImgBox>
					</Styles.IntroImgBoxWrapper>
					<Styles.IntroImgInfoTitle>
						<h2>Ongoing construction of Buoy</h2>
					</Styles.IntroImgInfoTitle>
				</Styles.IntroImgInfoBoxWrapper>
			</div>
		</Styles.IntroContainer>
	);
}

export default Intro