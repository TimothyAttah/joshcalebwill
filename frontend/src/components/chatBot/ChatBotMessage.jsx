import React from 'react';
import * as Styles from './ChatBotStyles';
import { BiBot, BiChevronDown, BiUpArrow } from 'react-icons/bi';
import './chatBot.css'

const ChatBotMessage = ({ chat }) => {
	console.log(chat);

	return (
		<>
			{!chat.hideInChat && (
				<div
					className={`message ${
						chat.role === 'model' ? 'bot' : 'user'
					}-message ${chat.isError ? 'error' : ''}`}>
					{chat.role === 'model' && <BiBot />}
					<p className='message-text'>{chat.text}</p>
				</div>
			)}
		</>
	);
};

export default ChatBotMessage;
