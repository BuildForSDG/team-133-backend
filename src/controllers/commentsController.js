/*eslint-disable*/
let mongoose= require('mongoose');
const Post= require('../models/posts');
const Comment= require('../models/comments');

exports.createComment= async(req,res)=>{
    try{
    //find post
    const post=  await Post.findOne({_id:req.params.id});
    //create comment
    const comment= new Comment();
    comment.text= req.body.text;
    comment.post= post._id;
    await comment.save();
    //associate post with comment
    post.comments.push(comment._id);
    await post.save();

    res.send(comment);
} catch (err) {
    console.error(err.message);
}
}

exports.getComments= async (req,res)=>{
    try{
    const post= await Post.findOne({_id:req.params.id}).populate( "comments");
    res.send(post);
} catch (err) {
    console.error(err.message);
}
};


exports.updateComments=(req,res,next)=>{
    const comment= new Comment({
         _id:req.params.commentId,
        text:req.body.text
        
    });
    Comment.updateOne({_id: req.params.commentId}, comment).then(
        () => {
          res.status(201).json({
            message: 'Comment updated successfully!'
          });
        }, {
          new:true,
          runValidators:true
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};
exports.deleteComments= (req,res,next)=>{
    Comment.deleteOne({_id: req.params.commentId}).then(
        () => {
          res.status(200).json({
            message: 'Deleted the comment!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}
