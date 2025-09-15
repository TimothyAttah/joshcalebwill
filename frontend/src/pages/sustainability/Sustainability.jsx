import * as Styles from './SustainabilityStyles';
import pixBg from '../../assets/sus1.png';
import susPix1 from '../../assets/sus3.png';
import susPix2 from '../../assets/sus4.png';
import susPix3 from '../../assets/sus5.png';
import susPix4 from '../../assets/sus6.png';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from 'react';



const Sustainability = () => {
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
		<Styles.SustainabilityContainer>
			<Styles.SustainabilityHeroContainer>
				<Styles.SustainabilityHeroOverlay />
				<img src={pixBg} alt='' loading='lazy' />
				<h1>Sustainability</h1>
			</Styles.SustainabilityHeroContainer>

			<Styles.SustainabilityIntroSection>
				<h4>🌍 Sustainability at Joshcalebwill</h4>
				<p>
					<p>
						We place strong emphasis on creating positive
						impact in the environments where we operate. We are committed to
						building and nurturing lasting relationships with communities,
						acting as a responsible partner, and supporting initiatives that
						drive sustainable development.
					</p>
				</p>
			</Styles.SustainabilityIntroSection>

			{/* <div>
				, we place strong emphasis on creating positive impact in the
				environments where we operate.
			</div> */}

			<div>
				{/* <p>
					JOSHCALEBWILL PETROLEUM LIMITED is taking the lead with{' '}
					<span> a clear focus on sustainability.</span>
				</p> */}
			</div>

			<div></div>

			<Styles.SustainabilityListWrapper>
				<Styles.SustainabilityListItem className='item1'>
					<Styles.SustainabilityListItemImgBox className='imgBox1'>
						<Styles.SustainabilityListItemImg className='img1'>
							<img src={susPix4} alt='' />
						</Styles.SustainabilityListItemImg>
					</Styles.SustainabilityListItemImgBox>
					<Styles.SustainabilityListItemContent className='textBox1'>
						<h4>Environmental Responsibility</h4>
						<p>
							We are committed to protecting and preserving the environment by
							operating responsibly, reducing our footprint, and supporting
							initiatives that promote cleaner, safer, and more sustainable
							energy practices.
						</p>
					</Styles.SustainabilityListItemContent>
				</Styles.SustainabilityListItem>

				<Styles.SustainabilityListItem primary='true' className='item1'>
					<Styles.SustainabilityListItemImgBox className='imgBox1'>
						<Styles.SustainabilityListItemImg className='img1'>
							<img src={susPix3} alt='' />
						</Styles.SustainabilityListItemImg>
					</Styles.SustainabilityListItemImgBox>
					<Styles.SustainabilityListItemContent className='textBox1'>
						<h4> Community Engagement</h4>
						<p>
							We believe strong communities build strong industries. By
							nurturing lasting relationships with host communities, we foster
							trust, collaboration, and shared growth.
						</p>
					</Styles.SustainabilityListItemContent>
				</Styles.SustainabilityListItem>

				<Styles.SustainabilityListItem className='item1'>
					<Styles.SustainabilityListItemImgBox className='imgBox1'>
						<Styles.SustainabilityListItemImg className='img1'>
							<img src={susPix2} alt='' />
						</Styles.SustainabilityListItemImg>
					</Styles.SustainabilityListItemImgBox>
					<Styles.SustainabilityListItemContent className='textBox1'>
						<h4>Responsible Partnership</h4>
						<p>
							Acting as a responsible partner means being transparent, reliable,
							and proactive in addressing community and environmental concerns.
							We hold ourselves accountable to the highest ethical and social
							standards.
						</p>
					</Styles.SustainabilityListItemContent>
				</Styles.SustainabilityListItem>

				<Styles.SustainabilityListItem primary='true' className='item1'>
					<Styles.SustainabilityListItemImgBox className='imgBox1'>
						<Styles.SustainabilityListItemImg className='img1'>
							<img src={susPix1} alt='' />
						</Styles.SustainabilityListItemImg>
					</Styles.SustainabilityListItemImgBox>
					<Styles.SustainabilityListItemContent className='textBox1'>
						<h4> Sustainable Development</h4>
						<p>
							Our focus extends beyond today. By investing in long-term
							development initiatives—education, skills training, environmental
							projects—we contribute to lasting prosperity for people and the
							planet.
						</p>
					</Styles.SustainabilityListItemContent>
				</Styles.SustainabilityListItem>
			</Styles.SustainabilityListWrapper>
		</Styles.SustainabilityContainer>
	);
};

export default Sustainability;
