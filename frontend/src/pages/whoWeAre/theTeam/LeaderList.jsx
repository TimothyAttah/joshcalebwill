import { useState } from 'react';
import * as Styles from './TheTeamStyles';
import LeaderListItem from './LeaderListItem';

const LeaderList = ({ item }) => {
	const [openLeaderModel, setOpenLeaderModel] = useState(false);
	return (
		<>
			<Styles.LeadersListItem onClick={() => setOpenLeaderModel(true)}>
				<Styles.LeadersListImg>
					<img src={item.leaderPic} alt='' lazy />
				</Styles.LeadersListImg>
				{/* <Styles.LeadersListName leaderColor={item.leaderColor}>
					{item.leaderName}
				</Styles.LeadersListName> */}
				<Styles.LeadersListInfo leaderColor={item.leaderColor}>
					<h4> {item.leaderName}</h4>
					<p>{item.leaderTitle}</p>
				</Styles.LeadersListInfo>
			</Styles.LeadersListItem>
			{openLeaderModel && (
				<LeaderListItem item={item} setOpenLeaderModel={setOpenLeaderModel} />
			)}
		</>
	);
};

export default LeaderList;
