import pic1 from '../../../assets/newGas1.png';
import pic2 from '../../../assets/newGas2.png';
import pic3 from '../../../assets/newGas3.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import * as Styles from './Gas2Styles';
import { useEffect } from 'react';

const Gas2 = () => {
  return (
		<Styles.GasContainer>
			<Styles.GasHeroContainer>
				<Styles.GasHeroOverlay />
				<img src={pic1} alt='' loading='lazy' />
				<h1>GAS COMPRESSION SERVICES</h1>
			</Styles.GasHeroContainer>
			<Styles.GasIntroSection>
				<h4>
					Powering Efficiency. <br /> Driving Efficiency. <br /> Ensuring Flow.
				</h4>
				<h3>
					Powering Efficiency. <br /> Driving Efficiency. <br /> Ensuring Flow.
				</h3>
				<p>
					At Joshcalebwill, our Gas Compression Services ensure optimal pressure
					levels for the safe and efficient transport of natural gas. From
					design and installation to maintenance and upgrades, we provide
					end-to-end solutions that keep your operations running at peak
					performance.
				</p>
			</Styles.GasIntroSection>
			<Styles.GasItemContainer>
				<h2>Our Capabilities</h2>
				<Styles.GasItemImg>
					<img src={pic2} alt='' loading='lazy' />
				</Styles.GasItemImg>
				<Styles.GasItemContent>
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
							<span>Mobile Compression</span> – flexible, portable units for
							on-site and emergency needs.
						</li>
					</ul>
				</Styles.GasItemContent>
			</Styles.GasItemContainer>
			<Styles.GasItemContainer>
				<h2>Technology & Innovation</h2>
				<Styles.GasItemImg>
					<img src={pic3} alt='' loading='lazy' />
				</Styles.GasItemImg>
				<Styles.GasItemContent>
					<p>
						We integrate advanced monitoring systems that track compressor
						performance in real-time, improving operational efficiency and
						reducing risks. Our systems are designed with energy efficiency in
						mind, cutting down on fuel use and emissions while maintaining
						reliability even under demanding conditions.
					</p>
				</Styles.GasItemContent>
			</Styles.GasItemContainer>
			<Styles.GasReasonWrapper>
				<h4>Why Choose Us</h4>

				<ul>
					<li>Commitment to global safety and HSE standards.</li>
					<li>
						Solutions tailored to maximize operational efficiency and minimize
						downtime.
					</li>
					<li>
						Customized compression strategies built to meet client-specific
						needs.
					</li>
					<li>Round-the-clock technical support and maintenance teams.</li>
				</ul>

				<p>
					Reliable gas compression is at the heart of energy continuity. With
					Joshcalebwill, you get trusted solutions that keep gas moving
					efficiently, safely, and sustainably.
				</p>
			</Styles.GasReasonWrapper>
		</Styles.GasContainer>
	);
};

export default Gas2;
