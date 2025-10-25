import { services } from '../../../../utils/servicesData';
import * as Styles from './HomeServicesStyles';
import { FadeInAlways } from '../../../../components/fadeIn/FadeInAlways';
import {Link} from 'react-router-dom'
import { scrollToTop } from '../../../../components/header/Header';
import Copy from '../../../../components/copyText/CopyText';
import { ReactLenis } from 'lenis/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';

const HomeServices = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.HomeServicesContainer>
					<Styles.HomeServicesTitle>
						<Copy delay={0.8}>
							<small>what we do</small>
							<h1>energy that fuels the world</h1>
						</Copy>
						<Copy delay={0.9}>

							<p>
								Our services include upstream and downstream production,
								instrumentation, installation, construction and maintenance. Our
								main focus is on the oil and gas industry, energy, chemical
								supply and treatments, gas compression, engineering, pipeline
								and construction services consultancy, among others.
							</p>
						</Copy>
						<Copy delay={0.9}>

							<p>
								We are driven by innovation, strong ethical standard and quality
								service using the latest technologies and innovations in
								delivering optimum service excellence to our clients.
							</p>
						</Copy>
					</Styles.HomeServicesTitle>
					<Styles.ServicesListContainerWrapper>
						<Styles.ServicesListContainer>
							{services.map((item, i) => (
								<FadeInAlways key={i} delay={0.1 * i + 1} direction='up'>
									<Styles.ServicesListItems>
										<Styles.ServiceItemImg>
											{/* <img src={ item.pix } alt='' loading='lazy' /> */}
											<LazyLoadImage
												src={ item.pix }
												height='100%'
												width='100%'
												effect='blur'
												placeholderSrc={item.pix}

											/>
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
					</Styles.ServicesListContainerWrapper>
				</Styles.HomeServicesContainer>
			</ReactLenis>
		</>
	);
};

export default HomeServices;
