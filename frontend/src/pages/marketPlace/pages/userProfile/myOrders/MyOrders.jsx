import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listMyOrders } from '../../../../../reduxMarketNew/actions/orderAction';
import { FaTimes } from 'react-icons/fa';

const MyOrders = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		dispatch(listMyOrders());
	}, [dispatch]);

	const { user } = useSelector((state) => state?.user);
	const orders = useSelector((state) => state.order.ordersListMy);

	console.log(orders);

	return (
		<div>
			<h2>My Orders</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>DATE</th>
						<th>TOTAL</th>
						<th>PAID</th>
						<th>DELIVERED</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order) => (
						<tr key={order?._id}>
							<td>{order?._id}</td>
							<td>{order?.createdAt.substring(0, 10)}</td>
							<td>{order?.totalPrice}</td>
							<td>
								{order?.isPaid ? (
									order?.paidAt.substring(0.1)
								) : (
									<FaTimes color='red' />
								)}
							</td>
							<td>
								{order?.isDelivered ? (
									order?.deliveredAt.substring(0.1)
								) : (
									<FaTimes color='red' />
								)}
							</td>
							<td>
								<Link to={`/market/order/${order?._id}`}>
									<button className='btn-sm' variant='light'>
										Details
									</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyOrders;
