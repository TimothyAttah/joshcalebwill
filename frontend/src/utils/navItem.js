import {
	Bolt,
	ShoppingBag,
	BellDot,
	BookOpenText,
	BriefcaseBusiness,
	CircleHelp,
	TriangleAlert,
	Users,
	Lock,
	Dessert,
	ShieldPlus,
	MessageCircle,
	Images,
	Figma,
	Play,
	MapPin,
	Database,
	PanelsTopLeft,
	PanelTop,
	Globe,
	Pin,
	Waves,
	Clapperboard
} from 'lucide-react';

export const Menus = [
	{
		name: 'who we are',
		// subMenuHeadeing: ['Design', 'Scale'],
		subMenuHeadeing: '',

		subMenu: [
			{
				name: 'values belief & culture',
				desc: 'our beliefs',
				icon: Globe,
				path: '/who-we-are/values-belief&culture',
			},
			{
				name: 'the board of directors',
				desc: 'the directors',
				icon: Globe,
				path: '/who-we-are/directors',
			},
			{
				name: 'recent and past involvement',
				desc: 'news',
				icon: Globe,
				path: '/who-we-are/news',
			},
			{
				name: 'why were always the first choice',
				desc: 'first choice',
				icon: Globe,
				path: '/who-we-are/first-choice',
			},
			{
				name: 'Articles and careers',
				desc: 'Articles',
				icon: Globe,
				path: '/who-we-are/articles-careers',
			},
		],
		gridCols: 2,
	},
	{
		name: 'what we do',
		subMenuHeadeing: '',
		subMenu: [
			{
				name: 'exploration',
				desc: 'exploration',
				icon: Pin,
				path: '/what-we-do/exploration',
			},
			{
				name: 'Haulage Services',
				desc: 'haulage',
				icon: Pin,
				path: '/what-we-do/haulage-services',
			},
			{
				name: 'Procurement Solutions',
				desc: 'procurement',
				icon: Pin,
				path: '/what-we-do/procurement-solutions',
			},
			{
				name: 'Chemical supply and treatments',
				desc: `we deliver high-quality chemical products and
				treatment solutions that keep industries running smoothly, safely,
				and sustainably.`,
				icon: Pin,
				path: '/what-we-do/chemical-supply&treatments',
			},
			{
				name: 'Pipeline construction and maintainance',
				desc: 'pipeline',
				icon: Pin,
				path: '/what-we-do/pipeline-construction-and-maintenance',
			},
			{
				name: 'Gas compression services',
				desc: 'gas',
				icon: Pin,
				path: '/what-we-do/gas-compression-services',
			},
			{
				name: 'Health safety and enviromental assessment consultancy',
				desc: 'health',
				icon: Pin,
				path: '/what-we-do/pipeline-construction-and-maintenance',
			},
		],
		gridCols: 3,

	},
	{
		name: 'sustainability',
		subMenuHeadeing: '',
		subMenu: [
			{
				name: 'Quality policy statement',
				desc: 'our quality policy',
				icon:Waves,
				path: '/sustainability/quality-policy-statement',
			},
			{
				name: 'Health Safety & Environment (HSE) Policy',
				desc: 'health policy',
				icon: Waves,
				path: '/sustainability/health-safety-environment-hse-policy',
			},
			{
				name: 'Nigerian Content Execution Strategy',
				desc: 'news nigeia',
				icon: Waves,
				path: 'Nigerian Content Execution Strategy',
			},
			{
				name: 'Our Sustainability Policys',
				desc: 'sustainability policy',
				icon: Waves,
				path: 'Our Sustainability Policys',
			},
		],
		gridCols: 2,
	},
	{
		name: 'media',
		subMenuHeadeing: '',
		subMenu: [
			{
				name: 'News Blog & Articles',
				desc: 'News Blog & Articles',
				icon: Clapperboard,
				path: '/News Blog & Articles',
			},
			{
				name: 'Events & Pictures Gallery',
				desc: 'Events & Pictures Gallery',
				icon: Clapperboard,
				path: '/Events & Pictures Gallery',
			},
			{
				name: 'Career Opportunities',
				desc: 'Career Opportunities',
				icon: Clapperboard,
				path: '/Career Opportunities',
			},
		],
		gridCols: 2,
	},
	{
		name: 'contact',
		path:'/contact'
	},
];
