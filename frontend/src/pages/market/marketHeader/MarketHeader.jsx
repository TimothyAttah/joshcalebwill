import styled from 'styled-components';
import { BiCart, BiUser } from 'react-icons/bi';
import * as Styles from './DesktopHeaderStyles';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/actions/userActions';

export const HeaderContainer = styled.div`
	/* padding-top: 60px; */

	.dropdown-menu.show {
		background: var(--main-color);
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 10px;
	}
`;

export const MarketHeaderBox = styled.div`
	background: var(--main-color-p);
	color: #fff;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 100px;
	margin-top: 120px;

	h4 {
		color: #fff;
	}
`;

export const MarketHeaderNav = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;
	a {
		display: flex;
		gap: 5px;
		align-items: center;
		font-weight: bold;
	}
`;

const MarketHeader = () => {
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { users } = loginUser;
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logoutUser());
		navigate('/login');
	};
	return (
		<HeaderContainer>
			<MarketHeaderBox>
				<h4>Welcome to Joshcalebwill Market</h4>
				<Styles.HeaderDropdownWrapper>
					<Link to='/cart'>
						<BiCart /> Cart
					</Link>
					{users ? (
						<NavDropdown title={users?.name} id='username'>
							<Link to='/profile'>
								<div>Profile</div>
							</Link>
							<NavDropdown.Item onClick={logoutHandler}>
								Logout
							</NavDropdown.Item>
						</NavDropdown>
					) : (
						<Link to='/login'>
							<>
								<i className='fas fa-user'></i>Sign In
							</>
						</Link>
					)}
				</Styles.HeaderDropdownWrapper>
			</MarketHeaderBox>
		</HeaderContainer>
	);
};

export default MarketHeader;
