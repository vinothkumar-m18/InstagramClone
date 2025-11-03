import { useEffect, useState } from "react";
function Posts() {
    
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(data => data.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])
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
                            <img src={post.media} alt="" />
                        </div>
                        <div className = "post-footer">  
                            <div className="post-icon-list ">
                                <div >
                                    <i className="bi bi-heart fs-4" 
                                        style = {{"cursor":"pointer", color:'#ed4956'}}
                                        onClick = {()=> handleLike(post._id)}
                                    />
                                    <i className="bi bi-chat fs-4"></i>
                                    <i className="bi bi-send fs-4"></i>
                                </div>
                                <i className="bi bi-bookmark fs-4"></i>
                            </div>
                            <h6>{post.likes} likes</h6>
                            <p>
                                <span className = "post-footer-username">{post.user?.userId.toLowerCase()}</span> {post.caption}
                            </p>
                           
                        </div>


                    </div>
                ))
            ) : (
                <div>
                    <p>Loading posts</p>
                </div>
            )}
        </>
    );
}
export default Posts