import { useDispatch } from 'react-redux';

import {
	cartQuantityDecrement,
	cartQuantityIncrement,
	cartRemoveItem,
} from '../../../../../../reduxMarketNew/actions/cartActions';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartModalItem = ({ product, index }) => {
	const dispatch = useDispatch();

	const handleRemove = (id) => {
		dispatch(cartRemoveItem(id));
	};

	const handleQuantityIncrement = (id) => {
		dispatch(cartQuantityIncrement(id));
	};

	const handleQuantityDecrement = (id) => {
		dispatch(cartQuantityDecrement(id));
	};

	return (
		<>
			<div
				className={`flex items-center gap-3  px-5 py-1 border-y border-zinc-300 ${
					index % 2 === 0 ? 'bg-blue-100' : 'bg-white'
				}`}
				style={{ padding: '10px' }}
			>
				<div className='w-20 h-20'>
					<img
						src={product.image}
						alt=''
						className='w-full h-full object-contain'
					/>
				</div>
				{/* product details */}
				<div className=' flex-1'>
					<div className='flex justify-between'>
						<h4 className=' font-semibold text-zinc-800 text-lg'>
							{product.name}
						</h4>
						<button
							className='w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center mr-[27px] cursor-pointer active:bg-blue-700 '
							style={{ marginRight: '27px' }}
							onClick={() => handleRemove(product)}
						>
							<FaTrash />
						</button>
					</div>
					<div className='flex justify-between'>
						<div>
							{/* <span className='text-zinc-600 font-semibold text-lg line-through mr-3'>
								N{product?.oldPrice.toFixed(2)}
							</span> */}
							<span className='text-red-600 font-semibold text-lg'>
								N{product?.price?.toFixed(2)}
							</span>
						</div>
						<div className='flex gap-2'>
							<button
								className='w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700'
								onClick={() => handleQuantityDecrement(product)}
							>
								<FaMinus />
							</button>
							<span>{product?.quantity}</span>
							<button
								className='w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center text-[14px] cursor-pointer active:bg-blue-700'
								onClick={() => handleQuantityIncrement(product)}
							>
								<FaPlus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartModalItem;
