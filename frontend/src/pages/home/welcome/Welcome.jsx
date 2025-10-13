import WelcomeGallery from './WelcomeGallery';
import * as Styles from './WelcomeStyles'

const Welcome = () => {
  return (
		<Styles.Welcome>
			<Styles.WelcomeText>
				<small>Welcome to Joshcalebwill Petroluem Limited</small>
				<h4>
					We are a dynamic and forward-thinking international energy company in
					Nigeria
				</h4>
				<p>
					we believe that humanity can solve any challenge. that our greatest
					resource is our people. and that responsibility, trust and integrity
					will help us drive a prosperous future.
				</p>
				<p>
					With our experienced professionals and strategic global partners,
					Joshcalebwill Petroluem Limited is committed to client satisfaction
					and quality performance which guarantees our clients’ confidence in
					the oil and gas business every step of the way.
				</p>
      </Styles.WelcomeText>
      <WelcomeGallery />
		</Styles.Welcome>
	);
}

export default Welcome
