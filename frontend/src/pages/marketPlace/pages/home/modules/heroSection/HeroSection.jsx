import styled from 'styled-components';
import card1 from '../../../../../../assets/card-3.jpg';
import card2 from '../../../../../../assets/card-2.jpg';
import card3 from '../../../../../../assets/card-1.jpg';

export const CardContainer = styled.div`
position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const CardHeroContent = styled.div`
	background: var(--main-color-g);
	padding: 10px;

	h4, a {
		color: #fff !important;
	}

`


const HeroSection = () =>
{
  const cards = [
		{
			id: 1,
			image: card1,
			trand: '2025 Trand',
			title: 'Cooking gas',
		},
		{
			id: 2,
			image: card2,
			trand: '2025 Trand',
			title: 'Diesel',
		},
		{
			id: 3,
			image: card3,
			trand: '2025 Trand',
			title: 'Gasoline',
		},
	];
  return (
    <div className='secrion__container hero__container'>
      {
        cards.map((card) => (
          <CardContainer key={card.id} className='hero__card'>
            <img src={ card.image } alt="" />
            <CardHeroContent className='hero__content'>
              <p>{ card.trand }</p>
              <h4>{ card.title }</h4>
              <a href="#"> Discover More</a>
            </CardHeroContent>
          </CardContainer>
        ))
      }
    </div>
  )
}

export default HeroSection
