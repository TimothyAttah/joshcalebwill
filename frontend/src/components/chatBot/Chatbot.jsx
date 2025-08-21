import styled from 'styled-components';
import Overlay from '../Overlay';
import * as Styles from './ChatBotStyles'
import { BiBot, BiChevronDown, BiComment } from 'react-icons/bi';
import ChatBotMessage from './ChatBotMessage';
import { useRef, useState, useEffect } from 'react';
import { companyInfo } from './companyInfo';
import ChatBotForm from './ChatBotForm';

const ChatbotContainer = styled.div`
	width: 420px;
	background-color: #fff;
	position: absolute;
	top: 50%;
	right: 50px;
	transform: translateY(-50%);
	z-index: 99999999;
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
		0 32px 64px -48px rgba(0, 0, 0, 0.5);
`;

const Chatbot = ({ close, setOpenChatbot }) => {
  const [chatHistory, setChatHistory] = useState([
		{
			hideInChat: true,
			role: 'model',
			text: companyInfo,
		},
  ]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
		const updateHistory = (text, isError = false) => {
			setChatHistory((prev) => [
				...prev.filter((msg) => msg.text !== 'Thinking...'),
				{ role: 'model', text, isError },
			]);
		};

		history = history.map(({ role, text }) => ({
			role,
			parts: [{ text }],
		}));

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ contents: history }),
		};

		try {
			const response = await fetch(
				import.meta.env.VITE_API_URL,
				requestOptions,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(data.error.message || 'Something went wrong!');

			console.log('Data>>>>>', data);
			const apiResponseText = data.candidates[0].content.parts[0].text
				.replace(/\*\*(.*?)\*\*/g, '$1')
				.trim();
			updateHistory(apiResponseText);
		} catch (err) {
			// console.log(err);
			updateHistory(err.message, true);
		}
  };

  useEffect(() => {
		chatBodyRef.current.scrollTo({
			top: chatBodyRef.current.scrollHeight,
			behavior: 'smooth',
		});
	}, [chatHistory]);


	return (
		<div>
			<Overlay />
			<ChatbotContainer>
				<Styles.ChatBotHeader className='chat-header'>
					<Styles.ChatBotInfo className='header-info'>
						<BiBot />
						<Styles.ChatBotLogoText className='logo-text'>
							Chatbot
						</Styles.ChatBotLogoText>
					</Styles.ChatBotInfo>
					<button onClick={() => setOpenChatbot((prev) => !prev)}>
						<BiChevronDown />
					</button>
				</Styles.ChatBotHeader>
				<Styles.ChatBody ref={chatBodyRef} className='chat-body'>
					<Styles.ChatBotMessage
						botMessage='true'
						className='message bot-message'>
						<BiBot />
						<Styles.ChatBotMessageText className='message-text'>
							Hey there <br /> How can I help you today?
						</Styles.ChatBotMessageText>
					</Styles.ChatBotMessage>
					{chatHistory.map((chat, i) => (
						<ChatBotMessage key={i} chat={chat} />
					))}
				</Styles.ChatBody>
				<Styles.ChatBotFooter>
					<ChatBotForm
						setChatHistory={setChatHistory}
						chatHistory={chatHistory}
						generateBotResponse={generateBotResponse}
					/>
				</Styles.ChatBotFooter>
			</ChatbotContainer>
		</div>
	);
};

export default Chatbot;
