 const products = [
		{
			name: 'Jumbo Tunnelling Drilling Rig',
			category: 'safety',
			description:
				'Our Mining drill rigs are specifically designed for blast hole drilling to increase production and reduce down time.',
			price: 50000.99,
			oldPrice: 78100.99,
			image:
				'https://www.hardrockdrills.com/wp-content/uploads/2018/06/KJ311-1.jpg',
			color: 'gold',
			rating: 4.5,
			numReviews: 3,

			// author: 'admin',
		},
		{
			name: 'Jumbo Tunnelling Drilling Rig',
			category: 'piping-hoses',
			description:
				'Forged Steel, Aluminum, Flat Steel with plastic cover or Butterfly "T" type',
			price: 30000.32,
			oldPrice: 58100.95,
			image:
				'https://advanceglobalsupplies.net/wp-content/uploads/2013/09/hoses-2.jpg',
			color: 'green',
			rating: 4.2,
			numReviews: 2,
		},
		{
			name: 'Measuring pressure',
			category: 'instrumentation',
			description:
				'They develop control system infrastructure, select and specify field (pressure, flow, temperature) instruments, and troubleshoot existing systems.',
			price: 135000.99,
			image:
				'https://iticollege.edu/wp-content/uploads/2022/06/Instrument-Technician-Course-.jpg',
			color: 'white',
			rating: 3.5,
			numReviews: 4,
		},
		{
			name: 'helmet hand-sanitizer and face-mask',
			category: 'safety',
			description:
				'They develop control system infrastructure, select and specify field (pressure, flow, temperature) instruments, and troubleshoot existing systems.',
			price: 32000.99,
			image:
				'https://media.istockphoto.com/id/1225788986/photo/helmet-hand-sanitizer-and-face-mask.webp?a=1&s=612x612&w=0&k=20&c=nZiAtNYx67eaYmPbkOSBsr3cKLLRITj4yAShk9r22Oo=',
			color: 'white',
			rating: 3.9,
			numReviews: 4,
		},
		{
			name: 'Fire Hoses',
			category: 'piping-hoses',
			description: 'A pile of fire hoses. Handy for you.',
			price: 100000.99,
			image:
				'https://images.unsplash.com/photo-1700356848746-5f2dd76c237b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFBpcGluZyUyQyUyMEhvc2VzJTJDJTIwYW5kJTIwRml0dGluZ3N8ZW58MHx8MHx8fDA%3D',
			color: 'red',
			rating: 4.2,
			numReviews: 4,
		},
		{
			name: 'Yello Helmet',
			category: 'safety',
			description: 'Rolls of yellow hard hat on a rack. Safety first.',
			price: 100000.99,
			image:
				'https://images.unsplash.com/photo-1755377205288-f797e46983c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8',
			color: 'gold',
			rating: 4.0,
			numReviews: 4,
		},
		{
			name: 'Crane Tower',
			category: 'safety',
			description: 'Very handy, making work faster and stable.',
			price: 200000.99,
			image:
				'https://images.unsplash.com/photo-1739296449815-f2c1185cd64b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8',
			color: 'red',
			rating: 4.0,
			numReviews: 4,
		},
		{
			name: 'Fire extinguisher',
			category: 'safety ',
			description: 'Incase of a fire, fire extinguisher can be very useful.',
			price: 52000.99,
			image:
				'https://media.istockphoto.com/id/510585846/photo/carbon-dioxide-foam-powder-and-water.jpg?s=612x612&w=0&k=20&c=K3cu91qZOkmx_Yb03nCJ70kOXijFNDJsw_iukk7B8FM=',
			color: 'red',
			rating: 4.0,
			numReviews: 4,
		},
		{
			name: 'Engine oil',
			category: 'lubricants',
			description: 'Makes your engine runs smoothly.',
			price: 30000.99,
			image:
				'https://media.istockphoto.com/id/951321938/photo/man-checking-engine-oil-of-an-car.jpg?s=612x612&w=0&k=20&c=BQaM-xZwS_FO9y0sy2MymUG8QcnrTVs8bNjehNzF91c=',
			color: 'green',
			rating: 4.3,
			numReviews: 2,
		},
		{
			name: 'Polish wax',
			category: 'lubricants',
			description: 'Make your car shine by making use of polish wax or cream.',
			price: 30000.99,
			image:
				'https://plus.unsplash.com/premium_photo-1661443456250-5cd06d09701c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THVicmljYW50cyUyMGFuZCUyMEF1dG9tb3RpdmUlMjBTdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D',
			color: 'green',
			rating: 4.3,
			numReviews: 4,
		},
		{
			name: 'Motor Oil',
			category: 'lubricants',
			description:
				'Make your car engine run properly by appying this motor oil.',
			price: 30000.99,
			image:
				'https://images.unsplash.com/photo-1635437536607-b8572f443763?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fEx1YnJpY2FudHMlMjBhbmQlMjBBdXRvbW90aXZlJTIwU3VwcGxpZXN8ZW58MHx8MHx8fDA%3D',
			color: 'red',
			rating: 4.3,
			numReviews: 4,
		},
 ];

export default products;
