import { Router } from 'express';
import User from './user.model.js';
import generateToken from '../middlewares/generateToken.js';
import verifyToken from '../middlewares/verifyToken.js';
const userRoutes = Router();

//Register user endpoint
userRoutes.post('/register', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const user = new User({ name, email, password });

		await user.save();
		user.password = undefined;
		return res.status(201).json({ msg: 'User registered successfully', user });
	} catch (err) {
		console.log(' Error registering user', err);
		return res.status(500).json({ msg: err.message });
	}
});

//Login user endpoint
userRoutes.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ msg: 'User not found' });
		}

		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res.status(404).json({ msg: 'Password not match' });
		}

		const token = await generateToken(user._id);

		res.cookie('token', token, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		});

		user.password = undefined;

		return res.status(200).json({
			msg: 'Logged in successfully',
			token,
			user: {
				_id: user._id,
				email: user.email,
				name: user.name,
				role: user.role,
				profileImage: user.profileImage,
				bio: user.bio,
				profession: user.profession,
			},
		});
	} catch (err) {
		console.log(' Error loginin user', err);
		return res.status(500).json({ msg: err.message });
	}
});

//Logout user endpoint
userRoutes.post('/logout', async (req, res) => {
	try {
		res.clearCookie('token');
		return res.status(200).json({ msg: 'Logged out successfully' });
	} catch (err) {
		console.log(' Error login out user', err);
		return res.status(500).json({ msg: err.message });
	}
});

//Delete a user endpoint
userRoutes.delete('/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			return res.status(404).json({ msg: 'User not found' });
		}
		return res.status(200).json({ msg: 'User deleted successfully' });
	} catch (err) {
		console.log(' Error login out user', err);
		return res.status(500).json({ msg: err.message });
	}
});

//All users endpoint
userRoutes.get('/users', async (req, res) => {
	try {
		// const users = await User.find({}, 'id email role').sort({ createdAt: -1 });
		const users = await User.find({}).sort({ createdAt: -1 });

		return res.status(200).json({ msg: 'All users', users });
	} catch (err) {
		console.log(' Error fetching users', err);
		return res.status(500).json({ msg: err.message });
	}
});

//Update a user role endpoint
userRoutes.put('/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { role } = req.body;
		const user = await User.findByIdAndUpdate(id, { role }, { new: true });
		if (!user) {
			return res.status(404).json({ msg: 'User not found' });
		}
		return res
			.status(200)
			.json({ msg: 'User role updated successfully', user });
	} catch (err) {
		console.log(' Error updating user role ', err);
		return res.status(500).json({ msg: err.message });
	}
});

//Update a user role endpoint
userRoutes.patch('/edit-profile', async (req, res) => {
	try {
		const { userId, name, username, profileImage, bio, profession } = req.body;
		if (!userId) {
			return res.status(404).json({ msg: 'User ID is required' });
		}
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ msg: 'User not found' });
		}

		//update profile
		if (name !== undefined) user.name = name;
		if (username !== undefined) user.username = username;
		if (profileImage !== undefined) user.profileImage = profileImage;
		if (bio !== undefined) user.bio = bio;
		if (profession !== undefined) user.profession = profession;

		await user.save();

		user.password = undefined;

		return res.status(200).json({
			msg: 'Profile updated successfully',
			user: {
				_id: user._id,
				email: user.email,
				name: user.name,
				role: user.role,
				profileImage: user.profileImage,
				bio: user.bio,
				profession: user.profession,
			},
		});
	} catch (err) {
		console.log(' Error updating user role ', err);
		return res.status(500).json({ msg: err.message });
	}
});
export default userRoutes;
