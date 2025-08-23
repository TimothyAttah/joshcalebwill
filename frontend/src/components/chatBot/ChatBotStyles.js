import styled, { css } from 'styled-components';

export const ChatBotContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background: linear-gradient(#f4f0ff, #dacdff);
`;
export const ChatBotPopup = styled.div`
	position: relative;
	width: 420px;
	overflow: hidden;
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
		0 32px 64px -48px rgba(0, 0, 0, 0.5);
`;
export const ChatBotHeader = styled.div`
	display: flex;
	padding: 15px 22px;
	align-items: center;
	justify-content: space-between;
	background: #6d4fc2;
	background: var(--brown);

	button {
		height: 40px;
		width: 40px;
		color: #fff;
		font-size: 1.9rem;
		padding-top: 2px;
		margin-right: -10px;
		border-radius: 50%;
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s ease;

		svg {
			padding: 0;
			/* font-size: 1rem; */
		}

		&:hover {
			background: #593bab;
		}
	}
`;
export const ChatBotInfo = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;

	svg {
		height: 35px;
		width: 35px;
		padding: 6px;
		flex-shrink: 0;
		fill: #6d4fc2;
		background: #fff;
		border-radius: 50%;
	}
`;

export const ChatbotIcon = styled.div`
	width: 30px;
	height: 30px;
	color: var(--brown);
	display: flex;
	align-items: center;
	justify-content: center;
	/* font-size: 35px; */
	cursor: pointer;
	z-index: 9999999999999;
	border-radius: 50%;
	overflow: hidden;


	img {
		width: 100%;
		height: 100%;
		object-fit: cover
	}


`;

export const ChatBotLogoText = styled.h2`
	color: #fff;
	font-size: 1.31rem;
	font-weight: 600;
`;

export const ChatBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	height: 460px;
	margin-bottom: 82px;
	overflow-y: auto;
	padding: 25px 22px;
	scrollbar-width: thin;
	scrollbar-color: #ddd3f9 transparent;
`;
export const ChatBotMessage = styled.div`
	display: flex;
	gap: 11px;
	align-items: center;

	${(props) =>
		props.botMessage &&
		css`
			svg {
				height: 35px;
				width: 35px;
				padding: 6px;
				flex-shrink: 0;
				align-self: flex-end;
				margin-bottom: 2px;
				fill: #fff;
				background: #6d4fc2;
				background: var(--brown);
				border-radius: 50%;
			}

			p {
				background: #f6f2ff;
				border-radius: 13px 13px 13px 3px;
			}
		`}

	${(props) =>
		props.userMessage &&
		css`
			flex-direction: column;
			align-items: flex-end;

			p {
				color: #fff;
				/* background: #6d4fc2; */
				background: var(--brown);
				border-radius: 13px 13px 3px 13px;
			}
		`}
`;
export const ChatBotMessageText = styled.p`
	padding: 12px 16px;
	max-width: 75%;
	word-wrap: break-word;
	white-space: pre-line;
	font-size: 0.95rem;
`;

export const ChatBotFooter = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	background: #fff;
	padding: 15px 22px 20px;

	@media screen and (max-width: 520px) {
		padding: 10px 15px 15px;
	}
`;
export const ChatBotForm = styled.form`
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 32px;
	outline: 1px solid #cccce5;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);

	&:focus-within {
		outline: 2px solid #6d4fc2;
	}

	button {
		width: 35px;
		height: 35px;
		font-size: 1.15rem;
		color: #fff;
		flex-shrink: 0;
		border-radius: 50%;
		background: #6d4fc2;
		background: var(--brown);
		margin-right: 6px;
		transition: 0.2s ease;
		display: none;

		&:hover {
			background: #593bab;
		}
	}
`;
export const ChatBotMessageInput = styled.input`
	background: none;
	width: 100%;
	height: 47px;
	padding: 0 17px;
	font-size: 0.95rem;
	&:valid ~ button {
		display: block;
	}
`;
