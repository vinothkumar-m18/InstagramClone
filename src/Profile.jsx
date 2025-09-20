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
    if(!profile || !profile.id){
      console.log("profile or id is not found. Cannot update profile")
      return ;
    }
    axios.put(`https://68cd5e16da4697a7f305b777.mockapi.io/api/profile?id=101`, profile).
     then(console.log("updated")).
     catch(error => console.log(error))

  }
  useEffect(() => {
    axios.get('https://68cd5e16da4697a7f305b777.mockapi.io/api/profile?id=101').
      then(res => setProfile(res.data)).
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