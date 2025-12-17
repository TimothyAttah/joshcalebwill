import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../../components/CheckoutSteps';
import { savePaymentMethod } from '../../../../reduxMarketNew/actions/cartActions';
import styled from 'styled-components';

const PaymentContainer = styled.div``

const PaymentTitle = styled.h2`
	text-transform: uppercase;
	margin-bottom: 30px;
	letter-spacing: 1px;
	max-width: 500px;
	width: 100%;
	margin: 20px auto;
	font-size: 30px;
`;

export const ShippingForm = styled.form`
	max-width: 500px;
	width: 100%;
	margin: 20px auto;

	div {
		width: 100%;
		display: flex;
		gap: 5px;
		margin-bottom: 10px;

		input {
			
			border: 1px solid #ccc;
			padding: 10px;
		}
	}

	button {
		width: 150px;
		height: 40px;
		background-color: var(--main-color-o);
	}
`;


const Payment = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	if (!shippingAddress) {
		navigate('/shipping');
	}

	const [paymentMethod, setPaymentMethod] = useState('Paystack');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod))

		navigate('/market/order');
	};

	return (
		<div>
			<CheckoutSteps step1 step2 step3 />
			<PaymentTitle>Payment Method</PaymentTitle>
			<ShippingForm onSubmit={submitHandler}>
					<label>Select Method</label>
				<div>

					<div>
						<input
							type='radio'
							id='Paystack'
							name='paymentMethod'
							value='paystack'
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label>Paystack</label>
						{/* <Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMethod'
							value='Stripe'
							onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check> */}
					</div>
				</div>

				<button type='submit' variant='primary'>
					Continue
				</button>
			</ShippingForm>
		</div>
	);
};

export default Payment;
