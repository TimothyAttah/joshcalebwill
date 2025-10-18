import * as Styles from './CommunitiesStyles';
import com1 from '../../../assets/com9.png';
import com2 from '../../../assets/com2.png';
import com3 from '../../../assets/com3.png';
import com4 from '../../../assets/com4.png';
import com5 from '../../../assets/com6.png';
import com6 from '../../../assets/com7.png';


const Communities = () => {
	return (
		<div>
			<Styles.CommunitiesHero>
				<img src={com1} alt='' />
				<Styles.BlendModeTitle>Cummunities</Styles.BlendModeTitle>
			</Styles.CommunitiesHero>
			<Styles.CultureInfo>
				{/* <h4>🌍 Sustainability at Joshcalebwill</h4> */}
				<p>
					At Joshcalebwill, we believe our success is deeply connected to the
					wellbeing of the communities around us. We are committed to meaningful
					engagement, shared growth, and initiatives that empower people —
					ensuring that our presence leaves a lasting, positive impact wherever
					we operate.
				</p>
			</Styles.CultureInfo>

			<Styles.ApproachContainer>
				<Styles.ApproachTitle>
					<h2>our approach</h2>
					{/* <div>
						<img src={com2} alt='' />
					</div> */}
					<p>
						Through collaboration, innovation, and respect, we partner with
						local communities to address real challenges — from education and
						healthcare to skills development and environmental stewardship.
					</p>
					<p>
						We work to strengthen local capacities, support livelihoods, and
						promote inclusive opportunities that benefit both present and future
						generations.
					</p>
				</Styles.ApproachTitle>
				<Styles.ApproachOptionsContainer>
					<Styles.ApproachOptions>
						{/* <img src={com5} alt='' /> */}
						<h4>Education & Capacity Building</h4>
						<p>
							Supporting learning programs, vocational training, and youth
							mentorship that equip individuals with skills for tomorrow’s
							industries.
						</p>
					</Styles.ApproachOptions>
					<Styles.ApproachOptions>
						{/* <img src={com4} alt='' /> */}
						<h4>Health & Wellbeing</h4>
						<p>
							Promoting healthcare access, awareness campaigns, and safe living
							conditions in the communities we serve.
						</p>
					</Styles.ApproachOptions>
					<Styles.ApproachOptions>
						{/* <img src={com3} alt='' /> */}
						<h4>Economic Empowerment</h4>
						<p>
							Partnering with local entrepreneurs and small businesses to create
							sustainable opportunities and shared prosperity.
						</p>
					</Styles.ApproachOptions>
				</Styles.ApproachOptionsContainer>
			</Styles.ApproachContainer>

			<Styles.ApproachTitle second>
				<h2>Our Commitment</h2>
				<div>
					<img src={com6} alt='' />
				</div>
				<p>
					Through collaboration, innovation, and respect, we partner with local
					communities to address real challenges — from education and healthcare
					to skills development and environmental stewardship.
				</p>
				<p>
					We work to strengthen local capacities, support livelihoods, and
					promote inclusive opportunities that benefit both present and future
					generations.
				</p>
			</Styles.ApproachTitle>
		</div>
	);
};

export default Communities;
