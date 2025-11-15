import * as Styles from './CommunitiesStyles';
import com1 from '../../../assets/com1.png';
import com2 from '../../../assets/com2.png';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';
import LazyImage from '../../../components/LazyImage';
import Transition from '../../../components/Transition';

const Communities = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.CommunitiesHero>
					{/* <img src={com1} alt='' /> */}
					{/* <LazyImage src={com1} /> */ }
					<LazyImage src={com1} />

					<Styles.BlendModeTitle>Cummunities</Styles.BlendModeTitle>
				</Styles.CommunitiesHero>
				<Styles.CultureInfo>
					{/* <h4>🌍 Sustainability at Joshcalebwill</h4> */}
					<Copy>
						<p>
							At Joshcalebwill, we believe our success is deeply connected to
							the wellbeing of the communities around us. We are committed to
							meaningful engagement, shared growth, and initiatives that empower
							people — ensuring that our presence leaves a lasting, positive
							impact wherever we operate.
						</p>
					</Copy>
				</Styles.CultureInfo>

				<Styles.ApproachContainer>
					<Styles.ApproachTitle>
						<Copy>
							<h2>our approach</h2>

							<p>
								Through collaboration, innovation, and respect, we partner with
								local communities to address real challenges — from education
								and healthcare to skills development and environmental
								stewardship.
							</p>
							<p>
								We work to strengthen local capacities, support livelihoods, and
								promote inclusive opportunities that benefit both present and
								future generations.
							</p>
						</Copy>
					</Styles.ApproachTitle>
					<Styles.ApproachOptionsContainer>
						<Styles.ApproachOptions>
							<Copy>
								<h4>Education & Capacity Building</h4>
								<p>
									Supporting learning programs, vocational training, and youth
									mentorship that equip individuals with skills for tomorrow’s
									industries.
								</p>
							</Copy>
						</Styles.ApproachOptions>
						<Styles.ApproachOptions>
							{/* <img src={com4} alt='' /> */}
							<Copy>
								<h4>Health & Wellbeing</h4>
								<p>
									Promoting healthcare access, awareness campaigns, and safe
									living conditions in the communities we serve.
								</p>
							</Copy>
						</Styles.ApproachOptions>
						<Styles.ApproachOptions>
							{/* <img src={com3} alt='' /> */}
							<Copy>
								<h4>Economic Empowerment</h4>
								<p>
									Partnering with local entrepreneurs and small businesses to
									create sustainable opportunities and shared prosperity.
								</p>
							</Copy>
						</Styles.ApproachOptions>
					</Styles.ApproachOptionsContainer>
				</Styles.ApproachContainer>

				<Styles.ApproachTitle second>
					<Copy>
						<h2>Our Commitment</h2>
						<div>
							<img src={ com2 } alt='' />


						</div>
						<p>
							Through collaboration, innovation, and respect, we partner with
							local communities to address real challenges — from education and
							healthcare to skills development and environmental stewardship.
						</p>
						<p>
							We work to strengthen local capacities, support livelihoods, and
							promote inclusive opportunities that benefit both present and
							future generations.
						</p>
					</Copy>
				</Styles.ApproachTitle>
			</ReactLenis>
		</>
	);
};

export default Transition( Communities);
