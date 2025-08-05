// userRoutes.js - listeleme endpointi:
router.get('/', async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const users = await User.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
  const count = await User.countDocuments();
  res.json({ users, totalPages: Math.ceil(count / limit) });
});
