import * as Styles from './TheTeamStyles';
import { leaderData } from './leaderData';
import LeaderList from './LeaderList';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const TheTeam = () => {
	return (
		<Styles.LeadersContainer>
			<h1>Meet the leaders</h1>
			<Styles.LeadersListItemWrapper>
				{leaderData.map((item, i) => (
					<FadeInAlways delay={(i + 1) * 0.2} direction='left'>
						<LeaderList item={item} key={i} />
					</FadeInAlways>
				))}
			</Styles.LeadersListItemWrapper>
		</Styles.LeadersContainer>
	);
};

export default TheTeam;
