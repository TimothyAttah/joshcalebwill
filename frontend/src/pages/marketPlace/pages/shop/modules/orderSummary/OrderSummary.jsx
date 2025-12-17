import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin7Line, RiBankCardLine } from 'react-icons/ri';
// import { clearCart } from '../../../../../../reduxMarket/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({
	onClose,
	subtotal,
	totalItems,
	shippingFee,
	orderTotal,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { products } = useSelector((state) => state.cart);



	const { user } = useSelector((state) => state.user);

	const handleClearCart = () => {
		// dispatch(clearCart());
	};


	const checkoutHandler = () => {
		if (user) {
			navigate('/market/shipping');
		} else {
			navigate('/market/login');
		}
		onClose();
	};

	return (
		// <div className=' bg-red-50 mt-5 rounded text-base'>
		// 	<div className='px-6 py-4 space-y-5'>
		// 		<h2 className='text-xl text-gray-950'>Order Summary</h2>
		// 		<p className=' text-gray-950 mt-2'>Selected Items: {totalItems}</p>
		// 		<p>Subtotal: N{subtotal.toFixed(2)}</p>
		// 		<p>Shipping & Handlings: N{shippingFee.toFixed(2)}</p>
		// 		<div className=' flex justify-between py-2 border-t border-zinc-300 '>
		// 			<span className='text-lg text-blue-600 font-bold'>Order total</span>
		// 			<span className='text-lg text-blue-600 font-bold'>
		// 				N{orderTotal.toFixed(2)}
		// 			</span>
		// 		</div>

		// 		<div className='px-4 mb-6'>
		// 			<button
		// 				onClick={(e) => {
		// 					e.stopPropagation();
		// 					handleClearCart();
		// 				}}
		// 				className=' bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4 '
		// 			>
		// 				<span className=' mr-2'> Clear cart</span> <RiDeleteBin7Line />{' '}
		// 			</button>

		// 			<button
		// 				className=' bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center'
		// 				onClick={checkoutHandler}
		// 			>
		// 				<span className=' mr-2'> Proceed To Checkout</span>
		// 				<RiBankCardLine />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
		<>
			<div
				className='px-10 border-y border-zinc-300'
				style={{ padding: '0 10px' }}
			>
				<div
					className=' flex justify-between pt-2'
					style={{ paddingTop: '10px' }}
				>
					<span className='text-zinc-800'>Subtotal</span>
					<span className='text-zinc-800'>N{subtotal.toFixed(2)}</span>
				</div>
				<div
					className=' flex justify-between py-2'
					style={{ padding: '10px 0px' }}
				>
					<span className='text-zinc-800'>Shipping & Handlings</span>
					<span className='text-zinc-800'>N{shippingFee.toFixed(2)}</span>
				</div>
				<div
					className=' flex justify-between py-2 border-t border-zinc-300 '
					style={{ padding: '10px 0px' }}
				>
					<span className='text-lg text-blue-600 font-bold'>Order total</span>
					<span className='text-lg text-blue-600 font-bold'>
						N{orderTotal.toFixed(2)}
					</span>
				</div>
			</div>

			<div className=' flex gap-x-2 px-10' style={{ padding: '0 10px' }}>
				<button
					className=' bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'
					onClick={() => onClose()}
				>
					Close
				</button>
				<button
					className={`  text-white flex-1 h-[7vh]  ${
						products.length === 0
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-blue-600 cursor-pointer active:bg-blue-700 '
					}`}
					disabled={ products.length === 0 }
					onClick={checkoutHandler}
				>
					Checkout
				</button>
			</div>
		</>
	);
};

export default OrderSummary;
