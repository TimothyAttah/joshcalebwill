import * as Styles from './ProcurementStyles';
import explore1 from '../../../assets/pro2.png';
import explore2 from '../../../assets/pro4.png';
import explore3 from '../../../assets/pro5.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';



const Procurement = () => {
	return (
		<>
			<Styles.ProcurementHero>
				<img src={explore1} alt='' />
				<Styles.BlendModeTitle>Procurement</Styles.BlendModeTitle>
			</Styles.ProcurementHero>
			<Styles.CultureInfo>
				<p>Seamless sourcing. Trusted delivery. Cost-effective results.</p>
			</Styles.CultureInfo>
			<Styles.ProcurementContainer>
				<h2>
					At Joshcalebwill, we streamline the procurement process for oil & gas
					and industrial operations. From sourcing critical equipment to
					delivering specialized materials, we ensure every step is reliable,
					transparent, and cost-efficient.
				</h2>

				<Styles.ProcurementOptionsContainer>
					<Styles.ProcurementOptionsImg>
						<img src={explore2} alt='' />
					</Styles.ProcurementOptionsImg>
					<Styles.ProcurementOptionsInfo>
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
								<span>Logistics & Delivery</span> – global reach with dependable
								timelines.
							</li>
							<li>
								<span>Custom Sourcing</span> – tailored solutions for unique
								project needs.
							</li>
						</ul>
					</Styles.ProcurementOptionsInfo>
				</Styles.ProcurementOptionsContainer>
				<Styles.ProcurementOptionsContainer primary>
					<Styles.ProcurementOptionsImg>
						<img src={explore3} alt='' />
					</Styles.ProcurementOptionsImg>
					<Styles.ProcurementOptionsInfo>
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
					</Styles.ProcurementOptionsInfo>
				</Styles.ProcurementOptionsContainer>
			</Styles.ProcurementContainer>
			<Styles.ChooseUs>
				<h4>Why Choose Our Procurement Services</h4>
				<ul>
					<li>Trusted Global Supplier Network</li>
					<li>Competitive Pricing & Cost Savings</li>
					<li>Quality Assurance with Compliance Standards</li>
					<li>Transparent Processes and Documentation</li>
				</ul>
				<div>
					<h4>Need a reliable procurement partner?</h4>
					<h2>Contact Joshcalebwill today to streamline your supply chain.</h2>
					<button>
						<Link to='/who-we-are/contact-us'>Let’s Get Started</Link>
					</button>
				</div>
			</Styles.ChooseUs>
		</>
	);
}

export default Procurement
