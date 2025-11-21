import {useParams, Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
function ViewStory(){
    const API_BASE = "https://instagramclone-0kzj.onrender.com";
    const {id} = useParams();
    const [story, setStory] = useState(null);
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`${API_BASE}/api/stories/${id}`).
         then(data => data.json()).
         then(data => setStory(data)).
         catch(error => console.log('error fetching story : ', error));

        fetch(`${API_BASE}/api/stories/?t=${new Date().getTime()}`).
         then(data => data.json()).
         then(data => setStories(data)).
         catch(error => console.log('error fetching stories : ', error));
    }, [id])
    function goPrev(){
        const prevId = parseInt(id) -1
        if(prevId > 0 && prevId <= stories.length){
            navigate(`/story/${prevId}`)
        }else{
            navigate(`/`)
        }
    }
    function goNext(){
        const nextId = parseInt(id) + 1
        if(nextId <= stories.length){
            navigate(`/story/${nextId}`)
        }else{
            navigate(`/`)
        }
    }
    return (
        <>
          {story ? (
            <div className = "story-card">
                <i onClick = {goPrev} className="bi bi-arrow-left-circle-fill fs-4" style = {{cursor : "pointer"}}></i>
                <img className = "vh-100" src={story.storyImage} alt=""/>
                <i onClick = {goNext} className="bi bi-arrow-right-circle-fill fs-4" style = {{cursor: "pointer"}}></i>

            </div>
          ) : (
            <div>
                <p>Loading story</p>
            </div>
          )}
        </>
    );
}
export default ViewStory