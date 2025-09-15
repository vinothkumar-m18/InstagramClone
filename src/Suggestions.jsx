import { useState, useEffect } from 'react'
function Suggestions() {
    const [profile, setProfile] = useState(null)
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/profile').
            then(data => data.json()).
            then(data => setProfile(data)).
            catch(error => console.log(error))

        fetch('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/suggestions').
            then(data => data.json()).
            then(data => setSuggestions(data)).
            catch(error => console.log(error))
    }, [])
    return (
        <>
            {profile ? (
                <div className = "suggestions-my-profile">
                    <div>
                        <img className = "rounded-circle" src={profile.profilePic} alt=""/>
                        <div className = "suggestions-my-profile-n1">
                            <h6>{profile.userId}</h6>
                            <p>{profile.username}</p>
                        </div>
                    </div>
                    <small >Switch</small>
                </div>
            ) : (
                <p>Loading my profile</p>
            )}       
        </>

    );
}
export default Suggestions