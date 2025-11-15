import { useEffect, useRef, useState } from 'react';
import ChatBotForm from './ChatBotForm';
import * as Styles from './ChatBotStyles';
import { BiBot, BiChevronDown, BiComment } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { companyInfo } from './companyInfo';
import ChatBotMessage from './ChatBotMessage';
import './chatBot.css';
import AiPic from '../../assets/ai2.jpg';

const NewChatbot = ({ close, setOpenChatbot }) => {
	const [chatHistory, setChatHistory] = useState([
		{
			hideInChat: true,
			role: 'model',
			text: companyInfo,
		},
	]);
	const chatBodyRef = useRef();
	const [showChatbot, setShowChatbot] = useState(false);

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
			// body: { contents: history },
		};

		try {
			const response = await fetch(
				// import.meta.env.VITE_API_URL,
				'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyC8TU9thxd2qIWZHEWuLa_m6aniQChn6BM',
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
		<Styles.ChatBotContainer
			className={`chat-body-container ${showChatbot ? 'show-chatbot' : ''}`}
		>
			<button
				onClick={() => setShowChatbot((prev) => !prev)}
				id='chatbot-toggler'
			>
				<span>
					<BiComment />
				</span>
				<span>
					<FaTimes />
				</span>
			</button>
			<Styles.ChatBotPopup className='chatbot-popup'>
				<Styles.ChatBotHeader className='chat-header'>
					<Styles.ChatBotInfo className='header-info'>
						<Styles.ChatbotIcon>
							<img src={AiPic} alt='' />
						</Styles.ChatbotIcon>
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
						className='message bot-message'
					>
						{/* <BiBot /> */}
						<Styles.ChatbotIcon>
							<img src={AiPic} alt='' />
						</Styles.ChatbotIcon>
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
			</Styles.ChatBotPopup>
		</Styles.ChatBotContainer>
	);
};

export default NewChatbot;
