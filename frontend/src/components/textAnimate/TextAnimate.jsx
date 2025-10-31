import Character from './Character';
import * as Styles from './TextAnimateStyles';

const value = `
we believe that no challenge is beyond human capability. Our
people remain our greatest strength — guided by responsibility,
trust, and integrity as we drive progress and build a sustainable,
prosperous future.
`;

const TextAnimate = () => {
	return (
		<Styles.TextAnimateContainer>
			<Styles.TextAnimateText>
				<Character value={value} />
			</Styles.TextAnimateText>
		</Styles.TextAnimateContainer>
	);
};

export default TextAnimate;
