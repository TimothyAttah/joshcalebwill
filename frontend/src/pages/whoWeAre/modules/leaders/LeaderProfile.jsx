import * as Styles from './TheTeamStyles';
import { Modal } from '../../../../components/modal/Modal';
import Overlay from '../../../../components/Overlay';
import { leaderData } from '../../../../utils/leaderData';

import { useParams, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const LeaderProfile = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const leaderInfo = leaderData.find((leader) => leader.leaderName === name);
	console.log(leaderInfo);

	return (
		<Styles.TeamModal>
			<Overlay onClick={() => navigate(-1)} />
			<Modal onClick={() => navigate(-1)}>
				<Styles.CloseBtn>
					<FaTimes className='closeModal' onClick={() => navigate(-1)} />
				</Styles.CloseBtn>
				<Styles.TeamModalImg>
					<img src={leaderInfo.leaderPic} alt='' />
				</Styles.TeamModalImg>
				<Styles.TeamModalInfo>
					<h1>{leaderInfo.leaderName}</h1>
					<h4>{leaderInfo.leaderTitle}</h4>
					{leaderInfo.leaderInfoData &&
						leaderInfo.leaderInfoData.map((text, i) => <p key={i}>{text}</p>)}
				</Styles.TeamModalInfo>
			</Modal>
		</Styles.TeamModal>
	);
};

export default LeaderProfile;
