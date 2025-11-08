import Character from './Character';
import * as Styles from './TextAnimateStyles';

// const value = `
// we believe that no challenge is beyond human capability. Our
// people remain our greatest strength — guided by responsibility,
// trust, and integrity as we drive progress and build a sustainable,
// prosperous future.
// `;

const value = `
We belive that no challenge is beyond a people under the LORD GOD.
Our people remains our great strength, guided by responsibilty, spirit of excellence, trust and integrity.
We drive prosperous  and a sustainable prosperous future for all concerned
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
