import React from 'react'

const SliptText = () => {
  return (
		<div>
			<nav>
				<div className='menu-toggle'>
					<p>Menu</p>
				</div>
				<p>Collection</p>
			</nav>

			<div className='container'>
				<div className='menu-container'>
					<div className='menu'>
						<div className='menu-top'>
							<div className='menu-top-title'>
								<p>Discover</p>
							</div>
							<div className='menu-top-content'>
								<div className='menu-item'>
									<div className='menu-item-link'>
										<div className='bg-hover'></div>
										<a href=''>Story</a>
									</div>
									<span>Page 001</span>
								</div>

								<div className='menu-item'>
									<div className='menu-item-link'>
										<div className='bg-hover'></div>
										<a href=''>Protocol</a>
									</div>
									<span>Page 002</span>
								</div>

								<div className='menu-item'>
									<div className='menu-item-link'>
										<div className='bg-hover'></div>
										<a href=''>Contact</a>
									</div>
									<span>Page 003</span>
								</div>

								<div className='menu-item'>
									<div className='menu-item-link'>
										<div className='bg-hover'></div>
										<a href=''>Gallery</a>
									</div>
									<span>Page 004</span>
								</div>
							</div>
						</div>

						<div className='menu-bottom'></div>
					</div>

					<div className='menu-sidebar'></div>
				</div>
			</div>
		</div>
	);
}

export default SliptText
