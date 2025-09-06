import * as Styles from './TheTeamStyles';
import { leaderData } from './leaderData';
import LeaderList from './LeaderList';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const TheTeam = () => {
	return (
		<>
			<Styles.LeaderHeroContainer>
				<FadeInAlways delay={0.2} direction='down'>
					<h1>Our Leadership</h1>
				</FadeInAlways>
			</Styles.LeaderHeroContainer>
			<Styles.LeadersContainer>
				<Styles.LeaderTitle>
					<FadeInAlways delay={0.4} direction='down'>
						<p>
							At Joshcalebwill, our strength lies in the expertise and vision of
							our leadership team. Guided by decades of combined experience in
							oil and gas, engineering, finance, and HSE management, our board
							ensures that every decision is driven by innovation, integrity,
							and sustainable growth. Together, they provide the strategic
							direction that positions Joshcalebwill as a trusted partner in the
							global energy sector.
						</p>
					</FadeInAlways>
					<FadeInAlways delay={0.6} direction='down'>
						<h4>Meet the Board of Directors</h4>
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
		</>
	);
};

export default TheTeam;
