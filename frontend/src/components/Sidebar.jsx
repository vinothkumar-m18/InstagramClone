import instagramText from '../assets/instagram-text.png';
import { Navigate, useNavigate } from 'react-router-dom';
import CreatePostModal from './CreatePostModal';
import { useState } from 'react';
function Sidebar() {
    const navigate = useNavigate();
    const [showCreate, setShowCreate] = useState(false);

    return (
        <div>
            <img className="instagram-text" src={instagramText} alt="" />
            <div className="sidebar-items">
                <div>
                    <i className="bi bi-house-door-fill fs-4" />
                    <p>Home</p>
                </div>
                <div>
                    <i className="bi bi-search fs-4" />
                    <p>Search</p>
                </div><div>
                    <i className="bi bi-compass fs-4" />
                    <p>Explore</p>
                </div><div>
                    <i className="bi bi-file-play fs-4" />
                    <p>Reels</p>
                </div><div>
                    <i className="bi bi-send fs-4" />
                    <p>Messages</p>
                </div><div>
                    <i className="bi bi-heart fs-4" />
                    <p>Notifications</p>
                </div><div onClick = {()=>setShowCreate(true)}>
                    <i className="bi bi-file-plus fs-4" />
                    <button >Create</button>
                    {showCreate && (
                        <CreatePostModal onClose = {()=>setShowCreate(false)}
                        onCreated = {()=>alert('post created successfully')}                   
                        />
                    )}
                </div><div onClick={()=>{navigate(`/profile`)}} style = {{cursor:"pointer"}}>
                    <i className="bi bi-person-circle fs-4" />
                    <p>Profile</p>
                </div><div>
                    <i className="bi bi-list fs-4" />
                    <p>More</p>
                </div>
            </div>
        </div>
    );
}
export default Sidebar