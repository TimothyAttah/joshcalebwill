import * as Styles from './ProcurementStyles';
import explore1 from '../../../assets/pro1.mp4';
import explore2 from '../../../assets/pro2.png';
import explore3 from '../../../assets/pro3.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';
import LazyImage from '../../../components/LazyImage';
import Transition from '../../../components/Transition';

const Procurement = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.ProcurementHero>
					{/* <img alt='' /> */}
					<video src={explore1} autoPlay muted loop playsInline />
					<Styles.BlendModeTitle>Procurement</Styles.BlendModeTitle>
				</Styles.ProcurementHero>
				<Styles.CultureInfo>
					<Copy>
						<p>Seamless sourcing. Trusted delivery. Cost-effective results.</p>
					</Copy>
				</Styles.CultureInfo>
				<Styles.ProcurementContainer>
					<Copy>
						<h2>
							At Joshcalebwill, we streamline the procurement process for oil &
							gas and industrial operations. From sourcing critical equipment to
							delivering specialized materials, we ensure every step is
							reliable, transparent, and cost-efficient.
						</h2>
					</Copy>

					<Styles.ProcurementOptionsContainer>
						<Styles.ProcurementOptionsImg>
							{/* <img alt='' /> */}
							<LazyImage src={explore2} />
						</Styles.ProcurementOptionsImg>
						<Styles.ProcurementOptionsInfo>
							<Copy>
								<h4>Our Procurement Expertise</h4>

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
						</Styles.ProcurementOptionsInfo>
					</Styles.ProcurementOptionsContainer>
					<Styles.ProcurementOptionsContainer primary>
						<Styles.ProcurementOptionsImg>
							{/* <img src={explore3} alt='' /> */}
							<LazyImage src={explore3} />
						</Styles.ProcurementOptionsImg>
						<Styles.ProcurementOptionsInfo>
							<Copy>
								<h4>Industries We Serve</h4>
								<ul>
									<li>
										<span>Oil & Gas</span> – specialized procurement for
										upstream, midstream, and downstream.
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
						</Styles.ProcurementOptionsInfo>
					</Styles.ProcurementOptionsContainer>
				</Styles.ProcurementContainer>
				<Styles.ChooseUs>
					<Copy>
						<h4>Why Choose Our Procurement Services</h4>
						<ul>
							<li>Trusted Global Supplier Network</li>
							<li>Competitive Pricing & Cost Savings</li>
							<li>Quality Assurance with Compliance Standards</li>
							<li>Transparent Processes and Documentation</li>
						</ul>
						<div>
							<h4>Need a reliable procurement partner?</h4>
							<h2>
								Contact Joshcalebwill today to streamline your supply chain.
							</h2>
							<button>
								<Link to='/who-we-are/contact-us' onClick={scrollToTop}>
									Let’s Get Started
								</Link>
							</button>
						</div>
					</Copy>
				</Styles.ChooseUs>
			</ReactLenis>
		</>
	);
};

export default Transition(Procurement);
