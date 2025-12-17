import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<div className=' flex justify-center gap-5.5 mb-4'>
			<div>
				{step1 ? (
					<Link to='/market/login'>Sign In</Link>
				) : (
					<Link disabled>Sign In</Link>
				)}
			</div>

			<div>
				{step2 ? (
					<Link to='/market/shipping'>Shipping</Link>
				) : (
					<Link disabled>Shipping</Link>
				)}
			</div>

			<div>
				{step3 ? (
					<Link to='/market/payment'>Payment</Link>
				) : (
					<Link disabled>Payment</Link>
				)}
			</div>

			<div>
				{step4 ? (
					<Link to='/market/placeorder'>Place Order</Link>
				) : (
					<Link disabled>Place Order</Link>
				)}
			</div>
		</div>
	);
};

export default CheckoutSteps;
