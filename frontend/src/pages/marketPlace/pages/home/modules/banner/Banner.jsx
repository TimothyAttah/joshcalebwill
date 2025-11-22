import { Link } from 'react-router-dom';
import bannerImg from '../../../../../../assets/intro4.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Discount on</h4>
        <h1>Safty & Health</h1>
        <p>
          Dicover the latest trends and express your unique views with our products website. Explore a curated collection of lubricants, safety, and instrumentations that caters to every work and occasion.

        </p>
        <button className="btn"><Link to='/shop'>EXPLORE NOW</Link></button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  )
}

export default Banner
