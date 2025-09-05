import React from 'react';
import { FaStreetView } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styles from './ServicesStyles';

const Services = () => {
	return (
		<Styles.ServicesMainContainer id='services'>
			<Styles.ServicesOverlay/>
			<Styles.ServicesTitle className='title'>
				<Styles.ServicesTitleText className='title-text'>
					<h1>Our Services</h1>
				</Styles.ServicesTitleText>
				<Styles.ServicesTitleUnderline className='title-underline'></Styles.ServicesTitleUnderline>
			</Styles.ServicesTitle>

			<Styles.ServicesContainer className='services-container'>

				<Styles.ServicesItem black className='service-item service-item-black'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1>Exploration</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1>Exploration</h1>
						<p>
							We provide consultancy services in the area of upstream
							exploration and operations in crude oil, gas and mineral
							exploration and extraction and prospecting
						</p>
						<button>
							<Link to='/what-we-do/exploration'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem white className='service-item service-item-white'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1> Chemical supply and treatments</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1> Chemical supply and treatments</h1>
						<p>
							At Joshcalebwill, we deliver high-quality chemical products and
							treatment solutions that keep industries running smoothly, safely,
							and sustainably.
						</p>
						<button>
							<Link to='/what-we-do/chemical-supply&treatments'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem black className='service-item service-item-black'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1>Pipeline Construction and Maintenance</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1>Pipeline Construction and Maintenance</h1>
						<p>
							We provide corrosion-free oil, water and gas pipeline
							construction, maintenance, fabrications and procurement services.
							We do Well-head Valves maintenance services.
						</p>
						<button>
							<Link to='/what-we-do/pipeline-construction-and-maintenance'>
								Read More
							</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem white className='service-item service-item-white'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1> Gas Compression Services</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1> Gas Compression Services</h1>
						<p>
							At Joshcalebwill, our Gas Compression Services ensure optimal
							pressure levels for the safe and efficient transport of natural
							gas.
						</p>
						<button>
							<Link to='/what-we-do/gas-compression-services'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem black className='service-item service-item-white'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1>Health, Safety, and Environmental Assessment Consultancy</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1>Health, Safety, and Environmental Assessment Consultancy</h1>
						<p>
							The oil and gas environment is a very volatile one, hence the need
							for consultancy services for organizations in the areas of
							Environment, Health and Safety for Workers and the Environment.
						</p>
						<button>
							<Link to='/what-we-do/health-and-safety'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem white className='service-item service-item-white'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1>Procurement Solutions</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1>Procurement Solutions</h1>
						<p>
							At Joshcalebwill, we streamline the procurement process for oil &
							gas and industrial operations. From sourcing critical equipment to
							delivering specialized materials, we ensure every step is
							reliable, transparent, and cost-efficient.
						</p>
						<button>
							<Link to='/what-we-do/procurement-solutions'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>

				<Styles.ServicesItem black className='service-item service-item-white'>
					<Styles.FrontText className='front-text'>
						{/* <FaStreetView /> */}
						<h1>Haulage Services</h1>
					</Styles.FrontText>

					<Styles.BackText className='back-text'>
						<h1>Haulage Services</h1>
						<p>
							We provide haulage services especially in the area of Diesel,
							Petrol, Kerosene, CNG, and other petroleum products.
						</p>
						<button>
							<Link to='/what-we-do/haulage-services'>Read More</Link>
						</button>
					</Styles.BackText>
				</Styles.ServicesItem>
			</Styles.ServicesContainer>
		</Styles.ServicesMainContainer>
	);
};

export default Services;
