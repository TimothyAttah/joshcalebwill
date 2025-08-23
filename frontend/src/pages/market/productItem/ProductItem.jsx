import * as Styles from './ProductItemStyles';
import { Link, useParams } from 'react-router-dom';
import Rating from '../rating/Rating';
import products from '../products';
import MarketHeader from '../marketHeader/MarketHeader';

const ProductItem = ({ match }) => {
	const { id } = useParams();

	// const product = products.find((p) => p._id === id.params.id);
	const product = products.find((p) => p._id === id);

	return (
		<div>
			<MarketHeader />
			<div>
				<Link to='/market'>Go back</Link>
				<Styles.ProductItemContainer>
					<Styles.ProductItemImg>
						<img src={product.image} alt='' />
					</Styles.ProductItemImg>
					<Styles.ProductItemInfo>
						<h3>{product.name}</h3>
						<div>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</div>
						<div>
							<h4>Price: ${product.price}</h4>
						</div>
						<div>
							<p>Description: {product.description}</p>
						</div>
					</Styles.ProductItemInfo>
					<Styles.ProductItemInfo>
						<div>
							<p>
								Price: <strong>${product.price}</strong>
							</p>
						</div>
						<div>
							<p>
								Status:
							  	<span>
									{product.countInStock > 0 ? 'In stock' : 'Out of stock'}
								</span>
							</p>
						</div>
						<div>
							<button disabled={product.countInStock === 0}>Add To Cart</button>
						</div>
					</Styles.ProductItemInfo>
				</Styles.ProductItemContainer>
			</div>
		</div>
	);
};

export default ProductItem;
