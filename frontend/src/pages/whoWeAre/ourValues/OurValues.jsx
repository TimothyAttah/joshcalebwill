import * as Styles from './OurValuesStyles';
import { FaCircle } from 'react-icons/fa';
import visionLogo from '../../../assets/visionLogo.png';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const OurValues = () => {
	return (
		<>
			<FadeInAlways delay={0.1} direction='down'>
				<Styles.MissionVissionImg>
					<img src={visionLogo} alt='' />
				</Styles.MissionVissionImg>
			</FadeInAlways>

			<Styles.MissionVissionWrapper>
				<Styles.MissionVissionBox>
					<FadeInAlways delay={0.2} direction='down'>
						<Styles.MissionBox>
							<h4>Mission</h4>
							<p>
								Building long lasting relationships with clients by providing
								the best Engineering Services through the creation of the
								Stystems and Models which ensures Quality Assurance, Safety and
								Satisfaction for our Clients at all times.
							</p>
						</Styles.MissionBox>
					</FadeInAlways>
					<FadeInAlways delay={0.4} direction='down'>
						<Styles.VissionBox>
							<h4>vission</h4>
							<p>
								To be the first Choice in the Services we offer in the Oil & Gas
								Industry
							</p>
						</Styles.VissionBox>
					</FadeInAlways>
				</Styles.MissionVissionBox>

				<Styles.WhoWeAreCoreContainer>
					<FadeInAlways delay={0.6} direction='up'>
						<Styles.CoreContainer>
							<h2>
								Our core <br />
								<span>Values</span>
							</h2>
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
						</Styles.CoreContainer>
					</FadeInAlways>
				</Styles.WhoWeAreCoreContainer>
			</Styles.MissionVissionWrapper>
		</>
	);
};

export default OurValues;
