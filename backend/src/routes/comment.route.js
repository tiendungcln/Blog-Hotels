const express = require('express');
const Comment = require("../model/comment.model")
const router = express.Router();

// create a comment
router.post('/post-comment', async (req, res) => {
  try {
    // console.log(req.body);
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(200).send({ massage: "Comment created successfully", comment: newComment })
  } catch (error) {
    console.error("An error occurred while posting new comment", error);
    res.status(500).send({ message: "An error occurred while posting new comment" })
  }
})

// get all commetns count
router.get("/total-comments", async (req, res) => {
  try {
    const totalComment = await Comment.countDocuments({});
    res.status(200).send({ massage: "Total comments count", totalComment })
  } catch (error) {
    console.error("An error occurred while geting comment count", error);
    res.status(500).send({ message: "An error occurred while geting comment count" })
  }
})

module.exports = router;