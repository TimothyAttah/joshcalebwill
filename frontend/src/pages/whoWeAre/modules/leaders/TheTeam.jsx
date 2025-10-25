import * as Styles from './TheTeamStyles';
import { leaderData } from '../../../../utils/leaderData';
import LeaderList from './LeaderList';
import { FadeInAlways } from '../../../../components/fadeIn/FadeInAlways';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../../components/copyText/CopyText';

const TheTeam = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.LeaderHeroContainer></Styles.LeaderHeroContainer>
				<Styles.LeadersContainer>
					<Styles.LeaderTitle>
						<FadeInAlways delay={0.4} direction='down'>
							<Copy delay={0.5}>
								<p>
									At Joshcalebwill, our strength lies in the expertise and
									vision of our leadership team. Guided by decades of combined
									experience in oil and gas, engineering, finance, and HSE
									management, our board ensures that every decision is driven by
									innovation, integrity, and sustainable growth. Together, they
									provide the strategic direction that positions Joshcalebwill
									as a trusted partner in the global energy sector.
								</p>
							</Copy>
						</FadeInAlways>
						<FadeInAlways delay={0.6} direction='down'>
							<Copy delay={0.5}>
								<h4>Meet the Board of Directors</h4>
							</Copy>
						</FadeInAlways>
					</Styles.LeaderTitle>
					<Styles.LeadersListItemWrapper>
						{leaderData.map((item, i) => (
							<FadeInAlways delay={(i + 1) * 0.2} direction='down'>
								<LeaderList item={item} key={i} />
							</FadeInAlways>
						))}
					</Styles.LeadersListItemWrapper>
				</Styles.LeadersContainer>
			</ReactLenis>
		</>
	);
};

export default TheTeam;
