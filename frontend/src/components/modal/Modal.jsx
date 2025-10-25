import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OverlayContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.9);
	background: var(--main-color-p);

	z-index: 999;
	/* overflow-y: scroll; */
`;

export const ModalContainer = styled.div`
	max-width: 900px;
	width: 100%;
	height: 80vh;
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translateX(-50%);
	background: #fff;
	z-index: 9999999;
	border-radius: 20px !important;
	padding: 50px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

  @media screen and (max-width: 420px) {
    padding: 20px;
  }
`;

export const Modal = ({ children, onClick }) => {
	return ReactDOM.createPortal(
		<>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				{children}
			</ModalContainer>
		</>,

		document.getElementById('modal'),
	);
};
