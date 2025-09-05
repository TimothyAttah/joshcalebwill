import React from 'react';
import * as Styles from './Intro2Styles';
import valuePix from '../../../assets/value.png';
import missionPix from '../../../assets/mission.png';
import visionPix from '../../../assets/vision.png';

const Intro2 = () => {
	return (
		<Styles.IntroContainer>
			<Styles.IntroContainer>
				<Styles.ContentTitle>
					<small>Welcome to Joshcalebwill Petroluem Limited</small>
					<h2>
						We are a global integrated energy company that produces and markets
						energies
					</h2>
					<p>
						We provide the energy the world needs: ever more affordable, more
						sustainable, more reliable and accessible to as many people as
						possible.
					</p>
				</Styles.ContentTitle>

				<Styles.IntroContentWrapper>
					<Styles.IntroContent>
						<h4>Our Vision</h4>
						<div>
							<img src={visionPix} alt='' loading='lazy' />
						</div>
						<p>
							To be the first Choice in the Services we offer in the Oil & Gas
							Industry
						</p>
					</Styles.IntroContent>
					<Styles.IntroContent>
						<h4>Our Mission</h4>
						<div>
							<img src={missionPix} alt='' loading='lazy' />
						</div>
						<p>
							Building long lasting relationships with clients by providing the
							best Engineering Services through the creation of the Stystems and
							Models which ensures Quality Assurance, Safety and Satisfaction
							for our Clients at all times.
						</p>
					</Styles.IntroContent>
					<Styles.IntroContent>
						<h4>Our Values</h4>
						<div>
							<img src={valuePix} alt='' loading='lazy' />
						</div>

						<ul>
							<li>Professionalism</li>
							<li>integrity</li>
							<li>quality</li>
							<li>safety</li>
							<li>service excellence</li>
							<li>team work</li>
						</ul>
					</Styles.IntroContent>
				</Styles.IntroContentWrapper>
			</Styles.IntroContainer>
		</Styles.IntroContainer>
	);
};

export default Intro2;
