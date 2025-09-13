import pix1 from '../../assets/offshore2.jpg';
// import pix1 from '../../assets/chemical1.jpg';

import pix2 from '../../assets/explore6.png';
import pix3 from '../../assets/gas1.jpg';
import pix4 from '../../assets/pipe5.jpg';
import picHealth from '../../assets/newGas2.png';
import vicHealth from '../../assets/vicHealth.webm';
import vicHealth1 from '../../assets/vicHealth1.webm';

import vicHaulage from '../../assets/vicHaulage1.webm';
import vicGas from '../../assets/vicGas.webm';
import vicOffshore from '../../assets/vicOffshore.webm';
import vicExplore from '../../assets/vicProcurement.webm';

export const slides = [
	{
		title: 'Offshore Oil & Gas Rig',
		subtitle: 'Safe.Reliable.Sustainable',
		desc: ' we specialize in supporting offshore oil and gas operations with safe, efficient, and reliable services.',
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
		desc: '	Our Gas Compression Services ensure optimal pressure levels for the safe and efficient transport of natural gas.',
		src: pix3,
		srcType: 'video',
		vic: vicGas,
		slidePosition: 'slide3',
	},
	{
		title: 'Health and Safety',
		subtitle: 'Protecting People, Assets & Nature',
		desc: 'We establish systems and policies that help in the safety and maintenance of oil and gas facility.',
		// src: pix4,
		srcType: 'video',
		vic:vicHealth1,
		slidePosition: 'slide4',
	},
	{
		title: 'Haulage',
		subtitle: 'Protecting People, Assets & Nature',
		desc: '	We provide haulage services especially in the area of Diesel, Petrol, Kerosene, CNG, and other petroleum products.',
		// src: pix5,
		vic: vicHaulage,
		srcType: 'video',
		slidePosition: 'slide5',
	},
];
