import picHealth from '../assets/safety13.png';
import vicSlider1 from '../assets/off2.png';
import vicHaulage from '../assets/homeSlider3.png';
import vicGas from '../assets/gas.png';
import vicExplore from '../assets/homeSlider2.png';

export const slides = [
	{
		title: 'Offshore Oil & Gas Rig',
		subtitle: 'Safe.Reliable.Sustainable',
		desc: ' we specialize in supporting offshore oil and gas operations with safe, efficient, and reliable services.',
		// src: pix1,
		vic: vicSlider1,
		srcType: 'image',
		slidePosition: 'slide1',
	},
	{
		title: 'EXPLORATION',
		subtitle: '',
		desc: 'We provide consultancy services in the area of upstream exploration and operations in crude oil, gas and mineral exploration and extraction and prospecting',
		// src: pix2,
		vic: vicExplore,
		srcType: 'image',
		slidePosition: 'slide2',
	},
	{
		title: 'GAS COMPRESSION SERVICES',
		subtitle: 'Powering Efficiency. Driving Efficiency. Ensuring Flow.',
		desc: '	Our Gas Compression Services ensure optimal pressure levels for the safe and efficient transport of natural gas.',
		// src: vicGas,
		srcType: 'image',
		vic: vicGas,
		slidePosition: 'slide3',
	},
	{
		title: 'Health and Safety',
		subtitle: 'Protecting People, Assets & Nature',
		desc: 'We establish systems and policies that help in the safety and maintenance of oil and gas facility.',
		// src: pix4,
		srcType: 'image',
		vic: picHealth,
		slidePosition: 'slide4',
	},
	{
		title: 'Haulage',
		subtitle: 'Protecting People, Assets & Nature',
		desc: '	We provide haulage services especially in the area of Diesel, Petrol, Kerosene, CNG, and other petroleum products.',
		// src: pix5,
		vic: vicHaulage,
		srcType: 'image',
		slidePosition: 'slide5',
	},
];
