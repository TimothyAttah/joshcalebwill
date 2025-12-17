import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../../../../reduxMarketNew/actions/productAction';
import * as Styles from './CreateProductStyles'

const ProductCreate = () => {
	const navigate = useNavigate();

	const [uploading, setUploading] = useState(false);

	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [oldPrice, setOldprice] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState(null);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (successUpdate) {
	// 		dispatch({ type: PRODUCT_TYPES.PRODUCT_UPDATE_RESET });
	// 		navigate('/admin/productlist');
	// 	} else {
	// 		if (!product.name || product._id !== id) {
	// 			dispatch(listProductDetails(id));
	// 		} else {
	// 			setName(product.name);
	// 			setPrice(product.price);
	// 			setImage(product.image);
	// 			setBrand(product.brand);
	// 			setCategory(product.category);
	// 			setCountInStock(product.countInStock);
	// 			setDescription(product.description);
	// 		}
	// 	}
	// }, [product, id, dispatch, navigate, successUpdate]);

	const uploadFileHandler = async (e) => {
		try {
			const file = e.target.files[0];

			const imageData = new FormData();
			imageData.append('file', file);
			imageData.append('upload_preset', 'joshcaleb');
			imageData.append('cloud_name', 'timothycloud');

			setUploading(true);

			const { data } = await axios.post(
				'https://api.cloudinary.com/v1_1/timothycloud/image/upload',
				imageData,
			);

			console.log('Image data in cloud', data);
			setImage(data.secure_url);
			setUploading(false);
		} catch (err) {
			console.log(err);
		}

		//api.cloudinary.com/v1_1/{cloud_name}/image/upload

		// https: setUploading(true);

		// console.log(e.target.files[0]);

		// setImage(e.target.files[0]);
		// setSelectedImage(e.target.files[0]);

		// const formData = new FormData();
		// formData.append('image', selectedImage); // 'image' is the field name Multer will expect

		//  axios
		// 	.post('/api/upload', formData, {
		// 		headers: {
		// 			'Content-Type': 'multipart/form-data',
		// 		},
		// 	})
		// 	.then((response) => console.log(response.data))
		// 	.catch((error) => console.error(error));

		// try {
		// 	const config = {
		// 		headers: {
		// 			'Content-Type': 'multipart/form-data',
		// 		},
		// 	};

		// 	const { data } = await axios.post(
		// 		'http://localhost:5000/api/upload',
		// 		// 'https://scentsmiths-backend.vercel.app/',
		// 		formData,
		// 		config,
		// 	);
		// 	console.log(data);

		// 	setImage(data);
		// 	setUploading(false);
		// } catch (err) {
		// 	console.log(err);
		// 	setUploading(false);
		// }

		// console.log(image);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		const newProduct = {
			name,
			price,
			oldPrice,
			color,
			category,
			description,
			image,
		};

    dispatch(createProduct(newProduct));

    console.log(newProduct);

	};

	return (
		<Styles.Container>
			<Styles.Back>
				<Link to='/admin/productlist' className='btn btn-light my-3'>
					Go Back
				</Link>
			</Styles.Back>
			<Styles.Form
				className=' space-y-5 max-w-sm mx-auto pt-8'
				onSubmit={submitHandler}
			>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter your name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<div>
					<label htmlFor='category'>category</label>
					<input
						type='text'
						name='category'
						id='category'
						placeholder='Enter your category'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<div>
					<label htmlFor='price'>Price</label>
					<input
						type='text'
						name='price'
						id='price'
						placeholder='Enter your price'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>
				<div>
					<label htmlFor='oldPrice'>Old Price</label>
					<input
						type='text'
						name='oldPrice'
						id='oldPrice'
						placeholder='Enter your Old Price'
						value={oldPrice}
						onChange={(e) => setOldprice(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<div>
					<label htmlFor='description'>description</label>
					<input
						type='text'
						name='description'
						id='description'
						placeholder='Enter your description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<div>
					<label htmlFor='color'>Color</label>
					<input
						type='text'
						name='color'
						id='color'
						placeholder='Enter a color'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<div>
					<label htmlFor="image">Image</label>
					<input
						type='file'
						name='image'
						id='image'
						placeholder='image'
						onChange={uploadFileHandler}
						className=' w-full bg-gray-100 focus:outline-none px-5 py-3'
					/>
				</div>

				<button
					type='submit'
					className=' w-full mt-5 bg-red-500 text-white hover:bg-indigo-500 font-medium py-3 rounded-md'
				>
					Update
				</button>
			</Styles.Form>
		</Styles.Container>
	);
};

export default ProductCreate;
