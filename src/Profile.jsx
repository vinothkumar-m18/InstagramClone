import { useState, useEffect } from "react";
import axios from 'axios' 
function Profile(){
    const [profile, setProfile] = useState(null)
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/profile').
         then(data => setProfile(data.data)).
         catch(error => console.log(error))
    }, [])
    return (
        <div className = "m-5">
          {profile ? (
            <div>
                <img className = "profile rounded-circle" src={profile.profilePic} alt=""/>
                <h5>{profile.userId}</h5>
                <input type="text" value = {profile.userId} name = "userId" className = "form-control my-3"/>
                <input type="text" value = {profile.profilePic} name = "profilePic" className = "form-control my-3"/>
                <button className = "btn btn-primary my-2">Update</button>
            </div>
          ) : (
            <div>
                <p>Loading Profile</p>
            </div>
          )}  
        </div>
    );
}
export default Profile