import * as Styles from './HealthPolicyStyles';
import hse1 from '../../../assets/hse3.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import { healthPolicyData } from './healthPolicyData';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const HealthPolicy = () => {
	return (
		<Styles.HealthPolicyContainer>
			<FadeInAlways delay={0.2} direction='down'>
				<Styles.HealthPolicyTitle>
					<Styles.TitleBox>
						<FadeInAlways delay={0.3} direction='right'>
							<h1>
								Joshcalebwill Petroleum Health Safety & Environment Policy.
							</h1>
						</FadeInAlways>
						<FadeInAlways delay={0.4} direction='right'>
							<p>
								It is the policy of Joshcalebwill to conduct its activities in a
								manner that will protect safety, health and the environment. To
								this end, the company will:
							</p>
						</FadeInAlways>
					</Styles.TitleBox>
					<FadeInAlways delay={0.4} direction='left'>
						<img src={hse1} alt='' loading='lazy' />
					</FadeInAlways>
				</Styles.HealthPolicyTitle>
			</FadeInAlways>
			<Styles.HealthPolicyItemWrapper>
				{healthPolicyData.map((item, i) => (
					<FadeInAlways delay={0.1 * i + 1} direction='right'>
						<Styles.HealthPolicyItem>
							<FaCheckCircle />
							<p>{item}</p>
						</Styles.HealthPolicyItem>
					</FadeInAlways>
				))}
			</Styles.HealthPolicyItemWrapper>
			<Styles.HealthPolicyDesc>
				<FadeInAlways delay={0.4} direction='left'>
					<p>
						Employees are responsible for compliance with all corporate
						policies, procedures, best practices and laws to their assigned
						duties and responsibilities. <br /> All employees must report any
						dangerous, unsafe or environmentally damaging acts, events,
						procedures, omission and equipment that are directly related to
						Joshcalebwill property or activities
					</p>
				</FadeInAlways>
			</Styles.HealthPolicyDesc>
		</Styles.HealthPolicyContainer>
	);
};

export default HealthPolicy;
