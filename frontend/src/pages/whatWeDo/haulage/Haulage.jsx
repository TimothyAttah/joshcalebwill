import * as Styles from './HaulageStyles';
import explore1 from '../../../assets/hau1.png';
import explore2 from '../../../assets/pro4.png';
import explore3 from '../../../assets/pro5.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';

const Haulage = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.HaulageHero>
					<img src={explore1} alt='' />
					<Styles.BlendModeTitle>Haulage</Styles.BlendModeTitle>
				</Styles.HaulageHero>
				<Styles.CultureInfo>
					<Copy>
						<p>Seamless sourcing. Trusted delivery. Cost-effective results.</p>
					</Copy>
				</Styles.CultureInfo>
				<Styles.HaulageContainer>
					<Copy>
						<h2>
							At Joshcalebwill, we streamline the Haulage process for oil & gas
							and industrial operations. From sourcing critical equipment to
							delivering specialized materials, we ensure every step is
							reliable, transparent, and cost-efficient.
						</h2>
					</Copy>
					<Styles.HaulageOptionsContainer>
						<Styles.HaulageOptionsImg>
							<img src={explore2} alt='' />
						</Styles.HaulageOptionsImg>
						<Styles.HaulageOptionsInfo>
							<Copy>
								<h4>Our Haulage Expertise</h4>
							</Copy>
							<Copy>
								<ul>
									<li>
										<span>Oil & Gas Equipment</span> – valves, pumps, drilling
										tools, and spare parts.
									</li>
									<li>
										<span>Industrial Chemicals & Materials </span> –high-grade,
										quality-assured, and compliant with standards.
									</li>
									<li>
										<span>Logistics & Delivery</span> – global reach with
										dependable timelines.
									</li>
									<li>
										<span>Custom Sourcing</span> – tailored solutions for unique
										project needs.
									</li>
								</ul>
							</Copy>
						</Styles.HaulageOptionsInfo>
					</Styles.HaulageOptionsContainer>
					<Styles.HaulageOptionsContainer primary>
						<Styles.HaulageOptionsImg>
							<img src={explore3} alt='' />
						</Styles.HaulageOptionsImg>
						<Styles.HaulageOptionsInfo>
							<Copy>
								<h4>Industries We Serve</h4>
							</Copy>
							<Copy>
								<ul>
									<li>
										<span>Oil & Gas</span> – specialized Haulage for upstream,
										midstream, and downstream.
									</li>
									<li>
										<span>Manufacturing </span> –reliable parts and materials
										for production efficiency.
									</li>
									<li>
										<span>Energy & Infrastructure</span> –supporting large-scale
										engineering and construction projects.
									</li>
								</ul>
							</Copy>
						</Styles.HaulageOptionsInfo>
					</Styles.HaulageOptionsContainer>
				</Styles.HaulageContainer>
				<Styles.ChooseUs>
					<Copy>
						<h4>Why Choose Our Haulage Services</h4>
					</Copy>
					<Copy>
						<ul>
							<li>Trusted Global Supplier Network</li>
							<li>Competitive Pricing & Cost Savings</li>
							<li>Quality Assurance with Compliance Standards</li>
							<li>Transparent Processes and Documentation</li>
						</ul>
					</Copy>
					<div>
						<Copy>
							<h4>Need a reliable Haulage partner?</h4>
						</Copy>
						<Copy>
							<h2>
								Contact Joshcalebwill today to streamline your supply chain.
							</h2>
						</Copy>
						<button>
							<Link to='/who-we-are/contact-us' onClick={scrollToTop}>
								Let’s Get Started
							</Link>
						</button>
					</div>
				</Styles.ChooseUs>
			</ReactLenis>
		</>
	);
};

export default Haulage;
