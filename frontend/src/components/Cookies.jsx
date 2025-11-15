import React, { useState } from 'react';
import styled from 'styled-components';
import { BiCookie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CookieContainer = styled.div`
	.cookieWrapper.show {
		left: 200px;
	}
`;

const CookiesWrapper = styled.div`
	position: fixed;
	bottom: 50px;
	/* left: -370px; */
	max-width: 345px;
	width: 100%;
	background: var(--main-color-g);
	background: #fff;
	border-radius: 8px;
	padding: 15px 25px 22px;
	z-index: 9999999;
	transition: all 0.3s ease;
`;
const CookiesHeader = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;

	svg {
		color: var(--main-color-g);
		font-size: 32px;
	}

	h2 {
		color: var(--main-color-g);
		font-weight: 500;
	}
`;
const CookiesData = styled.div`
	margin-top: 16px;
	p {
		color: #333;
		font-size: 16px;

		a {
			color: var(--main-color-g);
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
const CookiesButtons = styled.div`
	margin-top: 16px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.cookieBtn {
		width: calc(100% / 2 - 10px);
		padding: 8px 0;
		border-radius: 4px;
		background: var(--main-color-g);
		color: #fff;
		&:hover {
			background: var(--main-color-o);
		}
	}
`;

const Cookies = () => {
	const [openCookie, setOpenCookie] = useState(true);
	useEffect(() => {

		const executeCodes = () => {
			setOpenCookie(true);
		};

		window.addEventListener('load', executeCodes);

		if (document.cookie.includes('codinglab')) {
			setOpenCookie(false);
			return;
		}
	}, []);

	const handleDeclineCookie = () => {
		setOpenCookie(false);
	};

	const handleAcceptCookie = () => {
		//set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
		// document.cookie = 'cookieBy= codinglab; max-age=' + 60 * 60 * 24 * 30;
		document.cookie = 'cookieBy= codinglab; max-age=' + 60 * 60 * 24;


		setOpenCookie(false);
	};

	return (
		<>
			{openCookie && (
				<CookieContainer className='cookieContainer'>
					<CookiesWrapper className='cookieWrapper'>
						<CookiesHeader>
							<BiCookie />
							<h2>Cookies Consent</h2>
						</CookiesHeader>
						<CookiesData>
							<p>
								This website use cookies to help you have a superior and more
								relevant browsing experience on the website.{' '}
								<Link to='#'>Read more</Link>
							</p>
						</CookiesData>
						<CookiesButtons>
							<button className='cookieBtn' onClick={handleAcceptCookie}>
								Accept
							</button>
							<button className='cookieBtn' onClick={handleDeclineCookie}>
								Decline
							</button>
						</CookiesButtons>
					</CookiesWrapper>
				</CookieContainer>
			)}
		</>
	);
};

export default Cookies;
