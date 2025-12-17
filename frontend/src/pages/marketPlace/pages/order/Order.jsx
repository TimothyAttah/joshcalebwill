import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import {
	getOrderDetails,
	payOrder,
	deliverOrder,
} from '../../../../reduxMarketNew/actions/orderAction';
import { user } from '../../components/nav/MarketNav';
import * as Styles from './OrderStyles';

//https://paystack.shop/pay/n0c1pwwa7x

const Order = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getOrderDetails(id));
	}, [dispatch]);

	const order = useSelector((state) => state.order.orderDetails);

	console.log(order);

	// const orderDeliver = useSelector((state) => state.orderDeliver);
	// const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

	// const order = {};

	const payWithPaystack = () => {
		// e.preventDefault();
		const paystack = new PaystackPop();

		paystack.newTransaction({
			key: 'pk_test_d2fdd83059f4346941d44f730d55cea9a35a17e4',
			amount: order?.totalPrice * 100,
			name: order?.user?.name,
			email: order?.user?.email,
			phone: order?.shippingAddress?.phoneNumber,

			onSuccess(transaction) {
				console.log('This is payment>>>>>', transaction);
				// dispatch(updatePayOrder(id, transaction));
				dispatch(payOrder(id, transaction));
				if (transaction.success) {
					dispatch({ type: ORDER_TYPES.ORDER_PAY_RESET });
					dispatch(getOrderDetails(id));
				}
			},
			onCancel() {
				console.log('You have canceled the transaction.');
			},
		});
	};

	// useEffect(() => {
	// 	if (!order || successPay || successDeliver) {
	// 		dispatch({ type: ORDER_TYPES.ORDER_PAY_RESET });
	// 		dispatch({ type: ORDER_TYPES.ORDER_DELIVER_RESET });

	// 		dispatch(getOrderDetails(id));
	// 	}
	// }, [dispatch, order, id, successDeliver, successPay]);

	// const successPaymentHandler = (paymentResult) => {
	// 	console.log(paymentResult);
	// 	payWithPaystack(paymentResult);

	// 	// dispatch(payOrder(id, paymentResult));
	// };

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

	return (
		<>
			<Styles.MainTitle>Order {order?._id}</Styles.MainTitle>
			<Styles.PlaceOrderContainer className='row'>
				<Styles.PlaceOrderShippingContainer className=' col-md-8'>
					<div className=' list-group-flush'>
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Shipping</Styles.Title>
							<p>
								<strong>Name: </strong> {order?.user?.name}
							</p>
							<p>
								<strong>Email: </strong>
								<a href={`mailto:${order?.user?.email}`}>
									{order?.user?.email}
								</a>
							</p>

							<p>
								<strong>Address:</strong>
								{order?.shippingAddress?.address},{' '}
								{order?.shippingAddress?.city} {order?.shippingAddress?.state},{' '}
								{order?.shippingAddress?.country}
							</p>
							{order?.isDelivered ? (
								<div
									className=' bg-green-700 text-white'
									style={{ padding: '10px', margin: '10px 0' }}
								>
									Delivered On {order?.deliveredAt}
								</div>
							) : (
								<div
									className=' bg-red-700 text-white'
									style={{ padding: '10px', margin: '10px 0' }}
								>
									Not Delivered
								</div>
							)}
						</Styles.Box>
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Payment Method</Styles.Title>
							<p>
								<strong>Method:</strong>
								{order?.paymentMethod}
							</p>
							{order?.isPaid ? (
								<div
									className=' bg-green-700 text-white'
									style={{ padding: '10px', margin: '10px 0' }}
								>
									Paid On {order?.paidAt}
								</div>
							) : (
								<div
									className=' bg-red-700 text-white'
									style={{ padding: '10px', margin: '10px 0' }}
								>
									Not Paid
								</div>
							)}
						</Styles.Box>
						<Styles.Box className=' list-group-item'>
							<Styles.Title>Order Items</Styles.Title>
							{order?.orderItems?.length === 0 ? (
								<Styles.Title>Your order is empty </Styles.Title>
							) : (
								<div className=' list-group-flush'>
									{order?.orderItems?.map((item, index) => (
										<div className=' list-group-item' key={index}>
											<Styles.PlaceOrderItems lassName=' row'>
												<Styles.PlaceOrderItemsImg className='col-md-1'>
													<img
														src={`${item?.image}`}
														alt={item?.name}
														loading='lazy'
													/>
												</Styles.PlaceOrderItemsImg>
												<div>
													<Link to={`/market/product/${item?.product}`}>
														{item?.name}
													</Link>
												</div>
												<div className=' col-md-4'>
													{item?.quantity} x ₦{item?.price} = ₦
													{item?.quantity * item?.price}
												</div>
											</Styles.PlaceOrderItems>
										</div>
									))}
								</div>
							)}
						</Styles.Box>
					</div>
				</Styles.PlaceOrderShippingContainer>

				<Styles.PlaceOrderSummaryContainer className=' col-md-4'>
					<div className=' card'>
						<div className='list-group-flush'>
							<div className=' list-group-item'>
								<Styles.Title>Order Summary</Styles.Title>
								<hr />
							</div>
							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Items</div>
									<div className=' col'>₦{order?.itemsPrice.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>
							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Shipping & Handling</div>
									<div className=' col'>₦{order?.shippingPrice.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>

							<Styles.PlaceOrderSummaryCardBox className=' list-group-item'>
								<div className=' row'>
									<div className=' col'>Total</div>
									<div className='col'>₦{order?.totalPrice.toFixed(2)}</div>
								</div>
							</Styles.PlaceOrderSummaryCardBox>
							{/* <Link to='https://paystack.shop/pay/n0c1pwwa7x'>Pay</Link> */}

							<br />

							{order?.isPaid ? null : (
								<button
									onClick={() => payWithPaystack()}
									style={{
										background: 'green',
										padding: '10px',
										borderRadius: '10px',
										color: '#fff',
									}}
								>
									Proceed with payment
								</button>
							)}

							{/* <div div className=' list-group-item'>
								<button
									type='button'
									className='btn btn-block'
									onClick={deliverHandler}
								>
									Mark As Delived
								</button>
							</div> */}

							{user &&
								user?.isAdmin &&
								order?.isPaid &&
								!order?.isDelivered && (
									<div div className=' list-group-item'>
										<button
											button
											type='button'
											className='btn btn-block'
											onClick={deliverHandler}
										>
											Mark As Delived
										</button>
									</div>
								)}

							{/* <div ref={paypal}>Payment</div> */}
							{/* {!order.isPaid && (
					<ListGroup.Item>
						{loadingPay && <Loader />}
						{!sdkReady ? (
							<Loader />
						) : (
							// <PayPalButton
							// 	amount={order.totalPrice}
							// 	onSuccess={successPaymentHandler}
							// />
							<button onClick={() => payWithPaystack()}>Pay</button>
						)}
					</ListGroup.Item>
				)} */}
						</div>
					</div>
				</Styles.PlaceOrderSummaryContainer>
			</Styles.PlaceOrderContainer>
		</>
	);
};

export default Order;
