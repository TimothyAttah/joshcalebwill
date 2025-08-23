import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './ProductsStyles';
import Rating from '../rating/Rating';


const Products = ({ product }) => {
	return (
		<Styles.ProductItemontainer>
			<Link to={`/product/${product._id}`}>
				<Styles.ProductItem>
					<img src={product.image} alt='' />
				</Styles.ProductItem>
			</Link>

			<Styles.ProductBody>
				<Link to={`/product/${product._id}`}>
					<h4>{product.name}</h4>
				</Link>

				<Styles.ProductText>
					<Rating
						product={product}
						value={product.rating}
            text={ `${product.numReviews} reviews` }
            color='gold'
					/>
				</Styles.ProductText>

				<h3>${product.price}</h3>
			</Styles.ProductBody>
		</Styles.ProductItemontainer>
	);
};

export default Products;
