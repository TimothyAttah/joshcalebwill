import { useEffect, useRef, useState } from 'react';
import ChatBotForm from './ChatBotForm';
import * as Styles from './ChatBotStyles';
import { BiBot, BiChevronDown, BiComment } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { companyInfo } from './companyInfo';
import ChatBotMessage from './ChatBotMessage';
import './chatBot.css';

const ChatBot = () => {
	const [chatHistory, setChatHistory] = useState([{
		hideInChat: true,
		role: 'model',
		text: companyInfo
	}]);
	const [showChatbot, setShowChatbot] = useState(false);

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
			updateHistory(err.message, true)
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
			<div
				className={`chat-body-container ${showChatbot ? 'show-chatbot' : ''}`}>
				<button
					onClick={() => setShowChatbot((prev) => !prev)}
					id='chatbot-toggler'>
					<span>
						<BiComment />
					</span>
					<span>
						<FaTimes />
					</span>
				</button>
				<div className='chatbot-popup'>
					<div className='chat-header'>
						<div className='header-info'>
							<BiBot />
							<h2 className='logo-text'>Chatbot</h2>
						</div>
						<button onClick={() => setShowChatbot((prev) => !prev)}>
							<BiChevronDown />
						</button>
					</div>

					<div ref={chatBodyRef} className='chat-body'>
						<div className='message bot-message'>
							<BiBot />
							<p className='message-text'>
								Hey there <br /> How can I help you today?
							</p>
						</div>
						{chatHistory.map((chat, i) => (
							<ChatBotMessage key={i} chat={chat} />
						))}
					</div>

					<Styles.ChatBotFooter>
						<ChatBotForm
							setChatHistory={setChatHistory}
							chatHistory={chatHistory}
							generateBotResponse={generateBotResponse}
						/>
					</Styles.ChatBotFooter>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
