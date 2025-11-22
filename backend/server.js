import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import connectDB from './config/db.js';
import authRoutes from './src/users/user.route.js'
import productRoutes from './src/products/product.routes.js';
import reviewsRoutes from './src/reviews/reviews.routes.js';



const app = express();
connectDB();

// middleware setup
app.use(express.json({limit: '25mb'}));
// app.use(express.urlencoded({ limit: '25mb' }))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))


// all routes
app.get('/', (req, res) => {
	res.send('Joshcalebwill E-commerce Server is running');
});

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewsRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
