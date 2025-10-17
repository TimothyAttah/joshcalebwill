import * as Styles from './TheTeamStyles';
import { FaTimes } from 'react-icons/fa';

const LeaderListItem = ({ item, setOpenLeaderModel }) => {
	return (
		<Styles.LeaderModelContainer leaderColor={item.leaderColor}>
			<FaTimes onClick={() => setOpenLeaderModel(false)} />
			<Styles.LeaderModelWrapper>
				<Styles.LeaderModelImg>
					<img src={item.leaderPic} alt='' />
				</Styles.LeaderModelImg>
				<Styles.LeaderModelInfo>
					<h2>{item.leaderName}</h2>
					<h4>{item.leaderTitle}</h4>
					{item.leaderInfoData &&
						item.leaderInfoData.map((text, i) => <p>{text}</p>)}
					{/* <p>{item.leaderInfo}</p> */}
				</Styles.LeaderModelInfo>
			</Styles.LeaderModelWrapper>
		</Styles.LeaderModelContainer>
	);
};

export default LeaderListItem;
