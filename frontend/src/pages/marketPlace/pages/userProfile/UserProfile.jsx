import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../../../reduxMarketNew/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserProfile = () => {
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.user);

	console.log(user);

	useEffect(() => {
		if (!user) {
			navigate('/market/login');
		} else {
			setName(user.name);
			setEmail(user.email);
		}
	}, []);

	const handleProfileUpdate = async (e) => {
		e.preventDefault();
		const data = { name, email };
		dispatch(updateUserProfile(data));
	};

	return (
		<>
			<div className=' max-w-sm border shadow bg-white mx-auto p-8'>
				<h2 className='text-2xl font-semibold pt-5'>User Profile</h2>
				<form
					className=' space-y-5 max-w-sm mx-auto pt-8'
					onSubmit={handleProfileUpdate}
				>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email Address'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>

					{message && <p className=' text-red-500'>{message}</p>}

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

export default UserProfile;
