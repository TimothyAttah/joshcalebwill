import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../../../../reduxMarketNew/actions/orderAction';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Table = styled.table`
	th,
	td {
		padding: 12px;
	}

	th {
		text-transform: uppercase;
		font-weight: bold;
	}

	td {
		color: #171e29;
		font-weight: bold;
	}

	@media screen and (max-width: 790px) {
		th {
			display: none;
		}

		td {
			display: block;
			padding: 0.5rem 1rem;
		}

		td::before {
			content: attr(data-cell) ': ';
			font-weight: 700;
			padding-right: 50px;
			text-transform: uppercase;
		}
	}
`;

const OrderLists = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(listOrders());
	}, [dispatch]);

	const { orderLists: orders } = useSelector((state) => state.order);
	console.log(orders);
	return (
		<div>
			<h1>Orders</h1>
			<Table className='w-full'>
				<thead className=' bg-amber-400 border-b-2 border-amber-600'>
					<tr>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							ID
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							User
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							date
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							total
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							paid
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							delivered
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							details
						</th>
					</tr>
				</thead>
				<tbody className=' divide-y divide-gray-100'>
					{orders?.map((order, index) => (
						<tr
							key={order._id}
							className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}
						>
							<td
								data-cell='ID'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{order._id}
							</td>
							<td
								data-cell='user'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{order.user && order.user.name}
							</td>
							<td
								data-cell='date'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{order.createdAt.substring(0, 10)}
							</td>
							<td
								data-cell='total'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								N{order.totalPrice}
							</td>
							<td
								data-cell='paid'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{order.isPaid ? (
									order.paidAt.substring(0, 10)
								) : (
									<FaTimes color='red' />
								)}
							</td>
							<td
								data-cell='delivered'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{order.isDelivered ? (
									order.deliveredAt.substring(0, 10)
								) : (
									<FaTimes color='red' />
								)}
							</td>
							<td
								data-cell='details'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								<Link to={`/market/order/${order._id}`}>
									<button variant='light' className='btn-sm'>
										Details
									</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default OrderLists;
