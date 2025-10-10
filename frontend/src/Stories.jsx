import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Stories(){
    const navigate = useNavigate()
    const [stories, setStories] = useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/stories').
         then(data => data.json()).
         then(data => setStories(data)).
         catch(error => console.log(error))
    })
    return (
        <div className = "story-container">
            {stories.length > 0 ? (
                stories.map(story => (
                    <div key = {story.id} className = "story" onClick = {()=>navigate(`/story/${story.id}`)} style = {{cursor:"pointer"}}>
                        <div className = "gradient-border">
                            <img className = "rounded-circle" src={story.profilePic} alt="dp"/>
                        </div>
                        <p className = "text-truncate" >{story.userId}</p>
                    </div>
                ))
            ) : (
                <div>
                    <p>Loading stories</p>
                </div>
            )}
        </div>
        
    );
}
export default Stories