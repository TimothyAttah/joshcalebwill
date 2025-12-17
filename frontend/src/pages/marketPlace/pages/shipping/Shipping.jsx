import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shippingOptions } from '../../../../utils/shipping';
import { useState } from 'react';
import * as Styles from './ShippingStyles';
import Overlay from '../../../../components/Overlay';
import { FaDotCircle, FaTimesCircle } from 'react-icons/fa';
import { saveShippingAddress } from '../../../../reduxMarketNew/actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps';

const Shipping = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	// const location = useLocation();
	const [openShippingAddress, setOpenShippingAddress] = useState(false);
	const [openShippingMethod, setOpenShippingMethod] = useState(false);

	const shippingAddress  = useSelector((state) => state.cart.shippingAddress);
	console.log('This is shipping address', shippingAddress);

	const { user } = useSelector((state) => state.user);

	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user?.email);
	const [phoneNumber, setPhoneNumber] = useState(shippingAddress?.phoneNumber);
	const [address, setAddress] = useState(shippingAddress?.address);
	const [country, setCountry] = useState(shippingAddress?.country);
	const [state, setState] = useState(shippingAddress?.state);
	const [city, setCity] = useState(shippingAddress?.city);
	const [shippingMethodPrice, setShippingMethodPrice] = useState({});
	const [shippingPriceValue, setShippingPriceValue] = useState('');

	const dispatch = useDispatch();

	const submitHadler = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			phoneNumber,
			address,
			country,
			state,
			city,
		};

		dispatch(saveShippingAddress(data));
		navigate('/market/payment')
	};

	return (
		<div>
			<CheckoutSteps step1 step2 />
			<Styles.ShippingTitle>Shipping</Styles.ShippingTitle>
			<Styles.ShippingForm onSubmit={submitHadler}>
				<div>
					<label>Name</label>
					<input
						type='text'
						name='name'
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Phone Number</label>
					<input
						type='text'
						name='phoneNumber'
						value={phoneNumber}
						required
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div>
					<label>Address</label>
					<input
						type='text'
						name='address'
						value={address}
						required
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div>
					<label>Country</label>
					<input
						type='country'
						name='country'
						value={country}
						required
						onChange={(e) => setCountry(e.target.value)}
					/>
				</div>
				<div>
					<label>State</label>
					<input
						type='state'
						name='state'
						value={state}
						required
						onChange={(e) => setState(e.target.value)}
					/>
				</div>
				<div>
					<label>City (Optional)</label>
					<input
						type='city'
						name='city'
						value={city}
						required
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>
				<button type='submit' variant='primary'>
					Continue
				</button>
			</Styles.ShippingForm>

			{openShippingAddress && (
				<>
					<Overlay onClick={() => setOpenShippingAddress(false)} />
					<Styles.ShippingContainer>
						<Styles.ShippingCloseBox>
							<h4>Change Delivery Details</h4>
							<button onClick={() => setOpenShippingAddress(false)}>
								<FaTimesCircle />
							</button>
						</Styles.ShippingCloseBox>
						<form onSubmit={submitHadler}>
							<div>
								<label>Name</label>
								<input
									type='text'
									name='name'
									value={name}
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label>Email</label>
								<input
									type='email'
									name='email'
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label>Phone Number</label>
								<input
									type='text'
									name='phoneNumber'
									value={phoneNumber}
									required
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
							<div>
								<label>Address</label>
								<input
									type='text'
									name='address'
									value={address}
									required
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div>
								<label>Country</label>
								<input
									type='country'
									name='country'
									value={country}
									required
									onChange={(e) => setCountry(e.target.value)}
								/>
							</div>
							<div>
								<label>State</label>
								<input
									type='state'
									name='state'
									value={state}
									required
									onChange={(e) => setState(e.target.value)}
								/>
							</div>
							<div>
								<label>City (Optional)</label>
								<input
									type='city'
									name='city'
									value={city}
									required
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<button type='submit' variant='primary'>
								Continue
							</button>
						</form>
					</Styles.ShippingContainer>

					{openShippingMethod && (
						<>
							<Overlay />
							<Styles.ShippingContainer>
								<Styles.ShippingCloseBox>
									<button>
										<FaTimesCircle />
									</button>
								</Styles.ShippingCloseBox>

								{shippingOptions.map((item, i) => (
									<Styles.DeliveryDetailsShippingList>
										<button
											key={i}
											value={JSON.stringify(item)}
											onClick={handleChange}
										>
											<div>
												<FaDotCircle />

												{item.title}
											</div>
											<span>₦{item.price}</span>
										</button>
									</Styles.DeliveryDetailsShippingList>
								))}
							</Styles.ShippingContainer>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Shipping;
