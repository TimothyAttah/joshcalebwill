import styled, { css } from 'styled-components';
import pix from '../../../assets/explore1.jpg';
import pix1 from '../../../assets/explore2.jpg';
import pix2 from '../../../assets/explore4.jpg';

const ExploreContainer = styled.div``;
const ExploreHeroSection = styled.div`
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
const ExploreIntroSection = styled.div`
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

const ExploreIntroSectionText = styled.div`
	width: 60%;
	height: 100%;
	color: #333;
	padding: 20px;
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
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;

		h4 {
			text-align: center;
		}
	}
`;





const ExploreExpertSection = styled.div`
	width: 80%;
	margin: auto;
	padding-top: 50px;

	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
		text-align: center;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
		text-align: center;
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		text-align: center;

		h4 {
			text-align: center;
		}
	}
`;

const ExploreExpertSectionWrapper = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: space-around;
	padding-top: 50px;

	ul {
		/* width: 70%; */
		display: flex;
		flex-direction: column;
		gap: 10px;

		li {
			span {
				font-weight: bold;
			}
		}
	}

	div {
		width: 30%;
		img {
			width: 100%;
		}
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		div {
			width: 70%;
			img {
				width: 100%;
			}
		}
	}
`;
const ExploreApproach = styled.div`
	width: 80%;
	margin: auto;
	padding-top: 80px;
	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
		text-align: center;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
		text-align: center;
	}

	div {
		width: 100%;

		img {
			width: 100%;
		}
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		margin-top: 50px;


	}
`;

const Exploration = () => {
	return (
		<div>
			<ExploreHeroSection>
				<div>
					<h1>EXPLORATION</h1>
					<p>
						We provide consultancy services in the area of upstream exploration
						and operations in crude oil, gas and mineral exploration and
						extraction and prospecting
					</p>
				</div>
			</ExploreHeroSection>

			<ExploreIntroSection>
				<ExploreIntroSectionText>
					<p>
						At Joshcalebwill, we see exploration as the foundation of every
						successful energy project. Through precision science, advanced
						technology, and a commitment to responsible practices, we help our
						clients uncover valuable resources and make confident, data-driven
						decisions.
					</p>
				</ExploreIntroSectionText>
			</ExploreIntroSection>

			<ExploreExpertSection>
				<h4>Our Exploration Expertise</h4>
				<p>
					We provide comprehensive exploration services for the oil, gas, and
					energy sectors, including:
				</p>
				<ExploreExpertSectionWrapper>
					<ul>
						<li>
							<span>Geological Surveys</span> – studying rock formations,
							structures, and mineral composition.
						</li>
						<li>
							<span> Geophysical Studies</span> – seismic acquisition,
							processing, and interpretation.
						</li>
						<li>
							<span>Reservoir Analysis</span> – determining resource quality,
							quantity, and commercial viability.
						</li>
						<li>
							<span>Environmental Assessments</span> – ensuring projects meet
							regulatory and sustainability requirements.
						</li>
					</ul>
					<div>
						<img src={pix1} alt='' />
					</div>
				</ExploreExpertSectionWrapper>
			</ExploreExpertSection>

			<ExploreApproach>
				<h4> Our Approach</h4>
				<p>
					Every project begins with a clear understanding of the terrain and its
					potential. Our multidisciplinary team of geologists, geophysicists,
					and engineers uses cutting-edge tools and techniques to deliver
					accurate, actionable insights — all while minimizing environmental
					impact and operational risk.
				</p>
				<div>
					<img src={pix2} alt='' />
				</div>
			</ExploreApproach>

			<ExploreIntroSection>
				<ExploreIntroSectionText>
					<h4>Why Choose Joshcalebwill?</h4>
					<ul>
						<li>
							<span>Technical Excellence</span> – proven expertise in complex
							exploration environments.
						</li>
						<li>
							<span>Innovative Tools</span> – advanced data analysis and mapping
							technologies.
						</li>
						<li>
							<span>Responsible Operations</span> – environmental and community
							considerations at every stage.
						</li>
						<li>
							<span>Seamless Integration </span>– exploration strategies aligned
							with development and production goals.
						</li>
					</ul>
					<p>
						From the first seismic study to the final feasibility report,
						Joshcalebwill is your trusted partner in finding, understanding, and
						unlocking the potential of energy resources.
					</p>
					<p>📩 Contact us today to begin your next exploration journey.</p>
				</ExploreIntroSectionText>
			</ExploreIntroSection>
		</div>
	);
};

export default Exploration;
