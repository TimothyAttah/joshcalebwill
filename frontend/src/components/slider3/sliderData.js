import pix1 from '../../assets/offshore2.jpg';
// import pix1 from '../../assets/chemical1.jpg';

import pix2 from '../../assets/explore6.png';
import pix3 from '../../assets/gas1.jpg';
import pix4 from '../../assets/pipe5.jpg';
import picHealth from '../../assets/safety2.jpg';
import vicHealth from '../../assets/vicHealth.webm';
import vicHealth1 from '../../assets/vicHealth1.webm';
import vicSlider1 from '../../assets/oilSlide.mp4';
import vicSlider2 from '../../assets/vicSlider2.mp4';

import vicHaulage from '../../assets/haulageSlide.jpg';
import vicGas from '../../assets/gasVid.mp4';
import vicOffshore from '../../assets/vicOffshore.webm';
import vicExplore from '../../assets/procurement6.mp4';

export const slides = [
	{
		title: 'Offshore Oil & Gas Rig',
		subtitle: 'Safe.Reliable.Sustainable',
		desc: ' we specialize in supporting offshore oil and gas operations with safe, efficient, and reliable services.',
		// src: pix1,
		vic: vicSlider1,
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
		// src: vicGas,
		srcType: 'video',
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
