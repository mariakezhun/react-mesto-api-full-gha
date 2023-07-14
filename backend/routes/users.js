const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getCurrentUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

const {
  getUserByIdValidation,
  updateProfileValidation,
  updateAvatarValidation,
} = require('../middlewares/validationJoi');

router.get('/users', getUsers);

// router.post("/users", createUserValidation, createUser);
router.get('/users/me', getCurrentUser);
router.get('/users/:userId', getUserByIdValidation, getUserById);

router.patch('/users/me', updateProfileValidation, updateProfile);
router.patch('/users/me/avatar', updateAvatarValidation, updateAvatar);

module.exports = router;
