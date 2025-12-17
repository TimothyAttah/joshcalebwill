import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { user } from '../../../components/nav/MarketNav';
import {
	getUserByIdDetails,
	updateUser,
} from '../../../../../reduxMarketNew/actions/userActions';
import {
	updateProduct,
	getProductDetails,
} from '../../../../../reduxMarketNew/actions/productAction';
import * as Styles from './EditProductStyles';

const EditProduct = () => {
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [oldPrice, setOldprice] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState(null);
	const [uploading, setUploading] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	const product = useSelector((state) => state.products.product);

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
	};

	console.log(product);
	useEffect(() => {
		if (!product) {
			dispatch(getProductDetails(id));
		} else {
			setName(product?.name);
			setCategory(product?.category);
			setPrice(product?.price);
			setOldprice(product?.oldPrice);
			setDescription(product?.description);
			setColor(product?.color);
			setImage(product?.image);
		}
	}, [dispatch, product]);

	const handleProfileUpdate = async (e) => {
		e.preventDefault();
		const editProduct = {
			name,
			price,
			oldPrice,
			color,
			category,
			description,
			image,
		};

		dispatch(updateProduct(id, editProduct));
		navigate('/market/dashboard/manage-products');
	};

	return (
		<Styles.Container>
			<Styles.Back>
				<Link
					to='/market/dashboard/manage-products'
					className='btn btn-light my-3'
				>
					Go Back
				</Link>
			</Styles.Back>
			<div className=' max-w-sm border shadow bg-white mx-auto p-8'>
				<h2 className='text-2xl font-semibold pt-5'> Edit Product</h2>
				<Styles.Form
					className=' space-y-5 max-w-sm mx-auto pt-8'
					onSubmit={handleProfileUpdate}
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
						<label htmlFor='image'>Image</label>
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
			</div>
		</Styles.Container>
	);
};

export default EditProduct;
