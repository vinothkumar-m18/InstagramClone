import {useRef} from 'react';
import './CommentModal.css'
function CommentModal({post, onClose, onComment}){
    const commentInputRef = useRef();
    const handleSubmit = ()=>{
        const text = commentInputRef.current.value.trim();
        if(text) {
            onComment(text);
            commentInputRef.current.value = ' ';   
        }
    };
    console.log('comments array ', post.comments);
    
    return (
        <div className = 'modal-backdrop' onClick = {onClose}>
            <div className = 'modal-content' onClick = {e => e.stopPropagation()}>
            {/* Header */}
                <div className = 'modal-header'>
                    <button onClick = {onclose}>Back</button>
                    <h3>Comments</h3>
                </div>
                {/* comments list */}
                <div className = 'comments-list'>
                    {post.comments.map((comment)=>(
                        
                        <div key = {comment._id} className = 'comment-item'>
                            {console.log('printing user schema ', comment.user)};
                            {console.log(`printing comment :: userName : ${comment.user?.userName} text : ${comment.text}`)}
                            <img src={comment.user?.profilePic || 'https://i.pravatar.cc/40'} alt='profile pic' />
                            <div>
                                <strong>{comment.user?.userName || 'User'}</strong>
                                <p>{comment.text}</p>
                            </div>
                        </div>                        
                    ))};                    
                </div>
                {/* input */}
                <div className = "comment-input">
                    <input 
                        ref={commentInputRef}
                        placeholder='Add a comment...'
                        onKeyDown = {e => e.key === 'Enter' && handleSubmit()}
                    />
                    <button onClick = {handleSubmit}>Post</button>
                </div>
            </div>
        </div>
    );
}
export default CommentModal;