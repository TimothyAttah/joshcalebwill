import React from 'react';
import * as Styles from './ChatBotStyles';
import { BiBot, BiChevronDown, BiUpArrow } from 'react-icons/bi';
import './chatBot.css'
import AiPic from '../../assets/ai2.jpg'

import styled from 'styled-components';

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
		object-fit: cover;
	}
`;

const ChatBotMessage = ({ chat }) => {
	// console.log(chat);

	return (
		<>
			{!chat.hideInChat && (
				<div
					className={`message ${
						chat.role === 'model' ? 'bot' : 'user'
					}-message ${chat.isError ? 'error' : ''}`}>
					{ chat.role === 'model' && <ChatbotIcon>
						<img src={AiPic} alt="" />
					</ChatbotIcon>}
					<p className='message-text'>{chat.text}</p>
				</div>
			)}
		</>
	);
};

export default ChatBotMessage;
