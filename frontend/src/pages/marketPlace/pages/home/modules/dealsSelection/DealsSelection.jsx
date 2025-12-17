import { useEffect, useState } from 'react';
import dealsImg from '../../../../../../assets/who6.png';

const DealsSelection = () => {
	const initialTime = 5 * 60 * 60;
	const [timeLeft, setTimeLeft] = useState(() => {
		const storedTime = localStorage.getItem('remainingTime');
		return storedTime && parseInt(storedTime, 10) > 0
			? parseInt(storedTime, 10)
			: initialTime;
	});

	const formatTime = (time) => {
		useEffect(() => {
			if (timeLeft <= 0) return;
			const timer = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						clearInterval(timer);
						localStorage.setItem('remainingTime', 0);

						return 0;
					}

					const remainingTime = prev - 1;

					localStorage.setItem('remainingTime', remainingTime);

					return remainingTime;
				});
			}, 1000);

			return () => clearInterval(timer);
		}, [timeLeft]);
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		return {
			hours: String(hours).padStart(2, '0'),
			minutes: String(minutes).padStart(2, '0'),
			seconds: String(seconds).padStart(2, '0'),
		};
	};

	const { hours, minutes, seconds } = formatTime(timeLeft);
	return (
		<section className='section__container deals__container'>
			<div className='deals__image'>
				<img src={dealsImg} alt='' />
			</div>

			<div className='deals__content'>
				<h5>Get up To 20% Discount</h5>
				<h4>Deals Of This Month</h4>
				<p>
					Our Market Deals of the month are here to make your dreams a reality
					without breaking the bank. Discover a curated collection of exquisite
					safety, health, and instrumentation, all handpicked to elevate your
					workers.
				</p>
				<div className='text-6xl font-bold text-zinc-800 flex gap-x-3 mt-5'>
					<span
						className=' text-white bg-zinc-800 p-3'
						style={{ padding: '12px' }}
					>
						{hours}
					</span>
					:
					<span
						className=' text-white bg-zinc-800 p-3'
						style={{ padding: '12px' }}
					>
						{minutes}
					</span>
					:
					<span
						className=' text-white bg-zinc-800 p-3'
						style={{ padding: '12px' }}
					>
						{seconds}
					</span>
				</div>
			</div>
		</section>
	);
};

export default DealsSelection;
