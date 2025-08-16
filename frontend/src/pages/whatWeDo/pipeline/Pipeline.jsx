import pix2 from '../../../assets/pipe3.jpg';
import pix3 from '../../../assets/pipe4.jpg';
import pix4 from '../../../assets/pipe5.jpg';
import * as Styles from './PipelineStyles'

const Pipeline = () => {
	return (
		<div>
			<Styles.PipeHeroSection>
				<div>
					<h1>PIPELINE CONSTRUCTION AND MAINTENANCE:</h1>
					<p>
						We provide corrosion-free oil, water and gas pipeline construction,
						maintenance, fabrications and procurement services. We do Well-head
						Valves maintenance services.
					</p>
				</div>
			</Styles.PipeHeroSection>
			<Styles.PipeInfoBox>
				<h2>Pipeline Construction and Maintenance</h2>
				<p>
					At Joshcalebwill, we specialize in delivering safe, reliable, and
					efficient pipeline construction and maintenance services. From initial
					design to long-term operational support, our team ensures that every
					project meets the highest industry standards while prioritizing
					safety, sustainability, and cost-effectiveness.
				</p>
			</Styles.PipeInfoBox>
			<Styles.PipeIntroSection>
				<Styles.PipeIntroSectionText>
					<h4>Our Services</h4>
					<ul>
						<li>
							<span>Pipeline Design & Engineering</span> – providing customized
							pipeline solutions that meet technical, environmental, and
							operational requirements.
						</li>
						<li>
							<span>Construction & Installation</span> – delivering end-to-end
							construction services with precision, using advanced technologies
							and experienced field teams.
						</li>
						<li>
							<span>Pipeline Integrity Management</span> – conducting
							inspections, testing, and monitoring to ensure pipeline safety and
							compliance with industry regulations.
						</li>
						<li>
							<span>Repair & Rehabilitation</span> – extending pipeline lifespan
							through timely repairs, corrosion control, and modern
							rehabilitation methods.
						</li>
						<li>
							<span>Preventive Maintenance Programs</span> – implementing
							proactive strategies to reduce downtime, enhance reliability, and
							minimize risks.
						</li>
					</ul>
				</Styles.PipeIntroSectionText>
				<Styles.PipeIntroSectionImg>
					<img src={pix2} alt='' />
				</Styles.PipeIntroSectionImg>
			</Styles.PipeIntroSection>
			<Styles.PipeIntroSection primary>
				<Styles.PipeIntroSectionText>
					<h4>Why Pipeline Integrity Matters</h4>
					<ul>
						<li>
							Ensures uninterrupted product flow and operational reliability.
						</li>
						<li>
							Protects people, the environment, and surrounding communities.
						</li>
						<li>Minimizes costly downtime, leaks, and accidents.</li>
						<li>Supports sustainable energy infrastructure for the future.</li>
					</ul>
				</Styles.PipeIntroSectionText>
				<Styles.PipeIntroSectionImg>
					<img src={pix3} alt='' />
				</Styles.PipeIntroSectionImg>
			</Styles.PipeIntroSection>
			<Styles.PipeTechWrapper>
				<h4>Why Choose Joshcalebwill</h4>
				<ul>
					<li>Proven expertise in pipeline engineering and construction.</li>
					<li>
						Commitment to safety, environmental protection, and regulatory
						compliance.
					</li>
					<li>Skilled workforce equipped with advanced technology.</li>
					<li>
						Tailored solutions designed for efficiency and long-term value.
					</li>
				</ul>
				<img src={pix4} alt='' />
			</Styles.PipeTechWrapper>
			<Styles.PipeInfoBox>
				<p>
					With Joshcalebwill, you gain a trusted partner for your pipeline needs
					— from groundbreaking construction to ongoing maintenance and
					monitoring. Our focus is not only on building pipelines, but also on
					ensuring their long-term integrity and sustainability.
				</p>
			</Styles.PipeInfoBox>
			<Styles.PipeHeroSection primary>
				<div>
					<h2>
						Partner with us to build and maintain pipelines that power the
						future.
					</h2>
					<h1>Contact Joshcalebwill today.</h1>
				</div>
			</Styles.PipeHeroSection>
		</div>
	);
};

export default Pipeline;
