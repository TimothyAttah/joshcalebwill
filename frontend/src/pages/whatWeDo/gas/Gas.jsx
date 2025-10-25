import * as Styles from './GasStyles';
import explore1 from '../../../assets/newGas1.png';
import explore2 from '../../../assets/newGas2.png';
import explore3 from '../../../assets/newGas3.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';

const Gas = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.GasHero>
					<img src={explore1} alt='' />
					<Styles.BlendModeTitle>
						GAS COMPRESSION SERVICES
					</Styles.BlendModeTitle>
				</Styles.GasHero>
				<Styles.CultureInfo>
					<Copy delay={0.5}>
						<h3>
							Powering Efficiency. <br /> Driving Efficiency. <br /> Ensuring
							Flow.
						</h3>
					</Copy>
				</Styles.CultureInfo>
				<Styles.GasContainer>
					<Copy delay={0.5}>
						<h2>
							At Joshcalebwill, our Gas Compression Services ensure optimal
							pressure levels for the safe and efficient transport of natural
							gas. From design and installation to maintenance and upgrades, we
							provide end-to-end solutions that keep your operations running at
							peak performance.
						</h2>
					</Copy>

					<Styles.GasOptionsContainer>
						<Styles.GasOptionsImg>
							<img src={explore2} alt='' />
						</Styles.GasOptionsImg>
						<Styles.GasOptionsInfo>
							<Copy delay={0.5}>
								<h4>Our Capabilities</h4>
							</Copy>
							<Copy delay={0.5}>
								<ul>
									<li>
										<span>Field Gas Compression</span> – supporting natural gas
										gathering and boosting operations.
									</li>
									<li>
										<span>Pipeline Compression </span> – maintaining steady flow
										efficiency across long distances.
									</li>
									<li>
										<span>Storage Compression</span> – enabling injection and
										withdrawal for storage facilities.
									</li>
									<li>
										<span>Mobile Compression</span> – flexible, portable units
										for on-site and emergency needs.
									</li>
								</ul>
							</Copy>
						</Styles.GasOptionsInfo>
					</Styles.GasOptionsContainer>
					<Styles.GasOptionsContainer primary>
						<Styles.GasOptionsImg>
							<img src={explore3} alt='' />
						</Styles.GasOptionsImg>
						<Styles.GasOptionsInfo>
							<Copy delay={0.5}>
								<h4>Technology & Innovation</h4>
							</Copy>
							<Copy delay={0.5}>
								<p>
									We integrate advanced monitoring systems that track compressor
									performance in real-time, improving operational efficiency and
									reducing risks. Our systems are designed with energy
									efficiency in mind, cutting down on fuel use and emissions
									while maintaining reliability even under demanding conditions.
								</p>
							</Copy>
						</Styles.GasOptionsInfo>
					</Styles.GasOptionsContainer>
				</Styles.GasContainer>
				<Styles.ChooseUs>
					<Copy delay={0.5}>
						<h4>Why Choose Us</h4>
					</Copy>
					<Copy delay={0.5}>
						<ul>
							<li>Commitment to global safety and HSE standards.</li>
							<li>
								Solutions tailored to maximize operational efficiency and
								minimize downtime.
							</li>
							<li>
								Customized compression strategies built to meet client-specific
								needs.
							</li>
							<li>Round-the-clock technical support and maintenance teams.</li>
						</ul>
					</Copy>
					<div>
						<Copy delay={0.5}>
							<p>
								Reliable gas compression is at the heart of energy continuity.
								With Joshcalebwill, you get trusted solutions that keep gas
								moving efficiently, safely, and sustainably.
							</p>
						</Copy>
						<button>
							<Link to='/who-we-are/contact-us' onClick={scrollToTop}>
								Contact Us Today
							</Link>
						</button>
					</div>
				</Styles.ChooseUs>
			</ReactLenis>
		</>
	);
};

export default Gas;
