
import * as Styles from './MarketStyles';
import products from './products';
import Products from './products/Products';
import MarketHeader  from './marketHeader/MarketHeader';

const Market = () => {
	return (
		<>
			<MarketHeader/>
			<Styles.MarketProductsContainer>
					<h1>Latest Products</h1>
				<Styles.MarketProductsWrapper>

					{products.map((product) => (
						<Products key={product._id} product={product} />
					))}
				</Styles.MarketProductsWrapper>
			</Styles.MarketProductsContainer>
		</>
	);
};

export default Market;
