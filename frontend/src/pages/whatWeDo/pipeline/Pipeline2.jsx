import pic1 from '../../../assets/pipe2.jpg';
import pic2 from '../../../assets/pipe3.jpg';
import pic3 from '../../../assets/pipe5.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaCheckCircle } from 'react-icons/fa';

import * as Styles from './Pipeline2Styles';
import { useEffect } from 'react';

const Pipeline2 = () => {
	return (
		<Styles.PipelineContainer>
			<Styles.PipelineHeroContainer>
				<Styles.PipelineHeroOverlay />
				<img src={pic1} alt='' loading='lazy' />
				<h1>PIPELINE CONSTRUCTION AND MAINTENANCE</h1>
			</Styles.PipelineHeroContainer>
			<Styles.PipelineIntroSection>
				<p>
					We provide corrosion-free oil, water and gas pipeline construction,
					maintenance, fabrications and procurement services. We do Well-head
					Valves maintenance services.
				</p>
				<p>
					At Joshcalebwill, we specialize in delivering safe, reliable, and
					efficient pipeline construction and maintenance services. From initial
					design to long-term operational support, our team ensures that every
					project meets the highest industry standards while prioritizing
					safety, sustainability, and cost-effectiveness.
				</p>
			</Styles.PipelineIntroSection>
			<Styles.PipelineListWrapper>
				<Styles.PipelineListItem className='item1'>
					<Styles.PipelineListItemImgBox className='imgBox1'>
						<Styles.PipelineListItemImg className='img1'>
							<img src={pic2} alt='' />
						</Styles.PipelineListItemImg>
					</Styles.PipelineListItemImgBox>
					<Styles.PipelineListItemContent className='textBox1'>
						<h4>Our Services</h4>
						<ul>
							<li>
								<span>Pipeline Design & Engineering</span> – providing
								customized pipeline solutions that meet technical,
								environmental, and operational requirements.
							</li>
							<li>
								<span>Construction & Installation</span> – delivering end-to-end
								construction services with precision, using advanced
								technologies and experienced field teams.
							</li>
							<li>
								<span>Pipeline Integrity Management</span> – conducting
								inspections, testing, and monitoring to ensure pipeline safety
								and compliance with industry regulations.
							</li>
							<li>
								<span>Repair & Rehabilitation</span> – extending pipeline
								lifespan through timely repairs, corrosion control, and modern
								rehabilitation methods.
							</li>
							<li>
								<span>Preventive Maintenance Programs</span> – implementing
								proactive strategies to reduce downtime, enhance reliability,
								and minimize risks.
							</li>
						</ul>
					</Styles.PipelineListItemContent>
				</Styles.PipelineListItem>
			</Styles.PipelineListWrapper>
			<Styles.PipelineItemContainer>
				<h2>Why Pipeline Integrity Matters</h2>
				<Styles.PipelineItemImg>
					<img src={pic3} alt='' loading='lazy' />
				</Styles.PipelineItemImg>
				<Styles.PipelineItemContent>
					<p>
						We integrate advanced monitoring systems that track compressor
						performance in real-time, improving operational efficiency and
						reducing risks. Our systems are designed with energy efficiency in
						mind, cutting down on fuel use and emissions while maintaining
						reliability even under demanding conditions.
					</p>
				</Styles.PipelineItemContent>
			</Styles.PipelineItemContainer>
			<Styles.PipelineReasonWrapper>
				<h4>Why Choose Joshcalebwill</h4>
				<p>
					With Joshcalebwill, you gain a trusted partner for your pipeline needs
					— from groundbreaking construction to ongoing maintenance and
					monitoring. Our focus is not only on building pipelines, but also on
					ensuring their long-term integrity and sustainability with:
				</p>
				<ul>
					<li>
						<span>
							<FaCheckCircle />
						</span>
						Proven expertise in pipeline engineering and construction.
					</li>
					<li>
						<span>
							<FaCheckCircle />
						</span>
						Commitment to safety, environmental protection, and regulatory
						compliance.
					</li>
					<li>
						<span>
							<FaCheckCircle />
						</span>
						Skilled workforce equipped with advanced technology.
					</li>
					<li>
						<span>
							<FaCheckCircle />
						</span>
						Tailored solutions designed for efficiency and long-term value.
					</li>
				</ul>

				<div>
					<h2>
						Partner with us to build and maintain pipelines that power the
						future.
					</h2>
					<h1>Contact Joshcalebwill today.</h1>
				</div>
			</Styles.PipelineReasonWrapper>
		</Styles.PipelineContainer>
	);
};

export default Pipeline2;
