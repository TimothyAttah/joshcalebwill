import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.jpeg';
import { FadeInAlways } from '../components/fadeIn/FadeInAlways';

const Preloader = ({ preloader, setPreloader }) => {
	const [timer, setTimer] = useState(3);
	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 500);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);
	return (
		<div className='loader-wrappers absolute-load'>
			<FadeInAlways delay={0.1} direction='down'>
				<img src={logo} alt='' />
			</FadeInAlways>
			<FadeInAlways delay={0.1} direction='up'>
				<h1>Joshcalebwill Petroluem</h1>
			</FadeInAlways>
			<FadeInAlways delay={0.2} direction='up'>
				<h2>Limited</h2>
			</FadeInAlways>
		</div>
	);
};

export default Preloader;
