import pic1 from '../../../assets/newChem1.png';
import pic2 from '../../../assets/newChem2.png';
import pic3 from '../../../assets/newChem3.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


import * as Styles from './ChemicalStyles';
import { useEffect } from 'react';

const Chemical = () => {
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
})
	return (
		<Styles.ChemicalContainer>
			<Styles.ChemicalHeroContainer>
				<img src={pic1} alt='' loading='lazy' />
				<h1>CHEMICAL SUPPLY AND TREATMENTS</h1>
				{/*  */}
			</Styles.ChemicalHeroContainer>
			<Styles.ChemicalIntroSection>
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
			</Styles.ChemicalIntroSection>
			<Styles.ChemicalListWrapper>
				<Styles.ChemicalListItem className='item1'>
					<Styles.ChemicalListItemImgBox className='imgBox1'>
						<Styles.ChemicalListItemImg className='img1'>
							<img src={pic2} alt='' />
						</Styles.ChemicalListItemImg>
					</Styles.ChemicalListItemImgBox>
					<Styles.ChemicalListItemContent className='textBox1'>
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
					</Styles.ChemicalListItemContent>
				</Styles.ChemicalListItem>
				<Styles.ChemicalListItem primary='true' className='item1'>
					<Styles.ChemicalListItemImgBox className='imgBox1'>
						<Styles.ChemicalListItemImg className='img1'>
							<img src={pic3} alt='' />
						</Styles.ChemicalListItemImg>
					</Styles.ChemicalListItemImgBox>
					<Styles.ChemicalListItemContent className='textBox1'>
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
					</Styles.ChemicalListItemContent>
				</Styles.ChemicalListItem>
			</Styles.ChemicalListWrapper>
			<Styles.ChemicalReasonWrapper>
				<h4> Why Choose Joshcalebwill?</h4>
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
				<p>
					Whether you need bulk chemical supply, specialty blends, or
					comprehensive treatment programs, Joshcalebwill is your trusted
					partner for safe, efficient, and cost-effective solutions.
				</p>
				<p>
					📞 Get in touch today to discuss your chemical supply and treatment
					needs.
				</p>
			</Styles.ChemicalReasonWrapper>
		</Styles.ChemicalContainer>
	);
};

export default Chemical;
