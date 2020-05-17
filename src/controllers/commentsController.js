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

exports.getComments= async (res,req)=>{
    try{
    const post= await Post.findOne({_id:req.params.id}).populate("comments");
    res.send(post);
} catch (err) {
    console.error(err.message);
}
};

exports.updateComments= async(res,req)=>{
    try{
    const comment= await Comment.findOneAndUpdate({_id: req.params.commentId}, req.body,
        { new: true, runValidators:true});
        res.send(comment);
    } catch (err) {
        console.error(err.message);
    }
}
exports.deleteComments= async(res,req)=>{
    try{
    await Comment.findOneAndRemove(req.params.commentId);
    res.send({message:"Comment deleted successfully."});
} catch (err) {
    console.error(err.message);
}
}