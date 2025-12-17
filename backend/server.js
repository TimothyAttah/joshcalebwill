import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import axios from 'axios';

import connectDB from './config/db.js';
// import authRoutes from './src/users/user.route.js'
// import productRoutes from './src/products/product.routes.js';
// import reviewsRoutes from './src/reviews/reviews.routes.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
connectDB();

// middleware setup
app.use(express.json({ limit: '25mb' }));
// app.use(express.urlencoded({ limit: '25mb' }))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(cors({
// 	origin: 'http://localhost:5173',
// 	credentials: true
// }))

// all routes
app.get('/', (req, res) => {
	res.send('Joshcalebwill E-commerce Server is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);

app.post('/api/contact', async (req, res) => {
	// try {
	// 	const resend = new Resend(process.env.RESEND_API_KEY);
	// 	const { name, email, subject, message } = req.body;

	// 	await resend.emails.send({
	// 		from: 'joshcalebwill.com <william@joshcalebwill.com>',
	// 		to: ['william@joshcalebwill.com'],
	// 		subject: 'New Contact Form Submission',
	// 		html: `
	//       <h3>New Message</h3>
	//       <p><strong>Name:</strong> ${name}</p>
	//       <p><strong>Subject:</strong> ${subject}</p>
	//       <p><strong>Email:</strong> ${email}</p>
	//       <p>${message}</p>
	//     `,
	// 	});

	// 	return res.status(200).json({msg:'Message sent successfully'})

	// } catch (err) {
	// 	return res.json({ success: false, err });
	// }

	// try {
	// 	const resend = new Resend(process.env.RESEND_API_KEY);
	// 	const { name, email, subject, message } = req.body;

	// 	await resend.emails.send({
	// 		from: 'Josh Caleb Will <william@joshcalebwill.com>', // YOUR VERIFIED DOMAIN EMAIL
	// 		to: ['william@joshcalebwill.com'], // YOU RECEIVE IT
	// 		replyTo: email, // USER EMAIL
	// 		subject: subject || 'New Contact Form Submission',
	// 		html: `
	// 			<h3>New Message</h3>
	// 			<p><strong>Name:</strong> ${name}</p>
	// 			<p><strong>Email:</strong> ${email}</p>
	// 			<p><strong>Subject:</strong> ${subject}</p>
	// 			<p>${message}</p>
	// 		`,
	// 	});

	// 	return res.status(200).json({ msg: 'Message sent successfully' });
	// } catch (err) {
	// 	console.error(err);
	// 	return res.status(500).json({ success: false });
	// }
	// try {
	// 	console.log('REQ BODY:', req.body);
	// 	console.log('RESEND KEY EXISTS:', !!process.env.RESEND_API_KEY);

	// 	const resend = new Resend(process.env.RESEND_API_KEY);
	// 	const { name, email, subject, message } = req.body;

	// 	const data = await resend.emails.send({
	// 		from: 'Joshcalebwill Website <info@joshcalebwill.com>',
	// 		to: ['info@joshcalebwill.com'],
	// 		replyTo: email,
	// 		subject: subject || 'New Contact Form Submission',
	// 		html: `
  //       <h3>New Message</h3>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p>${message}</p>
  //     `,
	// 	});

	// 	console.log('RESEND RESPONSE:', data);

	// 	res.status(200).json({ success: true });
	// } catch (err) {
	// 	console.error('RESEND ERROR:', err);
	// 	res.status(500).json({ success: false, error: err.message });
	// }

	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res
			.status(400)
			.json({ success: false, error: 'All fields are required.' });
	}

	try {
		const response = await axios.post(
			'https://api.resend.com/emails',
			{
				from: 'joshcalewill.com <william@joshcalebwill.com>', // Must be a verified sender in Resend
				to: 'william@joshcalebwill.com', // Your inbox to receive messages
				subject: `New message from ${name}: ${subject}`,
				html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
					'Content-Type': 'application/json',
				},
			},
		);

		console.log('RESEND RESPONSE:', response);

		res
			.status(200)
			.json({ success: true, message: 'Message sent successfully!' });
	} catch (error) {
		console.error('Resend API Error:', error.response?.data || error.message);
		res.status(500).json({
			success: false,
			error: 'Failed to send message. Please try again later.',
		});
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
