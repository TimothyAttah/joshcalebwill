import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { user } from '../../../components/nav/MarketNav';
import {
	getUserByIdDetails,
	updateUser,
} from '../../../../../reduxMarketNew/actions/userActions';

const UserEdit = () => {
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [role, setRole] = useState('user');

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	const userDetails = useSelector((state) => state.user.userDetails);

	console.log(userDetails);

	// useEffect(() => {
	// 	if (!userDetails?.name || !userDetails?._id === id) {
	// 		dispatch(getUserByIdDetails(id));
	// 	} else {
	// 		setName(userDetails.name);
	// 		setEmail(userDetails?.email);
	// 		setIsAdmin(userDetails?.isAdmin);
	// 		setRole(userDetails?.role);
	// 	}
	// }, []);

	useEffect(() => {
		if (!userDetails) {
			dispatch(getUserByIdDetails(id));
		} else {
			setName(userDetails.name);
			setEmail(userDetails?.email);
			setIsAdmin(userDetails?.isAdmin);
			setRole(userDetails?.role);
		}
	}, [dispatch, userDetails]);

	const handleProfileUpdate = async (e) => {
		e.preventDefault();
		const data = { name, email, isAdmin, role };

    dispatch(updateUser(id, data));
    navigate('/market/dashboard/admin');
	};

	return (
		<>
			<Link to='/market/dashboard/admin'>Go Back</Link>
			<div className=' max-w-sm border shadow bg-white mx-auto p-8'>
				<h2 className='text-2xl font-semibold pt-5'> Edit User</h2>
				<form
					className=' space-y-5 max-w-sm mx-auto pt-8'
					onSubmit={handleProfileUpdate}
				>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>

					<input
						type='checkbox'
						name='isAdmin'
						id='isAdmin'
						placeholder='Admin'

						// value={ isAdmin }
						checked={isAdmin}
						onChange={(e) => setIsAdmin(e.target.checked)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>

					<input
						type='text'
						name='role'
						id='role'
						placeholder='User Role'
						value={role}
						onChange={(e) => setRole(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>

					<button
						type='submit'
						className=' w-full mt-5 bg-red-500 text-white hover:bg-indigo-500 font-medium py-3 rounded-md'
					>
						Update
					</button>
				</form>
			</div>
		</>
	);
};

export default UserEdit;
