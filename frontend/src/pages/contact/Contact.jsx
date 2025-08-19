import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import * as Styles from './ContactStyles';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { toast } from 'react-toastify';

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_9zpzp0h', 'template_hljrqhr', form.current, {
				publicKey: 'eR3lwt8AISzVJs0uc',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					toast.success('Message sent successfully');
					setName('')
					sendEmail('');
					setSubject('')
					setMessage('')
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error('Message sent successfully');
				},
			);
	};

	return (
		<Styles.ContactContainer>
			<Styles.ContactHero>
				<h1>Get In Touch With Us</h1>
				<p>
					At Joshcalebwill, we believe that strong partnerships begin with open
					communication. Whether you are seeking expert consultation, requesting
					a service, or simply exploring how we can support your operations, our
					team is ready to assist you.
				</p>
				<p>
					We are committed to providing timely, reliable, and professional
					responses to every inquiry. Your goals are our priority, and we ensure
					that every conversation moves you closer to safe, efficient, and
					sustainable solutions.
				</p>
			</Styles.ContactHero>
			<Styles.ContactSubLinks>
				<h2>How We Can Help You</h2>
				<ul>
					<li>
						Learn more about our
						<Link>Chemical Supply & Treatments</Link>
					</li>
					<li>
						Explore our
						<Link>Gas Compression Services</Link>
					</li>
					<li>
						Discuss
						<Link>Pipeline Construction & Maintenance</Link> projects
					</li>
					<li>
						Request guidance on
						<Link>Health, Safety, and Environmental Consultancy</Link>
					</li>
					<li>
						Or simply reach out for
						<Link> tailored energy solutions</Link>
					</li>
				</ul>
			</Styles.ContactSubLinks>
			<Styles.ContactWrapper>
				<Styles.ContactInfo>
					<h2>Get in Touch</h2>
					<Styles.ContactInfoList>
						<h4>📍 Head Office:</h4>
						<p>
							Plot 20B Close United Estate <br /> Alagbole, Ogun State
						</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>📞 Phone:</h4>
						<p>+2348023169986</p>
						<p>+2348162073680</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>📧 Email:</h4>
						<p>[Insert phone number here]</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoList>
						<h4>🕒 Office Hours:</h4>
						<p>Monday – Friday: 9:00 AM – 5:00 PM</p>
						<p>Saturday: 10:00 AM – 2:00 PM</p>
					</Styles.ContactInfoList>
					<Styles.ContactInfoLinks>
						<h2>Stay Connected</h2>
						<p>
							Follow us on our digital platforms to keep up with our latest
							projects, innovations, and industry insights.
						</p>
						<Styles.ContactInfoLinksWrapper>
							<Link>
								<FaFacebook />
							</Link>
							<Link>
								<FaInstagram />
							</Link>
							<Link>
								<FaTwitter />
							</Link>
						</Styles.ContactInfoLinksWrapper>
					</Styles.ContactInfoLinks>
				</Styles.ContactInfo>

				<Styles.ContactForm>
					<h2>Quick Contact Form</h2>
					<p>
						Have a question? Send us a message, and our team will get back to
						you shortly.
					</p>
					<form ref={form} onSubmit={sendEmail}>
						<div>
							<label htmlFor=''>Name</label>
							<input
								type='text'
								name='name'
								onChange={(e) => setName(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Email:</label>
							<input
								type='text'
								name='email'
								onChange={(e) => setEmail(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Subject:</label>
							<input
								type='text'
								name='subject'
								onChange={(e) => setSubject(e.target.name)}
								required
							/>
						</div>
						<div>
							<label htmlFor=''>Message:</label>
							<textarea
								name='message'
								onChange={(e) => setMessage(e.target.name)}
								required
							/>
						</div>
						<button>Send Message</button>
					</form>
				</Styles.ContactForm>
			</Styles.ContactWrapper>
		</Styles.ContactContainer>
	);
};

export default Contact;
