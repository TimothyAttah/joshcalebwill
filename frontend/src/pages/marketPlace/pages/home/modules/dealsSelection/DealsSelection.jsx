import dealsImg from '../../../../../../assets/who6.png'

const DealsSelection = () => {
  return (
		<section className='section__container deals__container'>
			<div className='deals__image'>
				<img src={dealsImg} alt='' />
      </div>

			<div className='deals__content'>
				<h5>Get up To 20% Discount</h5>
				<h4>Deals Of This Month</h4>
				<p>
					Our Market Deals of the month are here to make your
					dreams a reality without breaking the bank. Discover a curated
					collection of exquisite safety, health, and instrumentation, all
					handpicked to elevate your workers.
				</p>
				<div className='deals__countdown flex-wrap'>
					<div className='deals__countdown__card'>
						<h4>14</h4>
						<p>Days</p>
					</div>
					<div className='deals__countdown__card'>
						<h4>20</h4>
						<p>Hours</p>
					</div>
					<div className='deals__countdown__card'>
						<h4>15</h4>
						<p>Mins</p>
					</div>
					<div className='deals__countdown__card'>
						<h4>05</h4>
						<p>Secs</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DealsSelection
