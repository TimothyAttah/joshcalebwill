import * as Styles from './LubricantsStyles';
import lubPix1 from '../../../assets/lub2.png'
import lubPix2 from '../../../assets/lub4.png';
import lubPix3 from '../../../assets/lub3.png';


const Lubricants = () => {
  return (
		<Styles.LubricantsContainer>
			<Styles.LubricantsTitle>
				<h4>energy</h4>
				<h1>lubricants and base oils</h1>
				<p>
					Joshcalebwill provides finished lubricants and premium base oils to
					commercial, consumer, industrial and marine customers worldwide.
				</p>
			</Styles.LubricantsTitle>
			<Styles.LubricantsTitleImg>
				<img src={lubPix1} alt='' />
			</Styles.LubricantsTitleImg>
			<Styles.LubricantsTitle primary='true'>
				<h2>a global line of finished lubricants</h2>
				<p>
					Our line of solutions–products– are helping customers across multiple
					industries. Sold worldwide under our Joshcalebwill® brands–these
					premium products can help improve or maintain fuel economy.
				</p>
			</Styles.LubricantsTitle>
			<Styles.LubricantsGallery></Styles.LubricantsGallery>
			<Styles.LubricantsOptionsWrapper>
				<Styles.LubricantsOptions>
					<Styles.LubricantsOptionsImg>
						<img src={lubPix2} alt='' />
					</Styles.LubricantsOptionsImg>
					<Styles.LubricantsOptionsInfo>
						<h4>Joshcalebwill premium lubricants</h4>
						<p>
							We’re dedicated to developing innovative solutions for consumers
							in the future. From construction and mining to power generation
							and gas compression, we have solutions for many industries.
						</p>
					</Styles.LubricantsOptionsInfo>
				</Styles.LubricantsOptions>
				<Styles.LubricantsOptions primary='true'>
					<Styles.LubricantsOptionsImg>
						<img src={lubPix3} alt='' />
					</Styles.LubricantsOptionsImg>
					<Styles.LubricantsOptionsInfo>
						<h4>Joshcalebwill marine lubricants</h4>
						<p>
							We provide a wide range of marine lubricants solutions to fleets
							globally, including reliable products, user-friendly designed
							services and innovative technology.
						</p>
					</Styles.LubricantsOptionsInfo>
				</Styles.LubricantsOptions>
			</Styles.LubricantsOptionsWrapper>

			<Styles.LubricantsInfo>
				<h2>a leading global producer of base oils</h2>
				<p>
					Formulated to meet some of the world's toughest industry standards.
				</p>
				<small>
					Joshcalenwill base and process oils are characterized by their performance
					and color stability.
				</small>
			</Styles.LubricantsInfo>
		</Styles.LubricantsContainer>
	);
};

export default Lubricants;
