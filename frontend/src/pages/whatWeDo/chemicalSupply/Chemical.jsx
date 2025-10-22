import * as Styles from './ChemicalStyles';
import explore1 from '../../../assets/newChem1.png';
import explore2 from '../../../assets/newChem2.png';
import explore3 from '../../../assets/newChem3.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../components/header/Header';

const Chemical = () => {
	return (
		<>
			<Styles.ChemicalHero>
				<img src={explore1} alt='' />
				<Styles.BlendModeTitle>
					CHEMICAL SUPPLY AND TREATMENTS
				</Styles.BlendModeTitle>
			</Styles.ChemicalHero>
			<Styles.CultureInfo>
				<h4>Safe.Reliable.Sustainable</h4>
				<h3>
					Safe. <br /> Reliable. <br />
					Sustainable
				</h3>
				<p>
					At Joshcalebwill, we deliver high-quality chemical products and
					treatment solutions that keep industries running smoothly, safely, and
					sustainably. Our chemical supply chain is built on reliability,
					quality assurance, and tailored service, ensuring that every product
					we deliver meets the highest industry standards.
				</p>
			</Styles.CultureInfo>
			<Styles.ChemicalContainer>
				<Styles.ChemicalOptionsContainer>
					<Styles.ChemicalOptionsImg>
						<img src={explore2} alt='' />
					</Styles.ChemicalOptionsImg>
					<Styles.ChemicalOptionsInfo>
						<h4>Our Expertise</h4>
						<p>
							We specialize in sourcing, supplying, and applying a wide range of
							industrial chemicals for sectors including:
						</p>

						<ul>
							<li>
								<span>Oil & Gas</span> – corrosion inhibitors, demulsifiers,
								scale removers, and more.
							</li>
							<li>
								<span>Water Treatment</span> – flocculants, coagulants, and
								purification chemicals for potable and industrial water systems.
							</li>
							<li>
								<span>Manufacturing</span> – specialty chemicals for production
								lines, cleaning, and maintenance.
							</li>
							<li>
								<span>Agriculture</span> – fertilizers, soil conditioners, and
								crop protection solutions.
							</li>
						</ul>
					</Styles.ChemicalOptionsInfo>
				</Styles.ChemicalOptionsContainer>
				<Styles.ChemicalOptionsContainer primary>
					<Styles.ChemicalOptionsImg>
						<img src={explore3} alt='' />
					</Styles.ChemicalOptionsImg>
					<Styles.ChemicalOptionsInfo>
						<h4>Treatment Solutions</h4>
						<p>
							Beyond supplying chemicals, we provide treatment programs designed
							to optimize your processes, protect your assets, and minimize
							downtime. Our treatment services include:
						</p>
						<ul>
							<li>
								<span>Water Treatment Programs</span> – preventing scale,
								corrosion, and biofouling in cooling towers, boilers, and
								pipelines.
							</li>
							<li>
								<span> Process Optimization</span> – chemical dosing,
								monitoring, and adjustments for peak performance.
							</li>
							<li>
								<span>Environmental Compliance</span> – ensuring your chemical
								applications meet regulatory and safety standards.
							</li>
						</ul>
					</Styles.ChemicalOptionsInfo>
				</Styles.ChemicalOptionsContainer>
			</Styles.ChemicalContainer>
			<Styles.ChooseUs>
				<h4>Why Choose Our Chemical Services</h4>
				<p>
					We specialize in sourcing, supplying, and applying a wide range of
					industrial chemicals for sectors including:
				</p>

				<ul>
					<li>
						<span>Quality Assurance</span> – All products sourced from trusted,
						certified manufacturers.
					</li>
					<li>
						<span>Custom Solutions</span> – Treatments tailored to your unique
						operational challenges.
					</li>
					<li>
						<span>Technical Support</span> – Expert consultation and on-site
						service from our skilled team.
					</li>
					<li>
						<span>Sustainability Focus</span> – Eco-friendly options to reduce
						environmental impact.
					</li>
				</ul>
				<div>
					<p>
						Whether you need bulk chemical supply, specialty blends, or
						comprehensive treatment programs, Joshcalebwill is your trusted
						partner for safe, efficient, and cost-effective solutions.
					</p>
					<p>
						📞 Get in touch today to discuss your chemical supply and treatment
						needs.
					</p>
					<button>
						<Link to='/who-we-are/contact-us'>Let’s Get Started</Link>
					</button>
				</div>
			</Styles.ChooseUs>
		</>
	);
};

export default Chemical;
