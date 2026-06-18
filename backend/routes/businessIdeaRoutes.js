const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {
  jwtAuthMiddleware
} = require('../jwt');
const {
  getAllIdeas,
  submitIdea,
  showInterest,
  updateIdea,
  deleteIdea
} = require('../controllers/businessIdeaController')

//gett business idea
router.get('/',jwtAuthMiddleware,asyncHandler(getAllIdeas));

//post business idea
router.post('/idea', jwtAuthMiddleware, asyncHandler(submitIdea));

//show intrest
router.post('/:id', jwtAuthMiddleware, asyncHandler(showInterest));

//put
router.put('/:id', jwtAuthMiddleware, asyncHandler(updateIdea))

//delete
router.delete('/:id', jwtAuthMiddleware, asyncHandler(deleteIdea));

module.exports = router;