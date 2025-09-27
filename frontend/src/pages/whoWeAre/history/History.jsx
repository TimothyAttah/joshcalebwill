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
							JOSHCALEBWILL PETROLEUM LIMITED is dynamic international energy{' '}
						</p>
						{/* <p>
							JOSHCALEBWILL PETROLEUM LIMITED is a dynamic international energy
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
							JOSHCALEBWILL PETROLEUM LIMITED is committed to client
							satisfaction and quality performance which guarantees our clients’
							confidence in the oil and gas business every step of the way.
						</p> */}
						<p>
							JOSHCALEBWILL PETROLEUM LIMITED is dynamic international energy
							company founded on a strong commitment to excellence in service
							delivery and consultancy within the Oil & Gas sector. We operate
							as an integrated solutions provider, offering bespoke services
							that span the full spectrum of the industry-from upstream
							explorarion to infrastructure development and maintainance. Our
							expertise covers oil and gas operations, pipeline construction,
							petroluem engineering, equipment manufactoring, and environmental
							consultancy, among others. Driven by innovation, safety, and
							integrity, we are dedicated to meeting the complex demands of the
							energy landscape through strategic solutions, advanced
							technologies, and a deep understanding of industry standards. At
							JOSHCALEBWILL PETROLEUM LIMITED, we don't just meet
							expectations-we exceed them, ensuring our clients recieve
							sustainable and value-driven outcomes every step of the way.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.5} direction='right'>
						{/* <p>
							Though the Company was incorporated on the 5th of September, 2014,
							it commenced operation in 2019. The wealth of the Management team
							and staff of JOSHCALEBWILL who offer value driven services to
							clients has made us stand out in our approach and expertise. We
							offer our clients a wide range of quality services in the oil and
							gas industry. Our team of highly skilled professionals and
							engineers ensures that our clients' needs and satisfaction are
							met. We approach all our operations and executions one client at a
							time.
						</p> */}
						<p>
							Though the Company was incorporated on the 5th of September, 2014, the combined relevant professional experience of the Management is over 100 years. At JOSHCALEBWILL, we offer a wide range of services that cut across the entire value Chain of the Oil and Gas Industry which are administered with dedication to high level of professioanl excellence. Our work disciplines are organized into projects. Highly experience Project managers head every project and operations are integrated via our state of environment.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.6} direction='right'>
						<p>
							Joshcalebwill Petroleum Limited has an array of well trained and experienced Engineers and allied Professionals hwo are poised to bring thier considerable experiences in projects studies, planning, design, construction, supervision and management to bear on any project we handle.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.7} direction='right'>
						<p>
							We adopt global best practices, processes, systems and standards in our
							Project execution to ensure that we deliver Project Scope on time
							and within Budget. We use traditional, hybrid and computerized
							methods in Project Analysis, Design and
							Execution/Construction. Our innovative approach to Project
							execution derives from our dedication to continually strive
							towards excellence and surpassing Client’s expectations as
							encapsulated in our Core Values.
						</p>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='right'>
						<p>
							Joshcalebwill Petroleum Limited was incorporated with Corporate
							Affairs Commission (CAC) to carry on business as an Oil & Gas
							Company. Our capacity resides in our staff. Each staff member is
							highly skilled, talented, dedicated and qualified by education,
							training and experience. Our management is highly committed to
							total Quality Control and provides such by continuously training
							its staff in their areas of identified training needs that align
							with the Corporate goals and objectives.
						</p>
					</FadeInAlways>
				</Styles.HistoryContentContainer>
			</Styles.HistoryContainer>
		</>
	);
};

export default History;
