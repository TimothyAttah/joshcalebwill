import * as Styles from './CultureStyles'
import LastestSlider from './CultureSlider';
import cultPix1 from '../../../../assets/sus4.png';
import cultPix2 from '../../../../assets/sus3.png';
import cultPix3 from '../../../../assets/cul4.png';
import Copy from '../../../../components/copyText/CopyText';
import {ReactLenis} from 'lenis/react'


const Culture = () => {
  return (
		<div>
			<ReactLenis root>
				<LastestSlider />
				<Styles.Culture>
					<Styles.CultureInfo>
						<Copy delay={0.5}>
							<p>
								We work hard to provide energy that helps improve the lives of
								people around the world. The Operational Excellence Management
								System is a core part of how we do it. We promote a culture that
								values a diversity of perspectives, productive dialogue and
								teaming that help us deliver the future of energy.
							</p>
						</Copy>
					</Styles.CultureInfo>

					<Styles.CultureOptions>
						<Styles.CultureOptionsList>
							<Styles.CultureOptionsListImg>
								<img src={cultPix1} alt='' />
							</Styles.CultureOptionsListImg>
							<Styles.CultureOptionsListInfo first>
								<Copy delay={0.5}>
									<h4>our way is the Joshcalebwill's way</h4>
									<p>
										We’re a global team united by what we believe. We believe
										human ingenuity has the power to solve any challenge and
										overcome any obstacle. Our vision and purpose drives how we
										work. And together we’re working to advance a lower carbon
										future.
									</p>
								</Copy>
							</Styles.CultureOptionsListInfo>
						</Styles.CultureOptionsList>

						<Styles.CultureOptionsList second>
							<Styles.CultureOptionsListImg>
								<img src={cultPix2} alt='' />
							</Styles.CultureOptionsListImg>
							<Styles.CultureOptionsListInfo second>
								<Copy delay={0.5}>
									<h4>we strive for excellence in everything we do</h4>
									<p>
										Operational Excellence (OE) aims to put into action our
										Joshcalebwill Way, a set of values that helps protect people
										and the environment and helps us achieve Joshcalebwill’s
										vision to be the global energy company most admired for its
										people, partnership and performance.
									</p>
								</Copy>
							</Styles.CultureOptionsListInfo>
						</Styles.CultureOptionsList>

						<Styles.CultureOptionsList>
							<Styles.CultureOptionsListImg>
								<img src={cultPix3} alt='' />
							</Styles.CultureOptionsListImg>
							<Styles.CultureOptionsListInfo third>
								<Copy delay={0.5}>
									<h4>diversity and inclusion make us stronger</h4>
									<p>
										We promote a culture that values different perspectives,
										productive dialogue and teaming. We also promote resources
										for good health, well-being and work-life balance. We
										develop leaders to sustain and strengthen our culture for
										the future.
									</p>
								</Copy>
							</Styles.CultureOptionsListInfo>
						</Styles.CultureOptionsList>
					</Styles.CultureOptions>
				</Styles.Culture>
			</ReactLenis>
		</div>
	);
}

export default Culture
