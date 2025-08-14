import * as Styles from './SliderStyles'
import pix1 from '../../assets/pix-9.jpg'

const Slider = () => {
  return (
		<Styles.SliderContainer>
			<Styles.SliderWrapper>
				<Styles.SliderLists>
					<Styles.SliderListItemContents>
						<h1>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
							aliquid commodi magni vel ex harum.
						</h1>
					</Styles.SliderListItemContents>
					<Styles.SliderListItemImg>
						<img src={pix1} alt='' />
					</Styles.SliderListItemImg>
				</Styles.SliderLists>
			</Styles.SliderWrapper>
		</Styles.SliderContainer>
	);
}

export default Slider