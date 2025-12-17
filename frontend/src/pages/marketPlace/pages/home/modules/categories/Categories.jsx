import { Link } from 'react-router-dom';
import category1 from '../../../../../../assets/category-1.png';
import category2 from '../../../../../../assets/category-2.png';
import category3 from '../../../../../../assets/category-3.png';
import category4 from '../../../../../../assets/category-4.png';

const Categories = () => {
	const categories = [
		{ name: 'Lubricants', path: 'lubricants', image: category1 },
		{ name: 'Safety', path: 'safety', image: category2 },
		{ name: 'Piping & Hoses', path: 'piping-hoses', image: category3 },
		{ name: 'Instrumentation', path: 'instrumentation', image: category4 },
	];

	return (
		<div className='product__grid'>
			{categories.map((category) => (
				<Link
					to={`/market/categories/${category.path}`}
					key={category.name}
					className='categories__card text-white'
				>
					{/* <img src={category.image} alt={category.name} /> */}
					<h4 className='px-8 py-3 rounded-full text-lg cursor-pointer bg-blue-600 text-white' style={{color:'#fff', padding:'10px 0px'}}>
						{category.name}
					</h4>
				</Link>
			))}
		</div>
	);
};

export default Categories;
