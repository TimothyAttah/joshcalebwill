import React from 'react';
import * as Styles from './CartModalStyles';
import Overlay from '../../../../components/Overlay';
import { RiXrpFill } from 'react-icons/ri';
import OrderSummary from '../orderSummary/OrderSummary';

import CartModalItem from './CartModalItem';

const CartModal = ({
	products,
	isOpen,
	onClose,
	totalItems,
	shippingFee,
	subtotal,
	orderTotal,
}) => {
	return (
		<>
			{isOpen && <Overlay onClick={onClose} />}

			<div
				className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0  right-0 bottom-0 left-auto  md:w-1/2 w-full border border-zinc-300 py-7 transition-transform duration-300 z-999999  ${
					isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
				}`}
				style={{ padding: '20px 0' }}
			>
				<>
					<div
						className=' flex justify-between items-center mb-4'
						style={{ margin: '20px' }}
					>
						<h4 className=' text-xl font-bold text-zinc-800'>Your Cart</h4>

						<button
							onClick={onClose}
							className=' text-gray-600 hover:text-gray-900'
						>
							<RiXrpFill className=' bg-black p-1 text-white' />
						</button>
					</div>

					<div className='cart-items flex-1 flex flex-col gap-2 overflow-y-auto scroll'>
						{products.length === 0 ? (
							<p className=' text-zinc-800 text-center'>Your cart is empty</p>
						) : (
							products.map((item, index) => (
								<CartModalItem product={item} key={index} index={index} />
							))
						)}
					</div>

					{products.length > 0 && (
						<OrderSummary
							onClose={onClose}
							products={products}
							totalItems={totalItems}
							subtotal={subtotal}
							shippingFee={shippingFee}
							orderTotal={orderTotal}
						/>
					)}
				</>
			</div>
		</>
	);
};

export default CartModal;
