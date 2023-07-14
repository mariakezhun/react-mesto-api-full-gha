const router = require('express').Router();
const {
  getCard,
  createCard,
  deleteCardById,
  putCardLike,
  deleteCardLike,
} = require('../controllers/cards');
const {
  createCardValidation,
  deleteCardByIdValidation,
  likeCardValidation,
} = require('../middlewares/validationJoi');

router.get('/cards', getCard);
router.post('/cards', createCardValidation, createCard);
router.delete('/cards/:cardId', deleteCardByIdValidation, deleteCardById);
router.put('/cards/:cardId/likes', likeCardValidation, putCardLike);
router.delete('/cards/:cardId/likes', likeCardValidation, deleteCardLike);

module.exports = router;
