import Sidebar from "./Sidebar";
import Feed from './Feed';
import Suggestions from './Suggestions';
import CreatePostModal from "./CreatePostModal";
import { useState } from 'react';

function Home() {
    const [showCreate, setShowCreate] = useState(false);
    return (
        <>
            <div className="home">
                <div className="sidebar">
                    <Sidebar onCreateClick={() => setShowCreate(true)} />
                </div>
                <div className="feed"><Feed /></div>
                <div className="suggestions"><Suggestions /></div>
            </div>

            {
                showCreate && (
                    <CreatePostModal onClose={() => setShowCreate(false)}
                        onCreated={() => alert('post created successfully')}
                    />
                )
            }

        </>
    );
}
export default Home;