import styled, { css } from 'styled-components';
import pix from '../../../assets/chemical6.jpg';
import pix2 from '../../../assets/chemical2.jpg';
import waterPix from '../../../assets/water2.jpg';
import maintainPix from '../../../assets/maintain3.jpg';
import agreePix from '../../../assets/agree2.jpg';




import pix1 from '../../../assets/pix-4.jpg';

const ChemicalSupplyContainer = styled.div``;
const ChemicalSupplyHeroSection = styled.div`
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
const ChemicalSupplyIntroSection = styled.div`
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

const ChemicalSupplyIntroSectionText = styled.div`
	width: 60%;
	height: 100%;
	color: #333;
	padding: 20px;
	background-color: #f7f7f7;
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

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
	}
`;

const ChemicalSupplyIntroSectionImg = styled.div`
	width: 40%;
	img {
		width: 100%;
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
	}
`;
const ChemicalSupplyTreametSection = styled.div`
	width: 100%;
	/* background-color: #f7f7f7; */
	display: flex;

	@media screen and (max-width: 780px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ChemicalSupplyTreametSectionText = styled.div`
	width: 50%;
	padding: 20px;

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

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;
	}
`;

const ChemicalSupplyTreametSectionImg = styled.div`
	width: 50%;
	img {
		width: 100%;
	}

	@media screen and (max-width: 780px) {
		width: 80%;
		text-align: center;
		margin-top: 40px;
	}
`;

const ChemicalSupply = () => {
	return (
		<div>
			<ChemicalSupplyHeroSection>
				<div>
					<h1>CHEMICAL SUPPLY AND TREATMENTS</h1>
					<h4>Safe.Reliable.Sustainable</h4>
				</div>
			</ChemicalSupplyHeroSection>
			{/* <h1>CHEMICAL SUPPLY AND TREATMENTS:</h1>
			<p>
				We supply chemical offerings that cut across the oil and gas (IOW) both
				upstream Oil & Gas producers. This is cost effective, providing clients
				with tailor-made chemical solutions that meet international and approved
				disposal specifications, curtail downtime, enhance production output,
				reduce operational risks regardless of whether it is onshore or
				offshore. Oil & Gas producers face many challenges which hinder and
				limit their production and maintain safety. We solve these challenges
				using sophisticated chemical and scientific technology to improve
				production performance.
			</p> */}

			<ChemicalSupplyIntroSection>
				<ChemicalSupplyIntroSectionText>
					<p>
						At Joshcalebwill, we deliver high-quality chemical products and
						treatment solutions that keep industries running smoothly, safely,
						and sustainably. Our chemical supply chain is built on reliability,
						quality assurance, and tailored service, ensuring that every product
						we deliver meets the highest industry standards.
					</p>
				</ChemicalSupplyIntroSectionText>
				<ChemicalSupplyIntroSectionImg>
					<img src={pix2} alt='' />
				</ChemicalSupplyIntroSectionImg>
			</ChemicalSupplyIntroSection>

			<ChemicalSupplyIntroSection primary>
				<ChemicalSupplyIntroSectionText>
					<h4>Our Expertise</h4>
					<p>
						We specialize in sourcing, supplying, and applying a wide range of
						industrial chemicals for sectors including:
					</p>

					<ul>
						<li>
							Oil & Gas – corrosion inhibitors, demulsifiers, scale removers,
							and more.
						</li>
						<li>
							Water Treatment – flocculants, coagulants, and purification
							chemicals for potable and industrial water systems.
						</li>
						<li>
							Manufacturing – specialty chemicals for production lines,
							cleaning, and maintenance.
						</li>
						<li>
							Agriculture – fertilizers, soil conditioners, and crop protection
							solutions.
						</li>
					</ul>
				</ChemicalSupplyIntroSectionText>
				<ChemicalSupplyIntroSectionImg>
					<img src={waterPix} alt='' />
				</ChemicalSupplyIntroSectionImg>
			</ChemicalSupplyIntroSection>
			<ChemicalSupplyTreametSection>
				<ChemicalSupplyTreametSectionImg>
					<img src={maintainPix} alt='' />
				</ChemicalSupplyTreametSectionImg>
				<ChemicalSupplyTreametSectionText>
					<h4>Treatment Solutions</h4>
					<p>
						Beyond supplying chemicals, we provide treatment programs designed
						to optimize your processes, protect your assets, and minimize
						downtime. Our treatment services include:
					</p>
					<ul>
						<li>
							Water Treatment Programs – preventing scale, corrosion, and
							biofouling in cooling towers, boilers, and pipelines.
						</li>
						<li>
							Process Optimization – chemical dosing, monitoring, and
							adjustments for peak performance.
						</li>
						<li>
							Environmental Compliance – ensuring your chemical applications
							meet regulatory and safety standards.
						</li>
					</ul>
				</ChemicalSupplyTreametSectionText>
			</ChemicalSupplyTreametSection>
			<ChemicalSupplyIntroSection>
				<ChemicalSupplyIntroSectionText>
					<h4> Why Choose Joshcalebwill?</h4>
					<p>
						We specialize in sourcing, supplying, and applying a wide range of
						industrial chemicals for sectors including:
					</p>

					<ul>
						<li>
							Quality Assurance – All products sourced from trusted, certified
							manufacturers.
						</li>
						<li>
							Custom Solutions – Treatments tailored to your unique operational
							challenges.
						</li>
						<li>
							Technical Support – Expert consultation and on-site service from
							our skilled team.
						</li>
						<li>
							Sustainability Focus – Eco-friendly options to reduce
							environmental impact.
						</li>
					</ul>
					<p>
						Whether you need bulk chemical supply, specialty blends, or
						comprehensive treatment programs, Joshcalebwill is your trusted
						partner for safe, efficient, and cost-effective solutions.
					</p>
					<p>
						📞 Get in touch today to discuss your chemical supply and treatment
						needs.
					</p>
				</ChemicalSupplyIntroSectionText>
				<ChemicalSupplyIntroSectionImg>
					<img src={agreePix} alt='' />
				</ChemicalSupplyIntroSectionImg>
			</ChemicalSupplyIntroSection>
		</div>
	);
};

export default ChemicalSupply;
