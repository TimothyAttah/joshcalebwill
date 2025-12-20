import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CheckoutSteps from '../../components/CheckoutSteps';
import CartModalItem from '../shop/modules/cartModal/CartModalItem';
import { createOrder } from '../../../../reduxMarketNew/actions/orderAction';
import * as Styles from './PlaceOrderStyles'

const PlaceOrder = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector((state) => state.cart.products);
	const shippingAddress = useSelector((state) => state.cart.shippingAddress);
	const paymentMethod = useSelector((state) => state.cart.paymentMethod);

	const { order } = useSelector((state) => state.order);

	//Total calculations
	const subtotal = products?.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);
	const totalItems = products?.reduce((acc, item) => acc + item.quantity, 0);
	const shippingFee = totalItems * 0.05;
	const orderTotal = subtotal + shippingFee;

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: products,
				shippingAddress,
				paymentMethod,
				itemsPrice: subtotal,
				shippingPrice: shippingFee,
				totalPrice: orderTotal,
			}),
		);
		navigate(`/market/order/${order._id}`);
	};

	return (
		<>
			<CheckoutSteps step1 step2 step3 step4 />
			<Styles.PlaceOrderContainer className=' row'>
				<Styles.PlaceOrderShippingContainer className=' col col-md-8'>
					<div className=' list-group-flush'>
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Shipping</Styles.Title>
							<p>
								<strong>Name:</strong>
								{shippingAddress?.name}
							</p>
							<p>
								<strong>Email:</strong>
								{shippingAddress?.email}
							</p>
							<p>
								<strong>Address:</strong>
								{shippingAddress?.address}, {shippingAddress?.city}{' '}
								{shippingAddress?.state}, {shippingAddress?.country}
							</p>
						</Styles.Box>
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Payment Method</Styles.Title>
							<p>
								<strong>Method:</strong>
								<span>{paymentMethod}</span>
							</p>
						</Styles.Box>{' '}
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Order Items</Styles.Title>
							{products.length === 0 ? (
								<div>Your cart is empty</div>
							) : (
								products.map((item, index) => (
									<CartModalItem product={item} key={index} index={index} />
								))
							)}
						</Styles.Box>
					</div>
				</Styles.PlaceOrderShippingContainer>

				<Styles.PlaceOrderSummaryContainer className=' col col-md-4'>
					<div className=' card'>
						<div className=' list-group-flush'>
							<div className=' list-group-item'>
								<Styles.Title>Order Summary</Styles.Title>
							</div>
							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Items</div>
									<div className=' col'>₦{subtotal.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>
							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Shipping & Handling</div>
									<div className=' col'>₦{shippingFee.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>
							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Total</div>
									<div className=' col'>₦{orderTotal.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>
							<div className=' list-group-item'>
								<button
									type='button'
									className='btn-block'
									onClick={placeOrderHandler}
									disabled={products.length === 0}
								>
									Place Order
								</button>
							</div>
						</div>
					</div>
				</Styles.PlaceOrderSummaryContainer>
			</Styles.PlaceOrderContainer>
		</>
	);
};

export default PlaceOrder;
