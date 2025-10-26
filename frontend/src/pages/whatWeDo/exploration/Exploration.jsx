import * as Styles from './ExplorationStyles';
import explore1 from '../../../assets/explore3.png';
import explore2 from '../../../assets/explore5.png';
import explore3 from '../../../assets/explore4.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';
import LazyImage from '../../../components/LazyImage';


const Exploration = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.ExplorationHero>
					{/* <img alt='' /> */}
					<LazyImage src={explore1} />
					<Styles.BlendModeTitle>exploration</Styles.BlendModeTitle>
				</Styles.ExplorationHero>
				<Styles.CultureInfo>
					<Copy delay={0.5}>
						<p>
							We provide consultancy services in the area of upstream
							exploration and operations in crude oil, gas and mineral
							exploration and extraction and prospecting
						</p>
					</Copy>
				</Styles.CultureInfo>
				<Styles.ExplorationContainer>
					<Copy delay={0.5}>
						<h2>
							At Joshcalebwill, we see exploration as the foundation of every
							successful energy project. Through precision science, advanced
							technology, and a commitment to responsible practices, we help our
							clients uncover valuable resources and make confident, data-driven
							decisions.
						</h2>
					</Copy>

					<Styles.ExplorationOptionsContainer>
						<Styles.ExplorationOptionsImg>
							{/* <img src={explore2} alt='' /> */}
							<LazyImage src={explore2} />
						</Styles.ExplorationOptionsImg>
						<Styles.ExplorationOptionsInfo>
							<Copy delay={0.5}>
								<h4>Our Exploration Expertise</h4>
							</Copy>
							<Copy delay={0.5}>
								<p>
									We provide comprehensive exploration services for the oil,
									gas, and energy sectors, including:
								</p>
							</Copy>
							<Copy delay={0.5}>
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
										<span>Reservoir Analysis</span> – determining resource
										quality, quantity, and commercial viability.
									</li>
									<li>
										<span>Environmental Assessments</span> – ensuring projects
										meet regulatory and sustainability requirements.
									</li>
								</ul>
							</Copy>
						</Styles.ExplorationOptionsInfo>
					</Styles.ExplorationOptionsContainer>
					<Styles.ExplorationOptionsContainer primary>
						<Styles.ExplorationOptionsImg>
							{/* <img src={explore3} alt='' /> */}
							<LazyImage src={explore3} />
						</Styles.ExplorationOptionsImg>
						<Styles.ExplorationOptionsInfo>
							<Copy delay={0.5}>
								<h4> Our Approach</h4>
							</Copy>
							<Copy delay={0.5}>
								<p>
									Every project begins with a clear understanding of the terrain
									and its potential. Our multidisciplinary team of geologists,
									geophysicists, and engineers uses cutting-edge tools and
									techniques to deliver accurate, actionable insights — all
									while minimizing environmental impact and operational risk.
								</p>
							</Copy>
						</Styles.ExplorationOptionsInfo>
					</Styles.ExplorationOptionsContainer>
				</Styles.ExplorationContainer>
				<Styles.ChooseUs>
					<Copy delay={0.5}>
						<h4>Why Choose Joshcalebwill?</h4>
					</Copy>
					<Copy delay={0.5}>
						<ul>
							<li>
								<span>Technical Excellence</span> – proven expertise in complex
								exploration environments.
							</li>
							<li>
								<span>Innovative Tools</span> – advanced data analysis and
								mapping technologies.
							</li>
							<li>
								<span>Responsible Operations</span> – environmental and
								community considerations at every stage.
							</li>
							<li>
								<span>Seamless Integration </span>– exploration strategies
								aligned with development and production goals.
							</li>
						</ul>
					</Copy>
					<Copy delay={0.5}>
						<p>
							From the first seismic study to the final feasibility report,
							Joshcalebwill is your trusted partner in finding, understanding,
							and unlocking the potential of energy resources.
						</p>
					</Copy>
					<Copy delay={0.5}>
						<p>
							<Link to='/who-we-are/contact-us' onClick={scrollToTop}>
								📩 Contact us
							</Link>{' '}
							today to begin your next exploration journey.
						</p>
					</Copy>
				</Styles.ChooseUs>
			</ReactLenis>
		</>
	);
}

export default Exploration
