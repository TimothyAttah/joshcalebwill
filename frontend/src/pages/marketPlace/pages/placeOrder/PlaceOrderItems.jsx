import { useDispatch } from 'react-redux';
import { useFetchOrderByIdQuery } from '../../../../reduxMarket/features/orders/ordersApi';
import { Link, useParams } from 'react-router-dom';
import { RiCloseFill } from 'react-icons/ri';

const PlaceOrderItems = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, error, isLoading } = useFetchOrderByIdQuery(id);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading product details.</p>;

  console.log(data.data);

  const order = data?.data;

  return (
		<>
			<h1>Orders</h1>

			{order && (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>USER</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>PAID</th>
							<th>DELIVERED</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{order._id}</td>
							<td>{order.user && order.user.name}</td>
							<td>{order.createdAt.substring(0, 10)}</td>
							<td>N{order.totalPrice}</td>
							<td>
								{order.isPaid ? (
									order.paidAt.substring(0, 10)
								) : (
									<RiCloseFill color='red' />
								)}
							</td>
							<td>
								{order.isDelivered ? (
									order.deliveredAt.substring(0, 10)
								) : (
									<RiCloseFill color='red' />
								)}
							</td>
							<td>
								<Link to={`/market/order/${order._id}`}>
									<button variant='light' className='btn-sm'>
										Details
									</button>
								</Link>
							</td>
						</tr>
						{/* {order?.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.user && order.user.name}</td>
								<td>{order.createdAt.substring(0, 10)}</td>
								<td>N{order.totalPrice}</td>
								<td>
									{order.isPaid ? (
										order.paidAt.substring(0, 10)
									) : (
										<i className='fas fa-times' style={{ color: 'red' }}></i>
									)}
								</td>
								<td>
									{order.isDelivered ? (
										order.deliveredAt.substring(0, 10)
									) : (
										<i className='fas fa-times' style={{ color: 'red' }}></i>
									)}
								</td>
								<td>
									<Link to={`/order/${order._id}`}>
										<button variant='light' className='btn-sm'>
											Details
										</button>
									</Link>
								</td>
							</tr>
						))} */}
					</tbody>
				</table>
			)}
		</>
	);
};

export default PlaceOrderItems;
