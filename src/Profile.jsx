import { useState, useEffect } from "react";
import axios from 'axios'
function Profile() {
  const [profile, setProfile] = useState(null)
  function handleOnChange(event) {
    setProfile(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }
    ))
  }
  const handleUpdate = async ()=>{
    axios.put('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/profile', profile).
     then(console.log("updated")).
     catch(error => console.log(error))

  }
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/vinothkumar-m18/InstagramClone/profile').
      then(data => setProfile(data.data)).
      catch(error => console.log(error))
  }, [])
  return (
    <div className="m-5">
      {profile ? (
        <div>
          <img className="profile rounded-circle" src={profile.profilePic} alt="" />
          <h5>{profile.userId}</h5>
          <input type="text" value={profile.userId} name="userId" className="form-control my-3" onChange = {handleOnChange}/>
          <input type="text" value={profile.profilePic} name="profilePic" className="form-control my-3"  onChange = {handleOnChange}/>
          <button onClick = {handleUpdate} className="btn btn-primary my-2">Update</button>
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