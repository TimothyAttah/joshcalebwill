import ParticleBackground from '../../../../components/particleBackground/ParticleBackground';
import * as Styles from './HistoryStyles';
import pix1 from '../../../../assets/newSlide6.png';
import { FadeInAlways } from '../../../../components/fadeIn/FadeInAlways';

const History = () => {
	return (
		<div>
			<ParticleBackground />
			<Styles.HistoryHero>
				<img src={pix1} alt='' />
				<Styles.BlendModeTitle>Our History</Styles.BlendModeTitle>
			</Styles.HistoryHero>
			<Styles.CultureInfo>
				<p>
					Joshcalebwill Petroluem Limited is a dynamic international energy
					company founded with a steadfast commitment to excellence in service
					delivery and consultancy within the Oil & Gas sector. Incorporated on
					September 5, 2014, the company has since grown to become an integrated
					solutions provider within the industry, offering a wide range of
					bespoke services that cover the entire value chain—from upstream
					exploration to infrastructure development and maintenance.
				</p>
			</Styles.CultureInfo>

			<Styles.HistoryContent>
				<p>
					Though the company itself was formally established in 2014, the
					combined professional experience of its management team exceeds 100
					years. This wealth of experience forms the foundation for the
					company’s expertise across various disciplines in the oil and gas
					industry.
				</p>
				<div>
					<FadeInAlways delay={0.6} direction='right'>
						<h2>Areas of Expertise and Services</h2>

						<p>
							Joshcalebwill Petroluem Limited specializes in a broad spectrum of
							services within the Oil & Gas industry, including but not limited
							to:
						</p>
					</FadeInAlways>
					<FadeInAlways delay={0.6} direction='right'>
						<ul>
							<li>exploration</li>
							<li>Haulage Services </li>
							<li>Procurement Solutions</li>
							<li>Chemical supply and treatments</li>
							<li>Pipeline construction and maintainance</li>
							<li>Gas compression services </li>
							<li>Health safety and enviromental assessment consultancy</li>
						</ul>
					</FadeInAlways>
					<FadeInAlways delay={0.6} direction='right'>
						<p>
							Our service offerings are meticulously organized into projects,
							each headed by highly experienced project managers. Operations are
							integrated and executed through a state-of-the-art environment
							that supports innovation, safety, and integrity.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.7} direction='right'>
						<h2>Commitment to Quality and Innovation</h2>

						<p>
							At the core of Joshcalebwill Petroluem Limited’s operations is a
							dedication to:
						</p>
						<p>
							Innovation: Employing advanced technologies and strategic
							solutions to meet the evolving demands of the energy sector.
						</p>
						<p>
							Safety: Prioritizing safe practices in every aspect of operations.
						</p>
						<p>Integrity: Upholding high ethical standards and transparency.</p>
						<p>
							The company adopts global best practices, processes, and systems
							to ensure projects are delivered on time and within budget. They
							utilize a combination of traditional, hybrid, and computerized
							methods in project analysis, design, and execution to maximize
							efficiency and quality.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='right'>
						<h2>Workforce and Management</h2>

						<p>
							Joshcalebwill Petroluem Limited’s greatest asset lies in its
							people. The company boasts an array of well-trained and
							experienced engineers and allied professionals. These experts
							bring considerable experience in project studies, planning,
							design, construction, supervision, and management.
						</p>
						<p>
							The management team is deeply committed to total quality control,
							continuously training staff to meet identified training needs
							aligned with the company’s corporate goals and objectives.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='right'>
						<h2>Corporate Vision</h2>

						<p>
							Joshcalebwill Petroluem Limited is not only committed to meeting
							client expectations but consistently strives to exceed them by
							delivering sustainable and value-driven outcomes at every stage of
							the project lifecycle. Their approach is rooted in core values
							that emphasize excellence, client satisfaction, and industry
							leadership.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='right'>
						<h2>Summary</h2>

						<p>
							From its incorporation in 2014 to its present status as a
							multifaceted energy company, Joshcalebwill Petroluem Limited has
							established itself as a reliable and innovative player in the Oil
							& Gas sector. With a highly experienced management team, a
							dedicated workforce, and a commitment to quality and innovation,
							the company continues to provide comprehensive solutions that
							support the growth and sustainability of the global energy
							industry.
						</p>
					</FadeInAlways>
				</div>
			</Styles.HistoryContent>
		</div>
	);
};

export default History;
