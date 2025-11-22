import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
		// username: { type: String, require: true, unique: true },
		username: { type: String },
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		role: { type: String, default: 'user' },
		profileImage: String,
		bio: { type: String, maxlength: 200 },
		profession: String,
		// createdAt: { type: Date, default: Date.now}
	},
	{ timestamps: true },
);

//hashing passwords
UserSchema.pre('save', async function (next) {
	const user = this;
	if (!user.isModified('password')) return next();

	const hashedPassword = await bcrypt.hash(user.password, 10);
	user.password = hashedPassword;
	next();
});

//match passwords
UserSchema.methods.comparePassword = function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
