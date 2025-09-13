import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/posts').
            then((data) => data.json()).
            then((data) => setPosts(data)).
            catch(error => console.log(error))
    }, [])
    return (
        <div className = "d-flex flex-column align-items-center">
            {posts.length > 0 ? (
                posts.map((post)=>(
                    <div key = {post.id}className = " d-flex flex-column post">
                        <div className = "post-header d-flex">
                            <img className = " dp rounded-circle" src={post.profilePic} alt="" />
                            <h5>{post.username}</h5>
                        </div>
                        <img className = "post-image" src={post.image} alt="" />
                        <div className = "my-2">
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        <b>{post.likes} likes</b>
                        <div className = "post-footer">
                            <h6>{post.username}</h6>
                            <p>{post.caption}</p>
                        </div>
                    </div>
                ))     
            ) : (
                <div>
                    <p>Loading Posts</p>
                </div>
            )}
        </div>
    )
}

export default Posts    