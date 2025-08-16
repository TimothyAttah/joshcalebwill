import styled, { css } from 'styled-components';
import pix from '../../../assets/health1.jpg';
import servicePix1 from '../../../assets/healthService1.jpg';
import servicePix2 from '../../../assets/healthService2.jpg';
import servicePix3 from '../../../assets/healthService3.jpg';
import servicePix4 from '../../../assets/healthService4.jpg';
import servicePix5 from '../../../assets/healthService5.jpg';
import servicePix6 from '../../../assets/healthService6.jpg';
import servicePix7 from '../../../assets/healthService7.jpg';
import servicePix8 from '../../../assets/healthService8.jpg';
import servicePix9 from '../../../assets/healthService9.jpg';



import pix1 from '../../../assets/gas2.jpg';
import pix2 from '../../../assets/gas3.jpeg';
import pix3 from '../../../assets/gas4.png';

const HealthContainer = styled.div``;
const HealthHeroSection = styled.div`
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

	${(props) =>
		props.primary &&
		css`
			background: url(${servicePix9});
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
const HealthIntroSection = styled.div`
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

const HealthIntroSectionText = styled.div`
	width: 60%;
	height: 100%;
	color: #333;
	padding: 50px;
	background-color: #f7f7f7;
	margin: auto;
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

	div {
		display: flex;
		/* flex-wrap: wrap; */
		gap: 10px;

		img {
			width: 300px;
		}
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;

		div {
			width: 100%;
			display: flex;
			flex-direction: column;

			img {
				width: 100%;
			}
		}
	}
`;

const HealthIntroSectionImg = styled.div`
	width: 40%;
	img {
		width: 100%;
	}
`;

const HealthTechWrapper = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 80px;

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
`;

const HealthInfoBox = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	padding: 100px 0;

	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;

		span {
			font-weight: bold;
		}
	}

	h2 {
		color: crimson;
		font-size: 40px;
		padding-bottom: 10px;
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
		padding: 50px 20px;

		h2 {
			color: crimson;
			font-size: 30px;
			padding-bottom: 10px;
		}

		p {
			font-size: 16px;
			line-height: 30px;
			padding: 10px 0;

			span {
				font-weight: bold;
			}
		}
	}

	@media screen and (max-width: 420px) {
		h2 {
			color: crimson;
			font-size: 25px;
			padding-bottom: 10px;
		}
	}
`;

const HealthServiceContainer = styled.div`
	width: 80%;
	margin: 0 auto;

	h2 {
		color: crimson;
		text-align: center;
		font-size: 30px;
	}
`;
const HealthServiceWrapper = styled.div`
	padding-top: 30px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 50px;
`;

const HealthServiceList = styled.div`
	width: 400px;
	/* transition: 0.3s ease-in-out all; */
	overflow: hidden;
	transition: scale 1s ease-in-out;

	&:hover {
		scale: 1.12;
	}

	@media screen and (max-width: 420px) {
		width: 100%;
	}
`;
const HealthServiceListInfo = styled.div`
	text-align: center;
	h4 {
		text-transform: capitalize;
		padding-bottom: 10px;
	}
`;
const HealthServiceListImg = styled.div`
	width: 100%;
	height: 250px;
	img {
		width: 100%;
		height: 100%;
	}
`;

const Health = () => {
	return (
		<div>
			<HealthHeroSection>
				<div>
					<h1>Health, Safety, and Environmental Assessment Consultancy</h1>
					<h4>Protecting People, Assets & Nature</h4>
				</div>
			</HealthHeroSection>
			<HealthInfoBox>
				<h2>HEALTH SAFETY AND ENVIRONMENTAL ASSESSMENT CONSULTANCY:</h2>
				<p>
					The oil and gas environment is a very volatile one, hence the need for
					consultancy services for organizations in the areas of Environment,
					Health and Safety for Workers and the Environment. We establish
					systems and policies that help in the safety and maintenance of oil
					and gas facility.
				</p>
				<p>
					At <span>Joshcalebwill</span>, we understand that health, safety, and
					environmental (HSE) practices are at the core of sustainable business
					operations. Our consultancy services are designed to help
					organizations identify risks, maintain compliance, and foster a
					culture of safety while protecting the environment.
				</p>
			</HealthInfoBox>
			<HealthServiceContainer>
				<h2>Our Services</h2>
				<HealthServiceWrapper>
					<HealthServiceList>
						<HealthServiceListInfo>
							<h4>Workplace Safety Audits</h4>
							<p>
								identifying hazards, assessing risks, and recommending effective
								controls.
							</p>
						</HealthServiceListInfo>
						<HealthServiceListImg>
							<img src={servicePix1} alt='' />
						</HealthServiceListImg>
					</HealthServiceList>
					<HealthServiceList>
						<HealthServiceListInfo>
							<h4>Environmental Impact Assessments (EIA)</h4>
							<p>
								evaluating potential environmental consequences of projects and
								recommending sustainable solutions.
							</p>
						</HealthServiceListInfo>
						<HealthServiceListImg>
							<img src={servicePix2} alt='' />
						</HealthServiceListImg>
					</HealthServiceList>
					<HealthServiceList>
						<HealthServiceListInfo>
							<h4>Regulatory Compliance Support</h4>
							<p>
								ensuring operations meet local and international HSE
								regulations.
							</p>
						</HealthServiceListInfo>
						<HealthServiceListImg>
							<img src={servicePix3} alt='' />
						</HealthServiceListImg>
					</HealthServiceList>
					<HealthServiceList>
						<HealthServiceListInfo>
							<h4>Emergency Response Planning</h4>
							<p>
								preparing organizations to respond effectively to incidents and
								reduce downtime.
							</p>
						</HealthServiceListInfo>
						<HealthServiceListImg>
							<img src={servicePix4} alt='' />
						</HealthServiceListImg>
					</HealthServiceList>
					<HealthServiceList>
						<HealthServiceListInfo>
							<h4>Training & Capacity Building</h4>
							<p>
								equipping employees with the skills and awareness to work safely
								and responsibly.
							</p>
						</HealthServiceListInfo>
						<HealthServiceListImg>
							<img src={servicePix5} alt='' />
						</HealthServiceListImg>
					</HealthServiceList>
				</HealthServiceWrapper>
			</HealthServiceContainer>
			<HealthIntroSectionText>
				<h4>Why HSE Matters</h4>
				<ul>
					<li>Protects people, assets, and the environment.</li>
					<li>
						Reduces the risk of costly accidents, penalties, and reputational
						damage.
					</li>
					<li>Enhances sustainability and corporate responsibility.</li>
					<li>Builds trust with stakeholders and regulatory authorities.</li>
				</ul>
				<div>
					<img src={servicePix6} alt='' />
					<img src={servicePix7} alt='' />
				</div>
			</HealthIntroSectionText>

			<HealthIntroSectionText>
				<h4>Why Choose Joshcalebwill</h4>
				<ul>
					<li>Experienced HSE consultants with global and local expertise.</li>
					<li>Tailored solutions to meet specific industry needs.</li>
					<li> Hands-on approach with measurable results..</li>
					<li>Commitment to continuous improvement and sustainability.</li>
				</ul>
				<div>
					<img src={servicePix8} alt='' />
				</div>
			</HealthIntroSectionText>
			<HealthHeroSection primary>
				<div>
					<h1>Contact Joshcalebwill Today for Expert HSE Consultancy.</h1>
				</div>
			</HealthHeroSection>
		</div>
	);
};

export default Health;
