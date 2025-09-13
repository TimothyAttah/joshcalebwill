import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCookie } from 'react-icons/fa';

const Container = styled.div`
	.show {
		visibility: visible;
	}

	.hide {
		visibility: hidden;
	}
`;

const CookieContainer = styled.div`
	background-color: #fff;
	position: absolute;
	font-size: 18px;
	width: 100%;
	/* max-width: 42.85em; */
	box-shadow: 0 0 2em rgba(5, 0, 31, 0.15);
	text-align: justify;
	line-height: 1.8em;
	padding: 2em 1.4em;
	padding: 20px;
	left: 0;
	bottom: 0;
	z-index: 9999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	transition: all 0.5s ease-in;
	letter-spacing: 0;

	div {
		max-width: 1000px;
		width: 100%;

		a {
			color: var(--color1);
			padding-left: 5px;
			text-decoration: underline;
		}
	}

	button {
		width: 150px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color2);
		color: #fff;
		font-size: 18px;
	}
`;

const Cookie = () => {
	useEffect(() => {
		let popup = document.getElementById('cookiePopup');
		//when user clicks the accept button
		document.getElementById('acceptCookie').addEventListener('click', () => {
			//create date object
			let d = new Date();
			//Increment the current time by 1 minute (cookie will expire after 1 minute)
			d.setMinutes(2 + d.getMinutes());
			//Create cookie withname = joshcalebwill, value='thisIsMyCookie and expiry time = 1 minute
			document.cookie =
				'joshcalebwill=thisIsJoshcalebwill expires = ' + d + ';';

			//hide the popup
			popup.classList.add('hide');
			popup.classList.remove('show');
		});

		//check if cookie is already present
		// const checkCookie = () => {
		// 	//Read the cookie and split on '='
		// 	let input = document.cookie.split('=');
		// 	//check for our cookie
		// 	if (input[0] === 'joshcalebwill') {
		// 		//hide the popup
		// 		popup.classList.add('hide');
		// 		popup.classList.remove('show');
		// 	} else {
		// 		//show the popup
		// 		popup.classList.add('show');
		// 		popup.classList.remove('remove');
		// 	}
		// };

		//check if cookie exits when page loads
		// window.onload = () => {
		// 	setTimeout(() => {
		// 		checkCookie();
		// 	}, 2000);
		// }; 
	},[]);
	return (
		<Container>
			<CookieContainer id='cookiePopup'>
				<div>
					<p>
						Our website uses cookies to provide your browsing experience and
						relevant information. Before continuing to use our website, you
						agree & accept of our <Link>Cookie Policy & Privacy</Link>
					</p>
				</div>
				<button id='acceptCookie'>Accept</button>
			</CookieContainer>
		</Container>
	);
};

export default Cookie;
