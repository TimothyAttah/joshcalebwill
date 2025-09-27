import { Link } from 'react-router-dom';
import * as Styles from './Services2Styles';
import { services } from './servicesData';
import { scrollToTop } from '../../../components/header/Header';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const Services2 = () => {
	return (
		<Styles.ServicesContainer>
			<Styles.ServicesWrapper>
				<Styles.ServicesTitleBox>
					<Styles.ServicesTitle>
						<small>our services</small>
						<h2>what we do</h2>
					</Styles.ServicesTitle>
					<Styles.ServicesDesc>
						<p>
							Our services include upstream and downstream production,
							instrumentation, installation, construction and maintenance. Our
							main focus is on the oil and gas industry, energy, chemical supply
							and treatments, gas compression, engineering, pipeline and
							construction services consultancy, among others. We are driven by
							innovation, strong ethical standard and quality service using the
							latest technologies and innovations in delivering optimum service
							excellence to our clients.
						</p>
					</Styles.ServicesDesc>
				</Styles.ServicesTitleBox>
				<Styles.ServicesListContainer>
					{services.map((item, i) => (
						<FadeInAlways key={i} delay={0.1 * i + 1} direction='up'>
							<Styles.ServicesListItems>
								<Styles.ServiceItemImg>
									<img src={item.pix} alt='' loading='lazy' />
								</Styles.ServiceItemImg>
								<h4>{item.title}</h4>

								<Link to={item.path} onClick={scrollToTop}>
									<Styles.ServiceItemDropdown>
										<h2>{item.title}</h2>
										<p>{item.desc}</p>
										<button>Read more</button>
									</Styles.ServiceItemDropdown>
								</Link>
							</Styles.ServicesListItems>
						</FadeInAlways>
					))}
				</Styles.ServicesListContainer>
			</Styles.ServicesWrapper>
		</Styles.ServicesContainer>
	);
};

export default Services2;
