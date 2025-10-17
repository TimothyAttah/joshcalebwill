import * as Styles from './LeadersStyles';
import TheTeam from './TheTeam';

const Leaders = () => {
	return (
		<Styles.Leaders>
			<Styles.LeadersHero>
				<Styles.BlendModeSubTitle>who we are</Styles.BlendModeSubTitle>
				<Styles.BlendModeTitle>leaders in energy</Styles.BlendModeTitle>
			</Styles.LeadersHero>
			<Styles.CultureInfo>
				<p>
					Building a community of leaders to advance clean energy and
					sustainable solutions.
				</p>
				<p>
					Our culture is built on the principles of responsibility, trust and
					integrity. We take profound pride in leading the future of energy.
				</p>
			</Styles.CultureInfo>
			<Styles.LeadersContainer>
				<Styles.LeadersInfoContainer>
					<h4>Our Leadership</h4>
					<h1>guided by vision and values</h1>
					{/*
					<p>
						At Joshcalebwill, our strength lies in the expertise and vision of
						our leadership team. Guided by decades of combined experience in oil
						and gas, engineering, finance, and HSE management, our board ensures
						that every decision is driven by innovation, integrity, and
						sustainable growth. Together, they provide the strategic direction
						that positions Joshcalebwill as a trusted partner in the global
						energy sector.
					</p> */}
				</Styles.LeadersInfoContainer>
				<TheTeam />
			</Styles.LeadersContainer>
		</Styles.Leaders>
	);
};

export default Leaders;
