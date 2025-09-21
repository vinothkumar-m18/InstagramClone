import { useState, useEffect } from "react";
import axios from 'axios'
function Profile() {
  const [profile, setProfile] = useState(null)
  const [following, setFollowing] = useState([])
  const [loadingMsg, setLoadingMsg] = useState('Fetching data for the first time takes 15-30 seconds. Please be patient')
  const [unFollowed, setUnFollowed] = useState(0)
  function handleOnChange(event) {
    setProfile(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }
    ))
  }
  const handleUpdate = async () => {
    if (!profile || !profile.id) {
      console.log("profile or id is not found. Cannot update profile")
      return;
    }
    axios.put(`https://instagram-clone-api-panm.onrender.com/profile`, profile).
      then(console.log("updated")).
      catch(error => console.log(error))

  }
  const handleUnFollow = async (id)=>{
    axios.delete(`https://instagram-clone-api-panm.onrender.com/following/${id}`).
     then(alert("unfollowed")).
     then(()=>setUnFollowed(!unFollowed)).
     catch(error => console.log(error))     
  }
  useEffect(() => {
    axios.get('https://instagram-clone-api-panm.onrender.com/profile').
      then(res => setProfile(res.data)).
      catch(error => console.log(error))

    axios.get('https://instagram-clone-api-panm.onrender.com/following').
      then(res => {
        setFollowing(res.data)
        setLoadingMsg("")
      }
      ).
      catch(error => console.log(error))
  }, [unFollowed])
  return (
    <>
      <div className="m-5">
        {loadingMsg && (
          <div className="alert alert-info">
            {loadingMsg}
          </div>
        )}
      </div>
      <div className="m-5">
        {profile ? (
          <div>
            <img className="profile rounded-circle" src={profile.profilePic} alt="" />
            <h5>{profile.userId}</h5>
            <input type="text" value={profile.userId} name="userId" className="form-control my-3" onChange={handleOnChange} />
            <input type="text" value={profile.profilePic} name="profilePic" className="form-control my-3" onChange={handleOnChange} />
            <button onClick={handleUpdate} className="btn btn-primary my-2">Update</button>
          </div>
        ) : (
          <div>
            <p>Loading Profile</p>
          </div>
        )}
      </div>
      <h4 className="mx-5">Following</h4>
      <div className="following">

        {following.length > 0 ? (
          <div className="following-list mx-5">
            {following.map(following => (
              <div key={following.id} className = "my-3">
                <div className = "d-flex ms-auto">
                  <p>{following.userId}</p>
                  <button onClick = {()=>{handleUnFollow(following.id)}}className="btn btn-secondary ms-auto" style = {{"padding":"4px"}}>Un Follow</button>
                </div>
              </div>
            ))}
          </div>
        )
          : (
            <div>
              <p>Loading Followings</p>
            </div>
          )}
      </div>
    </>
  );
}
export default Profile