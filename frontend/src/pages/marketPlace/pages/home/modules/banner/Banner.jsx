import { Link } from 'react-router-dom';
import bannerImg from '../../../../../../assets/trendPic1.png'
import * as Styles from './BannerStyles'

const Banner = () => {
  return (
    <Styles.BannerContainer className='section__container header__container'>
      <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 50% Discount on</h4>
        <h1>Safty & Health</h1>
        <p>
          Dicover the latest trends and express your unique views with our products website. Explore a curated collection of lubricants, safety, and instrumentations that caters to every work and occasion.

        </p>
        <button className="btn"><Link to='/shop'>EXPLORE NOW</Link></button>
      </div>
      <Styles.BannerImgContainer className='header__image'>
        <img src={bannerImg} alt="banner image" />
      </Styles.BannerImgContainer>
    </Styles.BannerContainer>
  )
}

export default Banner
