import * as Styles from './LeadersStyles';
import TheTeam from './TheTeam';
import Copy from '../../../../components/copyText/CopyText';
import { ReactLenis } from 'lenis/react'
import Transition from '../../../../components/Transition';

const Leaders = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.Leaders>
					<Styles.LeadersHero>
						<Styles.BlendModeSubTitle>who we are</Styles.BlendModeSubTitle>
						<Styles.BlendModeTitle>leaders in energy</Styles.BlendModeTitle>
					</Styles.LeadersHero>
					<Styles.CultureInfo>
						<Copy delay={0.5}>
							<p>
								Building a community of leaders to advance clean energy and
								sustainable solutions.
							</p>
						</Copy>

						<Copy delay={0.5}>
							<p>
								Our culture is built on the principles of responsibility, trust
								and integrity. We take profound pride in leading the future of
								energy.
							</p>
						</Copy>
					</Styles.CultureInfo>
					<Styles.LeadersContainer>
						<Styles.LeadersInfoContainer>
							<Copy delay={0.5}>
								<h4>Our Leadership</h4>
								<h1>guided by vision and values</h1>
							</Copy>
							{/*
					<p>
						At Joshcalebwill, our strength lies in the expertise and vision of
						our leadership team. Guided by decades of combined experience in oil
						and gas, engineering, finance, and HSE management, our board ensures
						that every decision is driven by innovation, integrity, and
						sustainable growth. Together, they provide the strategic direction
						that positions Joshcalebwill as a trusted partner in the global
						energy sector.
					</p> */}
						</Styles.LeadersInfoContainer>
						<TheTeam />
					</Styles.LeadersContainer>
				</Styles.Leaders>
			</ReactLenis>
		</>
	);
};

export default Transition(Leaders);
