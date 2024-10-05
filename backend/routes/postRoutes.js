const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/', async (req, res) => {
    const { userId, imageUrl, description } = req.body;
    const newPost = new Post({ userId, imageUrl, description });
    await newPost.save();
    res.status(201).json(newPost);
});

router.get('/', async (req, res) => {
    const posts = await Post.find().populate('userId');
    res.status(200).json(posts);
});

module.exports = router;
