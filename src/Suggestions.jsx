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
        <>  {(profile && suggestions.length > 0) ? (
            <div className = "my-profile-suggestions">
                <div>
                    <img className = "dp-suggestions rounded-circle" src={profile.profilePic} alt="" />
                    <h5>{profile.username}</h5>
                </div>
                <small className = ".text-primary">Switch</small>
            </div>
        ) : (
            <div>
                <p>Loading suggestions</p>
            </div>
        )}

        </>

    );
}
export default Suggestions