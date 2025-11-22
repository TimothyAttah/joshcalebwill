const verifyAdmin = (req, res, next) => {
	if (req.role !== 'admin') {
		return res.status(403).send({
			success: false,
			msg: 'You are not authorized to perform this action',
		});
	}

	next();
};

export default verifyAdmin;
