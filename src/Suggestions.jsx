import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile, setProfile] = useState(null)
  const [Suggestions, setSuggestions] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/profile').
      then(data => data.json()).
      then(data => setProfile(data)).
      catch(error => console.log(error))

    fetch('http://localhost:3000/suggestions').
      then(data => data.json()).
      then(data => setSuggestions(data)).
      catch(error => console.log(error))
  })

  return (
    <div className = "m-5">
      {profile ? (
        <div className="post-header d-flex">
          <img className=" dp rounded-circle" src={profile.profilePic} alt="" />
          <h6>{profile.username}</h6>
          <small className = "text-primary ms-auto">Switch</small>
        </div>
      ) : (
        <div>
          <p>Loading</p>
        </div>
      )}
    </div>
  )
}

export default Suggestions  