import * as Styles from './CarrersStyles';
import cultPix1 from '../../assets/car5.png';
import cultPix2 from '../../assets/car7.png';
import cultPix3 from '../../assets/car11.png';
import cultPix4 from '../../assets/car10.png';
import pix1 from '../../assets/car1.png';
import Copy from '../../components/copyText/CopyText';
import { ReactLenis } from 'lenis/react';
import LazyImage from '../../components/LazyImage';
import Transition from '../../components/Transition';

const Careers = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.Careers>
					<Styles.CareersHero>
						{/* <img alt='' /> */}
						<LazyImage src={pix1} />
						<Styles.BlendModeTitle>Careers</Styles.BlendModeTitle>
					</Styles.CareersHero>
					<Styles.CareersInfo>
						<Copy delay={0.5}>
							<p>
								Team members of all experience levels tackle global, real world
								problems facing our business.
							</p>
						</Copy>
					</Styles.CareersInfo>

					<Styles.CareersOptions>
						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								{/* <img alt='' /> */}
								<LazyImage src={cultPix1} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo first>
								<Copy delay={0.5}>
									<h4>careers at joshcalewill</h4>
									{/* <p>
										Joshcalebwill only accepts job applications through our
										Careers website. The site features information about careers
										at Joshcalebwill and current job openings.
									</p> */}
									<p>
										At Joshcalebwill, we believe that people are the driving
										force behind every success. Our strength lies not only in
										our expertise but in the dedication, passion, and integrity
										of our team. We are building a community of professionals
										who share a common purpose — to deliver excellence, uphold
										values, and make a lasting impact in the oil and gas
										industry and beyond.
									</p>
									<p>
										When you join Joshcalebwill, you become part of a family
										that values growth, innovation, and faith-driven leadership.
										We provide an environment that encourages learning,
										collaboration, and the pursuit of purpose. Whether in the
										field, the office, or through community engagement, every
										role contributes to something greater — shaping a
										sustainable and prosperous future.
									</p>
									<p>
										Together, we work not just for profit, but with purpose —
										guided by principles of stewardship, trust, and service to
										humanity.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix2} alt='' /> */}
								<LazyImage src={cultPix2} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo second>
								<Copy delay={0.5}>
									<h4>service station employment</h4>
									{/* <p>
										Joshcalebwill Service Stations, Inc. is looking for Customer
										Service Representatives who are 18 years or older.
									</p> */}
									<p>
										At Joshcalebwill, our service stations are more than just
										fueling points — they’re places where dedication, teamwork,
										and customer care come to life. We believe every team member
										plays a vital role in delivering the quality, safety, and
										excellence our customers trust.
									</p>
									<p>
										Working at a Joshcalebwill service station means being part
										of a dynamic environment that values respect, reliability,
										and growth. From station attendants to supervisors and
										managers, each individual contributes to ensuring smooth
										operations and outstanding service every day.
									</p>
									<p>
										We provide continuous training and development opportunities
										to help our staff build skills, achieve career goals, and
										take pride in being part of a company that puts people
										first.
									</p>
									<p>
										Join us — and be part of a purpose-driven team that keeps
										communities moving, safely and efficiently.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix3} alt='' /> */}
								<LazyImage src={cultPix3} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo third>
								<Copy delay={0.5}>
									<h4>students and recent grads</h4>
									{/* <p>
										Meet employees and recruiters on your college campus or at a
										special event.
									</p> */}
									<p>
										At Joshcalebwill, we believe the future of the energy
										industry lies in the hands of young, passionate, and
										innovative minds. That’s why we offer exciting opportunities
										for students and recent graduates to learn, grow, and make a
										meaningful impact.
									</p>
									<p>
										Whether you’re completing your studies or just starting your
										career journey, we provide mentorship, real-world
										experience, and a supportive environment that encourages
										creativity and excellence. From internships to entry-level
										roles, you’ll have the chance to work alongside industry
										professionals and contribute to projects that shape
										communities and power progress.
									</p>
									<p>
										We’re not just building careers — we’re nurturing future
										leaders. If you’re driven by curiosity, integrity, and a
										desire to make a difference, Joshcalebwill is the perfect
										place to begin your journey.
									</p>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>

						<Styles.CareersOptionsList second>
							<Styles.CareersOptionsListImg>
								{/* <img src={cultPix4} alt='' /> */}
								<LazyImage src={cultPix4} />
							</Styles.CareersOptionsListImg>
							<Styles.CareersOptionsListInfo fourth>
								<Copy delay={0.5}>
									<h4>recruiting fraud</h4>
									{/* <p>
										Joshcalebwill never seeks fees from job applicants under any
										circumstances. If you receive a job offer that you believe
										is fraudulent, contact your local law enforcement agency.
									</p> */}

									<p>
										At Joshcalebwill, we take the integrity of our recruitment
										process seriously. Please be aware that recruitment fraud is
										a growing issue where unauthorized individuals or
										organizations falsely claim to represent Joshcalebwill in
										order to obtain personal information or money from job
										seekers.
									</p>

									<div>
										<p>We want to make it clear that:</p>
										<ul>
											<li>
												Joshcalebwill does not charge any fees at any stage of
												the recruitment process.
											</li>
											<li>
												All legitimate job openings are listed on our official
												website or communicated directly through our verified
												company channels.
											</li>
											<li>
												Our recruitment team will never request payment, bank
												details, or personal financial information during the
												hiring process.
											</li>
										</ul>

										<p>
											If you receive any suspicious communication, please do not
											respond or share your personal details. Instead, contact
											us directly through our official channels to verify the
											authenticity of the job offer.
										</p>
										<p>
											Your safety and trust are important to us — thank you for
											helping us maintain a transparent and secure recruitment
											process.
										</p>
									</div>
								</Copy>
							</Styles.CareersOptionsListInfo>
						</Styles.CareersOptionsList>
					</Styles.CareersOptions>
				</Styles.Careers>
			</ReactLenis>
		</>
	);
};

export default Transition(Careers);
