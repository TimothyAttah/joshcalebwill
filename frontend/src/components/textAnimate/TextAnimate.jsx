import { FadeInAlways } from '../fadeIn/FadeInAlways';
import Character from './Character';
import * as Styles from './TextAnimateStyles';

const value = `
The need for energy is universal. That's why Joshcalebwill are pioneering new research and pursuing new technologies to
				reduce emissions while creating more efficient fuels. We're committed to
				responsibly meeting the world's energy needs.

				We believe that humanity can solve any challenge. That our greatest
resource is our people. and that responsibility, trust and integrity
will help us drive a prosperous future.
`;

const TextAnimate = () => {
	return (
		<Styles.TextAnimateContainer>
			<FadeInAlways delay={0.2} direction='down'>
				<Styles.TextAnimateTitle>Who we are</Styles.TextAnimateTitle>
			</FadeInAlways>

			<Styles.TextAnimateText>
				<Character value={value} />
			</Styles.TextAnimateText>
		</Styles.TextAnimateContainer>
	);
};

export default TextAnimate;
