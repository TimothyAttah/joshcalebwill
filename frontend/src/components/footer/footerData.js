import {FaFacebook, FaInstagram, FaWhatsapp,  FaLinkedin} from 'react-icons/fa'

export const footerData = [
	// {
	// 	footerTitle: 'Who we are',
	// 	navSubmenu: [
	// 		{
	// 			navTitle: 'values belief & culture',
	// 			navPath: '/who-we-are/values-belief&culture',
	// 		},
	// 		{
	// 			navTitle: 'meet the prolific team',
	// 			navPath: '/who-we-are/meet-the-prolific-team',
	// 		},
	// 		{
	// 			navTitle: 'recent and past involvement',
	// 			navPath: '/who-we-are/recent-and-past-involvement',
	// 		},
	// 		{
	// 			navTitle: 'why were always the first choice',
	// 			navPath: '/who-we-are/why-were-always-the-first-choice',
	// 		},
	// 		{
	// 			navTitle: "today's article/careers",
	// 			navPath: "/who-we-are/today's-article&careers",
	// 		},
	// 	],
	// },
	{
		footerTitle: 'Follow us',
		navSubmenu: [
			{
				navIcon: FaFacebook,
				navPath: '/contact',
				target: true,
			},
			{
				navIcon: FaInstagram,
				navPath: '/contact',
				target: true,
			},
			{
				navIcon: FaLinkedin,
				navPath: '/contact',
				target: true,
			},
			{
				navIcon: FaWhatsapp,
				// navPath: 'https://wa.link/rbr42a',
				navPath:
					'https://wa.me/2347077077529?text=Hello,%20welcome%20to%20Joshcalebwill',
				target: true,
			},
		],
	},
	{
		footerTitle: 'What we do',
		navSubmenu: [
			{
				navTitle: 'Exploration',
				navPath: '/what-we-do/exploration',
			},
			{
				navTitle: 'Chemical supply and treatments ',
				navPath: '/what-we-do/chemical-supply&treatments',
			},
			{
				navTitle: 'Pipeline construction and maintenance',
				navPath: '/what-we-do/pipeline-construction-and-maintenance',
			},
			{
				navTitle: 'Gas compression services ',
				navPath: '/what-we-do/gas-compression-services',
			},
			{
				navTitle: 'Health safety and environmental consultancy ',
				navPath: '/what-we-do/health-and-safety',
			},
			{
				navTitle: 'Haulage Services ',
				navPath: '/what-we-do/haulage-services',
			},
			{
				navTitle: 'Procurement Solutions',
				navPath: '/what-we-do/procurement-solutions',
			},
		],
	},
	{
		footerTitle: 'Help & Support',
		navSubmenu: [
			{
				navTitle: 'customer care',
				navPath: '/contact',
			},
			{
				navTitle: 'contact us',
				navPath: '/contact',
			},
		],
	},
];
