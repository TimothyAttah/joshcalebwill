import * as Styles from './QualityPolicyStyles';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const QualityPolicy = () => {
	return (
		<Styles.QualityPolicyContainer>
			<Styles.QualityPolicy>
				<Styles.QualityPolicyTitle>
					<FadeInAlways delay={0.1} direction='down'>
						<h1>Quality Policy Statement</h1>
					</FadeInAlways>
					<FadeInAlways delay={0.3} direction='down'>
						<p>
							At Joshcalebwill, we are committed to delivering world-class oil,
							gas, and energy services that meet and exceed the expectations of
							our clients, partners, and stakeholders. Our quality management
							approach is built on the principles of{' '}
							<span>integrity, excellence, and continuous improvement</span>.
						</p>
					</FadeInAlways>
					<FadeInAlways delay={0.5} direction='down'>
						<p>We strive to:</p>
					</FadeInAlways>
				</Styles.QualityPolicyTitle>
				<Styles.QualityPolicyWrapper>
					<FadeInAlways delay={0.5} direction='down'>
						<Styles.QualityPolicyItemBox>
							<Styles.QualityPolicyNumber>1</Styles.QualityPolicyNumber>

							<Styles.QualityPolicyItemContent>
								<h4>
									Provide safe, reliable, and innovative solutions in every
									project we undertake.
								</h4>
								<p>
									We ensure every service we deliver is rooted in safety,
									reliability, and innovation to support efficient and
									sustainable operations.
								</p>
							</Styles.QualityPolicyItemContent>
						</Styles.QualityPolicyItemBox>
					</FadeInAlways>

					<FadeInAlways delay={0.6} direction='down'>
						<Styles.QualityPolicyItemBox>
							<Styles.QualityPolicyNumber>2</Styles.QualityPolicyNumber>
							<Styles.QualityPolicyItemContent>
								<h4>
									Adhere to international standards, industry best practices,
									and regulatory requirements.
								</h4>
								<p>
									Our work adheres strictly to international standards, industry
									best practices, and all regulatory requirements.
								</p>
							</Styles.QualityPolicyItemContent>
						</Styles.QualityPolicyItemBox>
					</FadeInAlways>

					<FadeInAlways delay={0.7} direction='down'>
						<Styles.QualityPolicyItemBox>
							<Styles.QualityPolicyNumber>3</Styles.QualityPolicyNumber>
							<Styles.QualityPolicyItemContent>
								<h4>
									Continuously enhance our systems, processes, and competencies
									through training and innovation.
								</h4>
								<p>
									Through training, technology, and innovation, we continuously
									improve our processes to exceed client expectations.
								</p>
							</Styles.QualityPolicyItemContent>
						</Styles.QualityPolicyItemBox>
					</FadeInAlways>

					<FadeInAlways delay={0.8} direction='down'>
						<Styles.QualityPolicyItemBox>
							<Styles.QualityPolicyNumber>4</Styles.QualityPolicyNumber>
							<Styles.QualityPolicyItemContent>
								<h4>
									Foster a culture of accountability, teamwork, and quality
									consciousness at every level of the organization.
								</h4>
								<p>
									We promote a culture where every team member is accountable
									for upholding excellence and quality in their work.
								</p>
							</Styles.QualityPolicyItemContent>
						</Styles.QualityPolicyItemBox>
					</FadeInAlways>

					<FadeInAlways delay={0.9} direction='down'>
						<Styles.QualityPolicyItemBox>
							<Styles.QualityPolicyNumber>5</Styles.QualityPolicyNumber>
							<Styles.QualityPolicyItemContent>
								<h4>
									Build long-term relationships with our clients by delivering
									services on time, within budget, and without compromise to
									safety or quality.
								</h4>
								<p>
									We build strong relationships by delivering projects on time,
									within budget, and with uncompromising quality.
								</p>
							</Styles.QualityPolicyItemContent>
						</Styles.QualityPolicyItemBox>
					</FadeInAlways>
				</Styles.QualityPolicyWrapper>

				<FadeInAlways delay={0.9} direction='up'>
					<Styles.QualityPolicyDesc>
						<p>
							This policy is the foundation of our operations and is
							communicated across all levels of the organization to ensure full
							understanding and commitment. By upholding these principles,
							Joshcalebwill ensures sustainable growth, client satisfaction, and
							global competitiveness in the oil and gas industry.
						</p>
					</Styles.QualityPolicyDesc>
				</FadeInAlways>
			</Styles.QualityPolicy>
		</Styles.QualityPolicyContainer>
	);
};

export default QualityPolicy;
