import * as Styles from './SustainabilityStyles';
import pixBg from '../../assets/sus1.png';
import susPix1 from '../../assets/sus2.png';
import susEnergyPix1 from '../../assets/susEnergy1.png';
import susEnergyPix2 from '../../assets/susEnergy2.png';
import susEnergyPix3 from '../../assets/susEnergy3.png';
import susEnergyPix4 from '../../assets/susEnergy4.png';
import susEnergyPix5 from '../../assets/susEnergy5.png';

const Sustainability = () => {
	return (
		<Styles.SustainabilityContainer>
			<Styles.SustainabilityHeroContainer>
				<Styles.SustainabilityHeroOverlay />
				<img src={pixBg} alt='' loading='lazy' />
				<h1>Sustainability</h1>
			</Styles.SustainabilityHeroContainer>
			<Styles.SustainabilityContentsContainer>
				<Styles.SustainabilityFirstSection>
					<Styles.SustainabilityFirstSectionLeft>
						<p>
							JOSHCALEBWILL PETROLEUM LIMITED is taking the lead with{' '}
							<span> a clear focus on sustainability.</span>
						</p>
						<div>
							<img src={susPix1} alt='' loading='lazy' />
						</div>
					</Styles.SustainabilityFirstSectionLeft>
					<Styles.SustainabilityFirstSectionRight>
						<p>
							Our first step in this direction as priority is, to determine our
							emission baseline through the development of our Environmental,
							Social and Governance (ESG) framework, as well as the conduct of
							our company-wide Greenhouse Gases inventory.
						</p>
						<p>
							The implementation of our ESG framework would result into
							appropriate reporting of same in our annual reports/financial
							statements.
						</p>
					</Styles.SustainabilityFirstSectionRight>
				</Styles.SustainabilityFirstSection>
				<Styles.SustainabilitySecondSection>
					<Styles.SustainabilitySecondSectionDesc>
						<p>
							Our energy transition plan will be designed to ensure a low carbon
							footprint across our businesses through New Energy using various
							means
						</p>
					</Styles.SustainabilitySecondSectionDesc>

					<Styles.SustainabilitySecondSectionLists>
						<Styles.SustainabilitySecondSectionListItem>
							<Styles.SustainabilitySecondSectionListItemImg>
								<img src={susEnergyPix1} alt='' loading='lazy' />
							</Styles.SustainabilitySecondSectionListItemImg>
							<p>Renewables</p>
						</Styles.SustainabilitySecondSectionListItem>

						<Styles.SustainabilitySecondSectionListItem>
							<Styles.SustainabilitySecondSectionListItemImg>
								<img src={susEnergyPix2} alt='' loading='lazy' />
							</Styles.SustainabilitySecondSectionListItemImg>
							<p>
								Carbon neutral <br /> fuels and gases
							</p>
						</Styles.SustainabilitySecondSectionListItem>

						<Styles.SustainabilitySecondSectionListItem>
							<Styles.SustainabilitySecondSectionListItemImg>
								<img src={susEnergyPix3} alt='' loading='lazy' />
							</Styles.SustainabilitySecondSectionListItemImg>
							<p>Energy efficiency</p>
						</Styles.SustainabilitySecondSectionListItem>
					</Styles.SustainabilitySecondSectionLists>
				</Styles.SustainabilitySecondSection>
				<Styles.SustainabilityThirdSection>
					<Styles.SustainabilityThirdSectionList>
						<Styles.SustainabilityThirdSectionImg>
							<img src={susEnergyPix4} alt='' />
						</Styles.SustainabilityThirdSectionImg>
						<Styles.SustainabilityThirdSectionDesc>
							<p>
								In this rapidly changing environment, we have committed ourself
								to operating in a sustainable manner - as a responsible business
								entity - ensuring that our activities continue to be carried out
								in line with the principles of economic, social and
								environmental development.
							</p>
						</Styles.SustainabilityThirdSectionDesc>
					</Styles.SustainabilityThirdSectionList>

					<Styles.SustainabilityThirdSectionList primary='true'>
						<Styles.SustainabilityThirdSectionImg>
							<img src={susEnergyPix5} alt='' />
						</Styles.SustainabilityThirdSectionImg>
						<Styles.SustainabilityThirdSectionDesc>
							<p>
								We will ensure the provision of affordable, clean and efficient
								energy options to our stakeholders comprising of over 200
								million Nigerians, under a just and equitable transition. As
								such, our strategies for decarbonization and net zero emissions
								will be driven by the increased role of gas in our portfolio.
							</p>
						</Styles.SustainabilityThirdSectionDesc>
					</Styles.SustainabilityThirdSectionList>
				</Styles.SustainabilityThirdSection>
				<Styles.SustainabilityFourthSection>
					<h4>Guiding Principles</h4>
					<Styles.SustainabilityFourthLists>
						<Styles.SustainabilityFourthListItem>
							<span></span>
							<p>
								Our guiding principles are the United Nations Sustainable
								Development Goals, particularly SDG7 (to ensure access to
								affordable, reliable, sustainable and modern energy for all);
								and our commitments to implementation of Nigeria’s Nationally
								Determined Contribution under the UNFCCC Paris Accord (reduce
								emissions by 20% unconditionally and 45% conditionally by 2030,
								end gas flaring by 2030 and ensure 30% energy efficiency by
								2030).
							</p>
						</Styles.SustainabilityFourthListItem>
						<Styles.SustainabilityFourthListItem>
							<span></span>
							<p>
								Other principles underpinning our sustainability include the PIA
								Act which provides for NNPC Ltd to engage in renewable energy
								business; and the Nigerian Climate Act for mainstreaming climate
								change actions to achieve low emissions, inclusive green growth
								and sustainable economic development.
							</p>
							<button>contact us</button>
						</Styles.SustainabilityFourthListItem>
					</Styles.SustainabilityFourthLists>
				</Styles.SustainabilityFourthSection>
			</Styles.SustainabilityContentsContainer>
		</Styles.SustainabilityContainer>
	);
};

export default Sustainability;
