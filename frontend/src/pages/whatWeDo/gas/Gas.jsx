import styled, { css } from 'styled-components';
import pix from '../../../assets/gas1.jpg';
import pix1 from '../../../assets/gas2.jpg';
import pix2 from '../../../assets/gas3.jpeg';
import pix3 from '../../../assets/gas4.png';


const GasContainer = styled.div``;
const GasHeroSection = styled.div`
	background: url(${pix});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	padding-top: 40.2%;
	position: relative;
	color: #fff;

	div {
		max-width: 900px;
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	h1 {
		font-size: 40px;
		padding-bottom: 10px;
	}

	h4 {
		font-size: 18px;
	}

	@media screen and (max-width: 960px) {
		padding-top: 60.2%;

		div {
			max-width: 600px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 660px) {
		padding-top: 80.2%;

		h1 {
			font-size: 25px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 15px;
		}

		div {
			max-width: 400px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 460px) {
		padding-top: 90.2%;

		h1 {
			font-size: 20px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 12px;
		}

		div {
			max-width: 300px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 360px) {
		padding-top: 99.2%;

		h1 {
			font-size: 15px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 10px;
		}

		div {
			max-width: 300px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}
`;
const GasIntroSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 780px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const GasIntroSectionText = styled.div`
	width: 60%;
	height: 100%;
	color: #333;
	padding: 20px;
	/* background-color: #f7f7f7; */
	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
	}

	ul {
		padding: 30px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;

		li span {
			font-weight: bold;
		}
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
		padding-top: 20px;
	}
`;

const GasIntroSectionImg = styled.div`
	width: 40%;
	img {
		width: 100%;
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
		padding: 30px 0;
	}
`;

const GasTechWrapper = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 30px;

	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
	}

	ul {
		padding: 30px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	div {
		width: 100%;
		img {
			width: 100%;
		}
	}
`;

const Gas = () => {
	return (
		<div>
			<GasHeroSection>
				<div>
					<h1>GAS COMPRESSION SERVICES</h1>
					<h4>Powering Efficiency. Driving Efficiency. Ensuring Flow.</h4>
				</div>
			</GasHeroSection>
			<GasIntroSection>
				<GasIntroSectionText>
					<p>
						At Joshcalebwill, our Gas Compression Services ensure optimal
						pressure levels for the safe and efficient transport of natural gas.
						From design and installation to maintenance and upgrades, we provide
						end-to-end solutions that keep your operations running at peak
						performance.
					</p>
				</GasIntroSectionText>
				<GasIntroSectionImg>
					<img src={pix1} alt='' />
				</GasIntroSectionImg>
			</GasIntroSection>
			<GasIntroSection primary>
				<GasIntroSectionText>
					<h4>Our Capabilities</h4>
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
				</GasIntroSectionText>
				<GasIntroSectionImg>
					<img src={pix2} alt='' />
				</GasIntroSectionImg>
			</GasIntroSection>
			<GasTechWrapper>
				<h4>Technology & Innovation</h4>
				<p>
					We integrate advanced monitoring systems that track compressor
					performance in real-time, improving operational efficiency and
					reducing risks. Our systems are designed with energy efficiency in
					mind, cutting down on fuel use and emissions while maintaining
					reliability even under demanding conditions.
				</p>
				<div>
					<img src={pix3} alt='' />
				</div>
			</GasTechWrapper>
			<GasTechWrapper>
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
			</GasTechWrapper>
		</div>
	);
};

export default Gas;
