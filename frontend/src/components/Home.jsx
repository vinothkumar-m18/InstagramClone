import Sidebar from "./Sidebar";
import Feed from './Feed';
import Suggestions from './Suggestions';
import CreatePostModal from "./CreatePostModal";
import { useState } from 'react';

function Home() {
    const [showCreate, setShowCreate] = useState(false);
    const [postRefreshTrigger, setPostRefreshTrigger] = useState(0);
    const handlePostCreated = ()=>{
        alert('post created successfully');
        setPostRefreshTrigger(prev => prev += 1);
    }
    return (
        <>
            <div className="home">
                <div className="sidebar">
                    <Sidebar onCreateClick={() => setShowCreate(true)} />
                </div>
                <div className="feed"><Feed postRefreshTrigger = {postRefreshTrigger}/></div>
                <div className="suggestions"><Suggestions /></div>
            </div>

            {
                showCreate && (
                    <CreatePostModal onClose={() => setShowCreate(false)}
                        onCreated={handlePostCreated}
                    />
                )
            }

        </>
    );
}
export default Home;