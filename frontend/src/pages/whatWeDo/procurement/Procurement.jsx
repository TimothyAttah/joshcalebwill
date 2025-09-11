import styled, { css } from 'styled-components';
import pix from '../../../assets/procurement3.jpg';
import pix1 from '../../../assets/procurement6.png';
import pix2 from '../../../assets/procurement5.png';
import pix3 from '../../../assets/procurement5.jpg';
import { Link } from 'react-router-dom';

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
		font-size: 50px !important;
		padding-bottom: 10px;
		color: #fff;
	}

	p {
		font-size: 22px;
		color: #fff;
	}

	h4 {
		font-size: 18px;
		color: #fff;
	}

	${(props) =>
		props.primary &&
		css`
			background: url(${pix3});
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			width: 100%;
			padding-top: 40.2%;
			position: relative;
			color: #fff;
		`}

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

const Procurement = () => {
	return (
		<div>
			<GasHeroSection>
				<div>
					<h1>Procurement Solutions</h1>
					<h4>Seamless sourcing. Trusted delivery. Cost-effective results.</h4>
				</div>
			</GasHeroSection>
			<GasIntroSection>
				<GasIntroSectionText>
					<p>
						At Joshcalebwill, we streamline the procurement process for oil &
						gas and industrial operations. From sourcing critical equipment to
						delivering specialized materials, we ensure every step is reliable,
						transparent, and cost-efficient.
					</p>
				</GasIntroSectionText>
				<GasIntroSectionImg>
					<img src={pix1} alt='' loading='lazy' />
				</GasIntroSectionImg>
			</GasIntroSection>
			<GasIntroSection primary>
				<GasIntroSectionText>
					<h4>Our Procurement Expertise</h4>
					<ul>
						<li>
							<span>Oil & Gas Equipment</span> – valves, pumps, drilling tools,
							and spare parts.
						</li>
						<li>
							<span>Industrial Chemicals & Materials </span> –high-grade,
							quality-assured, and compliant with standards.
						</li>
						<li>
							<span>Logistics & Delivery</span> – global reach with dependable
							timelines.
						</li>
						<li>
							<span>Custom Sourcing</span> – tailored solutions for unique
							project needs.
						</li>
					</ul>
				</GasIntroSectionText>
				<GasIntroSectionImg>
					<img src={pix2} alt='' loading='lazy' />
				</GasIntroSectionImg>
			</GasIntroSection>

			<GasIntroSection primary>
				<GasIntroSectionText>
					<h4>Industries We Serve</h4>
					<ul>
						<li>
							<span>Oil & Gas</span> – specialized procurement for upstream,
							midstream, and downstream.
						</li>
						<li>
							<span>Manufacturing </span> –reliable parts and materials for
							production efficiency.
						</li>
						<li>
							<span>Energy & Infrastructure</span> –supporting large-scale
							engineering and construction projects.
						</li>
					</ul>
				</GasIntroSectionText>
				<GasIntroSectionText>
					<h4>Why Choose Our Procurement Services</h4>
					<ul>
						<li>Trusted Global Supplier Network</li>
						<li>Competitive Pricing & Cost Savings</li>
						<li>Quality Assurance with Compliance Standards</li>
						<li>Transparent Processes and Documentation</li>
					</ul>
				</GasIntroSectionText>
			</GasIntroSection>

			<GasHeroSection primary>
				<div>
					<h4>Need a reliable procurement partner?</h4>
					<h1>Contact Joshcalebwill today to streamline your supply chain.</h1>
					<button>
						<Link to='/contact'>Let’s Get Started</Link>
					</button>
				</div>
			</GasHeroSection>
		</div>
	);
};

export default Procurement;
