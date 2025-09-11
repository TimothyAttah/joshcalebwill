import * as Styles from './HistoryStyles';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';
import { FadeInCommon } from '../../../components/fadeIn/FadeInCommon';

const History = () => {
	return (
		<>
			<Styles.HistoryContainer>
				<FadeInCommon delay={0.2} direction='down'>
					<Styles.HistoryTitleBox>
						<FadeInAlways delay={0.3} direction='right'>
							<small>about us</small>
						</FadeInAlways>
						<FadeInAlways delay={0.4} direction='right'>
							<h2>our history</h2>
						</FadeInAlways>
					</Styles.HistoryTitleBox>
				</FadeInCommon>
				<Styles.HistoryContentContainer>
					<FadeInAlways delay={0.4} direction='right'>
						<p>
							JOSHCALEB WILL PETROLEUM LIMITED is a dynamic international energy
							company focused on delivering a strong commitment to excellence in
							service delivery and consistently help the Oil & Gas sector
							achieve success across the entire production and value chain from
							the upstream to the downstream, midstream and the gas sub-sector
							of the oil and gas industry. <br /> <br /> Our services include
							upstream and downstream production, instrumentation, installation,
							construction and maintenance. Our main focus is on the oil and gas
							industry, energy, chemical supply and treatments, gas compression,
							engineering, pipeline and construction services consultancy, among
							others. We are driven by innovation, strong ethical standard and
							quality service using the latest technologies and innovations in
							delivering optimum service excellence to our clients. With our
							experienced professionals and strategic global partners,
							JOSHCALEBWIL PETROLEUM LIMITED is committed to client satisfaction
							and quality performance which guarantees our clients’ confidence
							in the oil and gas business every step of the way.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.5} direction='right'>
						<p>
							Though the Company was incorporated on the 4th of September 2014,
							it commenced operation in 2019. The wealth of the Management team
							and staff of JOSHCALEBWIL who offer value driven services to
							clients has made us stand out in our approach and expertise. We
							offer our clients a wide range of quality services in the oil and
							gas industry. Our team of highly skilled professionals and
							engineers ensures that our clients' needs and satisfaction are
							met. We approach all our operations and executions one client at a
							time.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.6} direction='right'>
						<p>
							JoshCalebWil Petroleum Limited has an array of well experienced
							and reputable engineers and allied professionals who combine to
							bring their considerable talents to engineering studies, planning,
							design, procurement and project management to bear on all our
							services.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.7} direction='right'>
						<p>
							We adopt best practices, processes, systems and standards in our
							Project execution to ensure that we deliver Project Scope on time
							and within Budget. We use traditional, hybrid and computerized
							methods in Feasibility Analysis, Design and
							Execution/Construction. Our innovative approach to Project
							execution derives from our dedication to continually strive
							towards excellence and surpassing Client’s expectations as
							encapsulated in our Core Values.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='right'>
						<p>
							JoshCalebWil Petroleum Limited was incorporated with Corporate
							Affairs Commission (CAC) to carry on business as an Oil & Gas
							Company. Our capacity resides in our staff. Each staff member is
							highly skilled, talented, dedicated and qualified by education,
							training and experience. Our management is highly committed to
							total Quality Control and provides same by continuously training
							its staff in their area of identified training needs that align
							with the Corporate goals and objectives.
						</p>
					</FadeInAlways>
				</Styles.HistoryContentContainer>
			</Styles.HistoryContainer>
		</>
	);
};

export default History;
