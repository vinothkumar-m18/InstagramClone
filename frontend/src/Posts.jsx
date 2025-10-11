import { useEffect, useState } from "react";
function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(data => data.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div className="post" key = {post.id}>
                        <div className="post-header">
                            <div>
                                <img className="dp rounded-circle" src={post.profilePic} alt="" />
                                <h6>{post.userId}</h6>
                            </div>
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className="post-image">
                            <img src={post.image} alt="" />
                        </div>
                        <div className = "post-footer">  
                            <div className="post-icon-list ">
                                <div >
                                    <i className="bi bi-heart fs-4" />
                                    <i className="bi bi-chat fs-4"></i>
                                    <i className="bi bi-send fs-4"></i>
                                </div>
                                <i className="bi bi-bookmark fs-4"></i>
                            </div>
                            <h6>{post.likes} likes</h6>
                            <p>
                                <span className = "post-footer-username">{post.userId.toLowerCase()}</span> {post.caption}
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