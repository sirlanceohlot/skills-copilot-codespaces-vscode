// Create web server with express for comment
//=============================================================================

// Import module   
const express = require('express');
const router =  express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.comment_list);
router.get('/:id', commentController.comment_detail);
router.post('/', commentController.comment_create);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);
router.get('/:id/update', commentController.comment_update_get);
router.post('/:id/update', commentController.comment_update_post);