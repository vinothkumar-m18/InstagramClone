import axios from 'axios'
import { useState, useEffect } from 'react'
function Suggestions() {
    const [profile, setProfile] = useState(null)
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profile').
            then(data => data.json()).
            then(data => setProfile(data)).
            catch(error => console.log(error))

        fetch('http://localhost:5000/suggestions').
            then(data => data.json()).
            then(data => setSuggestions(data)).
            catch(error => console.log(error))
    }, [])
    const handleFollow = async (id, userId)=>{
        axios.post('http://localhost:5000/following', {"id":id, "userId":userId}).
         then(alert("followed")).
         catch(error => console.log(error))
    }
    return (
        <>
            {profile ? (
                <div className = "suggestions-my-profile">
                    <div className = "suggestions-my-profile-n1">
                        <img className = "rounded-circle" src={profile.profilePic} alt=""/>
                        <div className = "suggestions-my-profile-n2">
                            <p className = "suggestions-my-userid">{profile.userId}</p>
                            <p className = "suggestions-my-username">{profile.username}</p>
                        </div>
                    </div>
                    <small >Switch</small>
                </div>
            ) : (
                <p>Loading my profile</p>
            )}       
            <div className = "suggestions-div2">
                <p>Suggested for you</p>
                <small>See All</small>
            </div>
            {suggestions.length > 0 ? (
                suggestions.map(suggestion => (
                    <div className = "suggestions-card" key = {suggestion.id}>
                        <div className="suggestions-card-n1">
                            <img className="rounded-circle" src={suggestion.profilePic} alt="" />
                            <div className = "suggestions-card-n2">
                                <p className="suggestions-my-userid">{suggestion.userId}</p>
                                <p className="suggestions-my-username">Popular</p>
                            </div>
                        </div>
                        <small><a onClick = {()=> {handleFollow(suggestion.id, suggestion.userId)}} style = {{"cursor":"pointer"}}>Follow</a></small>
                    </div>
                ))
            ) : (
                <div>
                    <p>Loading suggestions</p>
                </div>
            )}
        </>

    );
}
export default Suggestions