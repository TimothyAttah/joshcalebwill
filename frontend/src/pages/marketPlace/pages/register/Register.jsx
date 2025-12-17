import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../../reduxMarketNew/actions/userActions';
import { useDispatch } from 'react-redux';
import * as Styles from '../login/LoginStyles'

const Register = () => {
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		const data = { name, email, password };

		dispatch(register(data));
		navigate('/market/login');
	};
	return (
		<section className=' h-screen flex items-center justify-center'>
			<Styles.Container className=' max-w-sm shadow bg-white mx-auto p-8'>
				<h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
				<Styles.Form
					onSubmit={handleRegister}
					className=' space-y-5 max-w-sm mx-auto pt-8'
				>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							required
							onChange={(e) => setName(e.target.value)}
							className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
						/>
					</div>

					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email Address'
							required
							onChange={(e) => setEmail(e.target.value)}
							className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
						/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							required
							onChange={(e) => setPassword(e.target.value)}
							className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
						/>
					</div>
					{message && <p className=' text-red-500'>{message}</p>}

					<button
						type='submit'
						className=' w-full mt-5 bg-red-500 text-white hover:bg-indigo-500 font-medium py-3 rounded-md'
					>
						Register
					</button>
				</Styles.Form>
				<p
					className=' my-5 italic text-sm text-center'
					style={{ margin: '10px 0' }}
				>
					Already have an account?{' '}
					<Link to='/market/login' className=' text-red-700 px-1 underline'>
						Login
					</Link>{' '}
					here.
				</p>
			</Styles.Container>
		</section>
	);
};

export default Register;
