import pic1 from '../../../assets/newExp1.png';
import pic2 from '../../../assets/newExp2.png';
import pic3 from '../../../assets/newExp3.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import * as Styles from './Exploration2Styles';
import { useEffect } from 'react';

const Exploration = () => {
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
		<Styles.ExplorationContainer>
			<Styles.ExplorationHeroContainer>
				<img src={pic1} alt='' loading='lazy' />
				<h1>EXPLORATION</h1>
			</Styles.ExplorationHeroContainer>
			<Styles.ExplorationIntroSection>
				<p>
					We provide consultancy services in the area of upstream exploration
					and operations in crude oil, gas and mineral exploration and
					extraction and prospecting
				</p>
				<p>
					At Joshcalebwill, we see exploration as the foundation of every
					successful energy project. Through precision science, advanced
					technology, and a commitment to responsible practices, we help our
					clients uncover valuable resources and make confident, data-driven
					decisions.
				</p>
			</Styles.ExplorationIntroSection>
			<Styles.ExplorationListWrapper>
				<Styles.ExplorationListItem className='item1'>
					<Styles.ExplorationListItemImgBox className='imgBox1'>
						<Styles.ExplorationListItemImg className='img1'>
							<img src={pic2} alt='' />
						</Styles.ExplorationListItemImg>
					</Styles.ExplorationListItemImgBox>
					<Styles.ExplorationListItemContent className='textBox1'>
						<h4>Our Exploration Expertise</h4>
						<p>
							We provide comprehensive exploration services for the oil, gas,
							and energy sectors, including:
						</p>
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
								<span>Reservoir Analysis</span> – determining resource quality,
								quantity, and commercial viability.
							</li>
							<li>
								<span>Environmental Assessments</span> – ensuring projects meet
								regulatory and sustainability requirements.
							</li>
						</ul>
					</Styles.ExplorationListItemContent>
				</Styles.ExplorationListItem>
				<Styles.ExplorationListItem primary='true' className='item1'>
					<Styles.ExplorationListItemImgBox className='imgBox1'>
						<Styles.ExplorationListItemImg className='img1'>
							<img src={pic3} alt='' />
						</Styles.ExplorationListItemImg>
					</Styles.ExplorationListItemImgBox>
					<Styles.ExplorationListItemContent className='textBox1'>
						<h4> Our Approach</h4>
						<p>
							Every project begins with a clear understanding of the terrain and
							its potential. Our multidisciplinary team of geologists,
							geophysicists, and engineers uses cutting-edge tools and
							techniques to deliver accurate, actionable insights — all while
							minimizing environmental impact and operational risk.
						</p>
					</Styles.ExplorationListItemContent>
				</Styles.ExplorationListItem>
			</Styles.ExplorationListWrapper>
			<Styles.ExplorationReasonWrapper>
				<h4>Why Choose Joshcalebwill?</h4>
				<ul>
					<li>
						<span>Technical Excellence</span> – proven expertise in complex
						exploration environments.
					</li>
					<li>
						<span>Innovative Tools</span> – advanced data analysis and mapping
						technologies.
					</li>
					<li>
						<span>Responsible Operations</span> – environmental and community
						considerations at every stage.
					</li>
					<li>
						<span>Seamless Integration </span>– exploration strategies aligned
						with development and production goals.
					</li>
				</ul>
				<p>
					From the first seismic study to the final feasibility report,
					Joshcalebwill is your trusted partner in finding, understanding, and
					unlocking the potential of energy resources.
				</p>
				<p>📩 Contact us today to begin your next exploration journey.</p>
			</Styles.ExplorationReasonWrapper>
		</Styles.ExplorationContainer>
	);
};

export default Exploration;
