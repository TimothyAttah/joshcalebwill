import React, { useState } from 'react';
import {
	getAllProducts,
	deleteProduct,
} from '../../../../../reduxMarketNew/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Table = styled.table`
	width: 100%;
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

const Products = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const { products } = useSelector((state) => state.products);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteProduct(id));
		}
	};

	console.log(products);

	return (
		<div>
			<h1>Products</h1>
			<Table>
				<thead className=' bg-amber-400 border-b-2 border-amber-600'>
					<tr>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							ID
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							NAME
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							PRICE
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							CATEGORY
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							COLOR
						</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>
							ACTIONS
						</th>
					</tr>
				</thead>
				<tbody className=' divide-y divide-gray-100'>
					{products?.map((product, index) => (
						<tr
							key={product._id}
							className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}
						>
							<td
								data-cell='ID'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{product._id}
							</td>
							<td
								data-cell='NAME'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{product.name}
							</td>
							<td
								data-cell='price'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								N{product?.price}
							</td>
							<td
								data-cell='category'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{product?.category}
							</td>
							<td
								data-cell='color'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								{product?.color}
							</td>

							<td
								data-cell='actions'
								className='text-sm text-gray-700 whitespace-nowrap'
							>
								<Link to={`/market/admin/product/${product._id}/edit`}>
									<button variant='light' className='btn-sm'>
										<FaEdit color='green' style={{ marginRight: '10px' }} />
									</button>
								</Link>
								<button
									variant='danger'
									className='btn-sm'
									onClick={() => deleteHandler(product._id)}
								>
									<FaTrash color='red' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Products;
