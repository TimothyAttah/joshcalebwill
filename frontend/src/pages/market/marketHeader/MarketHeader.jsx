import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCart, BiUser } from 'react-icons/bi';

export const HeaderContainer = styled.div`
	padding-top: 60px;
`;

export const MarketHeaderBox = styled.div`
	background: var(--color-medium-blue);
	color: #fff;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 100px;
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
	return (
		<HeaderContainer>
			<MarketHeaderBox>
				<h4>Welcome to JoshCalebWill Market</h4>
				<MarketHeaderNav>
					<Link>
						<BiCart /> <span>Cart</span>
					</Link>
					<Link>
						<BiUser /> <span>Sign In</span>
					</Link>
				</MarketHeaderNav>
			</MarketHeaderBox>
		</HeaderContainer>
	);
};

export default MarketHeader;
