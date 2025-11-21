import { useCallback, useEffect, useState, useRef} from "react";
import CommentModal from './CommentModal.jsx';
function Posts() {
    
    const [posts, setPosts] = useState([]);
    const [modalPost, setModalPost] = useState(null);
    const commentInputRefs = useRef({});
    const refreshPosts = useCallback(()=>{
        fetch('http://localhost:5000/api/posts')
            .then(data => data.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))        
    }, []);

    useEffect(()=>{
        refreshPosts();
    }, [refreshPosts]);

    const handleLike = async (postId)=>{
        try{
            const res = await fetch(`http://localhost:5000/api/posts/${postId}/like`, {
                method:'POST'
            });
            const {likes} = await res.json();
            setPosts(prevPosts => 
                prevPosts.map(post =>
                    post._id === postId ? {...post, likes} : post
                )
            );
        }catch(error){
            console.log('like failed ', error.message);            
        }
    };
    const handleComment = async (postId, text)=>{
        const response = await fetch(`http://localhost:5000/api/posts/${postId}/comment`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({text})
        });
        const comments= await response.json();
        setPosts(prev => prev.map(post => post._id === postId ? {...post, comments} : post));
    };
    const openModal = (post)=>{setModalPost(post)};
    const closeModal = ()=>{setModalPost(null)};
    return (
        <>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div className="post" key = {post._id}>
                        <div className="post-header">
                            <div>
                                <img className="dp rounded-circle" src={post.user?.profilePic} alt="" />
                                <h6>{post.user?.userId}</h6>
                            </div>
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className="post-image">
                            {post.isReel ? (
                                <video src={post.media} 
                                    controls
                                    loop
                                    playsInline
                                    muted
                                    style = {{width:'100%', borderRadius:'8px', background:'#000', margin:'10px 0px 5px 0px'}}/>
                            ) : (
                                <img src={post.media} alt='post'
                                    style = {{width:'100%', borderRadius:'8px'}} />
                            )}
                        </div>
                        <div className = "post-footer">  
                            <div className="post-icon-list ">
                                <div >
                                    <i className="bi bi-heart fs-4" 
                                        style = {{"cursor":"pointer", color:'#ed4956'}}
                                        onClick = {()=> handleLike(post._id)}
                                    />
                                    <i className="bi bi-chat fs-4" onClick = {()=>openModal(post)} 
                                        style = {{'cursor' : 'pointer'}}></i>
                                    <i className="bi bi-send fs-4"></i>
                                </div>
                                <i className="bi bi-bookmark fs-4"></i>
                            </div>
                            <h6>{post.likes} likes</h6>
                            <p style = {{marginBottom:'6px'}}>
                                <span className = "post-footer-username">{post.user?.userId.toLowerCase()}</span> {post.caption}
                            </p>
                            {post.comments.length > 0 && (
                                <p style = {{color:'#8e8e8e', fontSize:'14px',cursor:'pointer', margin:'2px 0px 0px 0px'}} 
                                    onClick = {()=>openModal(post)}
                                >
                                    View all {post.comments.length} comments
                                </p>
                            )}
                            {/* inline comment block */}
                           <div style = {{display:'flex', alignItems:'center', marginTop:'1px'}}>
                                <input ref = {el => commentInputRefs.current[post._id] = el} 
                                       type = "text"
                                       placeholder="Add a comment..."
                                       style = {{flex:1, border:'none', outline:'none', fontSize:'14px', padding:'3px 5px 5px 0px'}}
                                       onKeyDown = {e =>{
                                        if(e.key === 'Enter'){
                                            handleComment(post._id, e.target.value);
                                            e.target.value = '';
                                        }
                                       }}
                                />
                                <button onClick = {()=>{
                                    const comment = commentInputRefs.current[post._id].value.trim();
                                    if(comment) handleComment(post._id, comment);
                                }} style = {{marginLeft:'8px', color:'#0095f6', fontWeight:'bold', background:'none', border:'none'}}>
                                    Post
                                </button>
                            </div>
                        </div>


                    </div>
                ))
            ) : (
                <div>
                    <p>Loading posts</p>
                </div>
            )}
            {modalPost && (
                <CommentModal 
                    post={modalPost}
                    onClose = {closeModal}
                    onComment = {(text)=>{
                        handleComment(modalPost._id, text);
                    }}              
                />
            )}
        </>
    );
}
export default Posts