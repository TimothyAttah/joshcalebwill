import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	listUsers,
	deleteUser,
} from '../../../../../reduxMarketNew/actions/userActions';
import { FaTimes, FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { user } from '../../../components/nav/MarketNav';
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

const UserList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const user = useSelector((state) => state.user.user);
	// console.log(user);

	useEffect(() => {
		if (user && user.role === 'admin') {
			dispatch(listUsers());
		} else {
			navigate('/market/login');
		}
	}, [dispatch, navigate]);

	const userList = useSelector((state) => state.user.usersList);
	console.log(userList);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteUser(id));
		}
	};
	return (
		<>
			<h1>Users</h1>

			<div className='overflow-auto rounded-lg shadow  md:block '>
				{user && (
					<Table className='w-full'>
						<thead className=' bg-amber-400 border-b-2 border-amber-600'>
							<tr>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									ID
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									NAME
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									EMAIL
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									ADMIN
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									ACTIONS
								</th>
							</tr>
						</thead>
						<tbody className=' divide-y divide-gray-100'>
							{userList?.map((user, index) => (
								<tr
									key={user._id}
									className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}
								>
									<td
										data-cell='ID'
										className='text-sm text-gray-700 whitespace-nowrap'
									>
										{user._id}
									</td>
									<td
										data-cell='NAME'
										className='text-sm text-gray-700 whitespace-nowrap'
									>
										{user.name}
									</td>
									<td
										data-cell='EMAIL'
										className='text-sm text-gray-700 whitespace-nowrap'
									>
										<a href={`mailto:${user.email}`}>{user.email}</a>
									</td>
									<td
										data-cell='ADMIN'
										className='text-sm text-gray-700 whitespace-nowrap'
									>
										{user.isAdmin ? (
											<FaCheck color='green' />
										) : (
											<FaTimes color='red' />
										)}
									</td>
									<td
										data-cell='ACTIONS'
										className='text-sm text-gray-700 whitespace-nowrap flex gap-5'
									>
										<Link to={`/market/admin/user/${user._id}/edit`}>
											<button variant='light' className='btn-sm'>
												<FaEdit color='green' style={{marginRight: '10px'}} />
											</button>
										</Link>
										<button
											variant='danger'
											className='btn-sm'
											onClick={() => deleteHandler(user._id)}
										>
											<FaTrash color='red' />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</div>
		</>
	);
};

export default UserList;
