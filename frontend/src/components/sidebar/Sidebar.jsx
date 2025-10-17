import { IoMdClose, IoIosFunnel } from 'react-icons/io';
import './Sidebar.css';
import { useEffect } from 'react';

const Sidebar = () => {
	useEffect(() => {
		const menuToggle = document.querySelector('.menu-toggle');
		const closeBtn = document.querySelector('.close-btn');
		const menuContainer = document.querySelector('.menu-container');
		const menuItems = document.querySelectorAll('.menu-item');

		menuToggle.addEventListener('click', () => {
			menuContainer.style.left = '0%';
			shuffleAll();
			animateMenuItems(menuItems, 'in');
		});

		closeBtn.addEventListener('click', () => {
			menuContainer.style.left = '-50%';
			animateMenuItems(menuItems, 'out');
		});

		function animateMenuItems(items, direction) {
			items.forEach((item, index) => {
				setTimeout(() => {
					item.style.left = direction === 'in' ? '0px' : '-100px';
				}, index * 50);
			});
		}

		const link = new SplitType('.menu-item a', { types: 'words, chars' });
		const span = new SplitType('.menu-item span', { types: 'words, chars' });
		const menuTitle = new SplitType('.menu-title p', { types: 'words, chars' });
		const menuContent = new SplitType('.menu-content p', {
			types: 'words, chars',
		});

		const links = document.querySelectorAll(
			'.menu-item, .menu-sub-item, .menu-title, .menu-sub-item .menu-content',
		);

		document.querySelectorAll('.menu-item').forEach((item) => {
			const linkElement = item.querySelector('.menu-item-link a');
			if (linkElement) {
				const width = linkElement.offsetWidth;
				item.querySelector('.menu-item-link .bg-hover').style.width =
					width + 30 + 'px';

				const spanElement = item.querySelector('span');
				if (spanElement) {
					spanElement.style.left = width + 40 + 'px';
				}
			}

			const chars = item.querySelectorAll('span .char');

			function colorChars(chars) {
				chars.forEach((char, index) => {
					setTimeout(() => {
						char.classList.add('char-active');
					}, index * 50);
				});
			}

			function clearColorChars(chars) {
				chars.forEach((char) => {
					char.classList.remove('char-active');
				});
			}

			linkElement.addEventListener('mouseenter', () => {
				colorChars(chars);
			});

			linkElement.addEventListener('mouseenter', () => {
				clearColorChars(chars);
			});
		});

		links.forEach((link) => {
			link.addEventListener('mouseenter', (event) => {
				const targetElement = event.currentTarget.querySelector(
					'.menu-item-link a, .menu-title p, .menu-content p',
				);

				if (targetElement) {
					addShuffleEffect(targetElement);
				}
				const spanElement = link.querySelector('span');
				if (spanElement) {
					addShuffleEffect(spanElement);
				}
			});
		});

		function shuffleAll() {
			links.forEach((link) => {
				const targetElement = link.querySelector(
					'.menu-item-link a, .menu-title p, .menu-content p',
				);

				if (targetElement) {
					addShuffleEffect(targetElement);
				}
			});
		}

		function addShuffleEffect(element) {
			const chars = element.querySelector('.char');
			const originalText = [...chars].map((char) => char.textContent);
			const shuffleInterval = 10;
			const resetDelay = 75;
			const additionalDelay = 150;

			chars.forEach((char, index) => {
				setTimeout(() => {
					const interval = setInterval(() => {
						char.textContent = String.fromCharCode(
							97 + Math.floor(Math.random() * 26),
						);
					}, shuffleInterval);

					setTimeout(() => {
						clearInterval(interval);
						char.textContent = originalText[index];
					}, resetDelay + index * additionalDelay);
				}, index * shuffleInterval);
			});
		}
	});
	return (
		<div className='main-navs-box'>
			<nav>
				<div className='menu-toggle'>
					<p>Menu</p>
				</div>
				<p>Collection</p>
			</nav>

			<div className='navs-container'>
				<div className='menu-container'>
					<div className='menu'>
						<div className='menu-main'>
							<div className='menu-top'>
								<div className='menu-top-title'>
									<p>Discover</p>
								</div>

								<div className='menu-top-content'>
									<div className='menu-item'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>Story</a>
										</div>
										<span>Page 001</span>
									</div>
									<div className='menu-item'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>Protocol</a>
										</div>
										<span>Page 002</span>
									</div>
									<div className='menu-item'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>Journal</a>
										</div>
										<span>Page 003</span>
									</div>
									<div className='menu-item'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>Contact</a>
										</div>
										<span>Page 004</span>
									</div>
									<div className='menu-item' id='active'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>Gallery</a>
										</div>
										<span>Page 005</span>
									</div>
									<div className='menu-item'>
										<div className='menu-item-link'>
											<div className='bg-hover'></div>
											<a href=''>About</a>
										</div>
										<span>Page 006</span>
									</div>
								</div>
							</div>

							<div className='menu-bottom'>
								<div className='menu-sub-item'>
									<div className='menu-title'>
										<p>Connect</p>
									</div>
									<div className='menu-content'>
										<p>Discord</p>
									</div>
								</div>
								<div className='menu-sub-item'>
									<div className='menu-title'>
										<p>Buy On</p>
									</div>
									<div className='menu-content'>
										<p>Opensea</p>
									</div>
								</div>
								<div className='menu-sub-item'>
									<div className='menu-title'>
										<p>US-EN</p>
									</div>
									<div className='menu-content'>
										<p>2025</p>
									</div>
								</div>
							</div>
						</div>
						<div className='menu-sidebar'>
							<div className='close-btn'>
								<IoMdClose />
							</div>
							<div className='logo'>
								<IoIosFunnel />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
