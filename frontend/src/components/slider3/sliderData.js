import pix1 from '../../assets/offshore2.jpg';
// import pix1 from '../../assets/chemical1.jpg';

import pix2 from '../../assets/explore6.png';
import pix3 from '../../assets/gas1.jpg';
import pix4 from '../../assets/pipe5.jpg';
import pix5 from '../../assets/pipe3.jpg';
import vicHealth from '../../assets/vicHealth.webm';
import vicHaulage from '../../assets/vicHaulage.webm';
import vicGas from '../../assets/vicGas.webm';
import vicOffshore from '../../assets/vicOffshore.webm';
import vicExplore from '../../assets/vicProcurement.webm';

export const slides = [
	{
		title: 'Offshore Oil & Gas Rig',
		subtitle: 'Safe.Reliable.Sustainable',
		desc: 'At Joshcalebwill, we specialize in supporting offshore oil and gas operations with safe, efficient, and reliable services. Our expertise spans from rig setup and maintenance to supply chain support and safety management. With a commitment to innovation and global best practices, we ensure that offshore projects are executed with precision, minimizing downtime and maximizing productivity.',
		// src: pix1,
		vic: vicOffshore,
		srcType: 'video',
		slidePosition: 'slide1',
	},
	{
		title: 'EXPLORATION',
		subtitle: '',
		desc: 'We provide consultancy services in the area of upstream exploration and operations in crude oil, gas and mineral exploration and extraction and prospecting',
		// src: pix2,
		vic: vicExplore,
		srcType: 'video',
		slidePosition: 'slide2',
	},
	{
		title: 'GAS COMPRESSION SERVICES',
		subtitle: 'Powering Efficiency. Driving Efficiency. Ensuring Flow.',
		desc: '	At Joshcalebwill, our Gas Compression Services ensure optimal pressure levels for the safe and efficient transport of natural gas. From design and installation to maintenance and upgrades, we provide end-to-end solutions that keep your operations running at peak performance.',
		src: pix3,
		srcType: 'image',
		vic: vicGas,
		slidePosition: 'slide3',
	},
	{
		title: 'Health and Safety',
		subtitle: 'Protecting People, Assets & Nature',
		desc: 'The oil and gas environment is a very volatile one, hence the need for consultancy services for organizations in the areas of Environment, Health and Safety for Workers and the Environment. We establish systems and policies that help in the safety and maintenance of oil and gas facility.',
		// src: pix4,
		srcType: 'video',
		vic: vicHealth,
		slidePosition: 'slide4',
	},
	{
		title: 'Haulage',
		subtitle: 'Protecting People, Assets & Nature',
		desc: 'The oil and gas environment is a very volatile one, hence the need for consultancy services for organizations in the areas of Environment, Health and Safety for Workers and the Environment. We establish systems and policies that help in the safety and maintenance of oil and gas facility.',
		// src: pix5,
		vic: vicHaulage,
		srcType: 'video',
		slidePosition: 'slide5',
	},
];
