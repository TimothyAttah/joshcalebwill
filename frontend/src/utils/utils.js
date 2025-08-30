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
} from 'lucide-react';

export const Menus = [
	{
		name: 'Features',
		subMenuHeadeing: ['Design', 'Scale'],
		subMenu: [
			{
				name: 'Design',
				desc: 'Responsive design',
				icon: PanelsTopLeft,
			},
			{
				name: 'Management',
				desc: 'Site control',
				icon: Bolt,
			},
			{
				name: 'Navigation',
				desc: 'Link pages',
				icon: PanelTop,
			},
		],
		gridCols: 2,
	},
	{
		name: 'Resources',
		subMenuHeadeing: ['Get started', 'Programs', 'Recent'],
		subMenu: [
			{
				name: 'Marketplace',
				desc: 'Browse templates',
				icon: ShoppingBag,
			},
			{
				name: 'Meetups',
				desc: 'Upcoming events',
				icon: MapPin,
			},
			{
				name: 'Updates',
				desc: 'Link pages',
				icon: PanelTop,
			},
		],
		gridCols: 3,
	},
	{
		name: 'Enterprise',
		subMenuHeadeing: ['Overview', 'Features'],
		subMenu: [
			{
				name: 'Enterprise',
				desc: 'Overview',
				icon: ShieldPlus,
			},
			{
				name: 'Collaboration',
				desc: 'Design together',
				icon: Users,
			},
			{
				name: 'Customers',
				desc: 'Stories',
				icon: BookOpenText,
			},
		],
		gridCols: 2,
	},
	{
		name: 'Pricing',
	},
	{
		name: 'Contact',
	},
];
