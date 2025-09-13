import pic1 from '../../../assets/newProc1.png';
import pic2 from '../../../assets/procurement5.png';
import pic3 from '../../../assets/newProc2.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import * as Styles from './Procurement2Styles';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Procurement2 = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.imgBox1 .img1',
			{
				x: -300,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.item1',
					start: 200,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);

		gsap.fromTo(
			'.textBox1',
			{
				x: 300,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: '.item1',
					start: 200,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);
	});
	return (
		<Styles.ProcurementContainer>
			<Styles.ProcurementHeroContainer>
				<img src={pic1} alt='' loading='lazy' />
				<h1>Procurement Solutions</h1>
				{/*  */}
			</Styles.ProcurementHeroContainer>
			<Styles.ProcurementIntroSection>
				<h4>Seamless sourcing. Trusted delivery. Cost-effective results.</h4>
				<h3>
					Seamless sourcing. <br /> Trusted delivery. <br /> Cost-effective
					results.
				</h3>

				<p>
					At Joshcalebwill, we streamline the procurement process for oil & gas
					and industrial operations. From sourcing critical equipment to
					delivering specialized materials, we ensure every step is reliable,
					transparent, and cost-efficient.
				</p>
			</Styles.ProcurementIntroSection>
			<Styles.ProcurementListWrapper>
				<Styles.ProcurementListItem className='item1'>
					<Styles.ProcurementListItemImgBox className='imgBox1'>
						<Styles.ProcurementListItemImg className='img1'>
							<img src={pic2} alt='' />
						</Styles.ProcurementListItemImg>
					</Styles.ProcurementListItemImgBox>
					<Styles.ProcurementListItemContent className='textBox1'>
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
					</Styles.ProcurementListItemContent>
				</Styles.ProcurementListItem>
				<Styles.ProcurementListItem primary='true' className='item1'>
					<Styles.ProcurementListItemImgBox className='imgBox1'>
						<Styles.ProcurementListItemImg className='img1'>
							<img src={pic3} alt='' />
						</Styles.ProcurementListItemImg>
					</Styles.ProcurementListItemImgBox>
					<Styles.ProcurementListItemContent className='textBox1'>
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
					</Styles.ProcurementListItemContent>
				</Styles.ProcurementListItem>
			</Styles.ProcurementListWrapper>
			<Styles.ProcurementReasonWrapper>
				<h4>Why Choose Our Procurement Services</h4>
				<ul>
					<li>Trusted Global Supplier Network</li>
					<li>Competitive Pricing & Cost Savings</li>
					<li>Quality Assurance with Compliance Standards</li>
					<li>Transparent Processes and Documentation</li>
				</ul>
				<div>
					<h4>Need a reliable procurement partner?</h4>
					<h1>Contact Joshcalebwill today to streamline your supply chain.</h1>
					<button>
						<Link to='/contact'>Let’s Get Started</Link>
					</button>
				</div>
			</Styles.ProcurementReasonWrapper>
		</Styles.ProcurementContainer>
	);
};

export default Procurement2;
