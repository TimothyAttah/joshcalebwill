import { useRef, useState } from 'react';
import * as Styles from './ChatBotStyles';
import { BiSolidArrowFromBottom } from 'react-icons/bi';

const ChatBotForm = ({ setChatHistory, chatHistory, generateBotResponse }) => {
	const inputRef = useRef();
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const userMessage = inputRef.current.value.trim();

		if (!userMessage) return;

		inputRef.current.value = '';

		setChatHistory((history) => [
			...history,
			{ role: 'user', text: userMessage },
		]);

		setTimeout(() => {
			setChatHistory((history) => [
				...history,
				{ role: 'model', text: 'Thinking...' },
			]);

			generateBotResponse([
				...chatHistory,
				{
					role: 'user',
					text: `Using the details provided above, please address this query: ${userMessage}`,
				},
			]);
		}, 600);


	};
	return (
		<Styles.ChatBotForm onSubmit={handleFormSubmit}>
			<Styles.ChatBotMessageInput
				type='text'
				placeholder='Message...'
				required
				ref={inputRef}
			/>
			<button>
				<BiSolidArrowFromBottom />
			</button>
		</Styles.ChatBotForm>
	);
};

export default ChatBotForm;
