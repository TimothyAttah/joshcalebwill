import { useState } from 'react';
import * as Styles from './TheTeamStyles';
import LeaderListItem from './LeaderListItem';
import { scrollToTop } from '../../../../components/header/Header';
import { Modal } from '../../../../components/modal/Modal';
import Overlay from '../../../../components/Overlay';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LeaderList = ({ item }) => {
	const [openLeaderModel, setOpenLeaderModel] = useState(false);
	const handleOpenModal = () => {
		setOpenLeaderModel(true);
		scrollToTop();
	};
	return (
		<>
			<Link to={`/who-we-are/leadership/leader/${item.leaderName}`}>
				<Styles.LeadersListItem>
					<Styles.LeadersListImg>
						<img src={item.leaderPic} alt='' lazy />
					</Styles.LeadersListImg>

					<Styles.LeadersListInfo leaderColor={item.leaderColor}>
						<h4> {item.leaderName}</h4>
						<p>{item.leaderTitle}</p>
					</Styles.LeadersListInfo>
				</Styles.LeadersListItem>
			</Link>
		</>
	);
};

export default LeaderList;
