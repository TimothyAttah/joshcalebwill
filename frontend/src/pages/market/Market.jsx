
import * as Styles from './MarketStyles';
import Products from '../products/Products';
import MarketHeader from './marketHeader/MarketHeader';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Market = () => {
	const { products, error, loading } = useSelector(
		(state) => state.productLists,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<>
			<MarketHeader />
			<Container>
				<div>Latest Products</div>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Row>
						{products?.map((product, i) => (
							<Col sm={12} md={6} xl={4} key={i}>
								<Products product={product} />
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	);
};

export default Market;
