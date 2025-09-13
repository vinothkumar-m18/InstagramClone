import React from 'react'

function Sidebar() {
    return (
        <div className = "sidebar position-fixed">
            <img className="text-width m-4" src="src\assets\instagram-text.png" alt="" />
            <div className="d-flex flex-column gap-4 m-4">
                <div><i className="bi bi-house-door-fill"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-file-play"></i>Reels</div>
                <div><i className="bi bi-chat-dots"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notifications</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person-circle"></i>Profile</div>
                <div><i className="bi bi-list"></i>More</div>
                <div><i className="bi bi-boxes"></i>Also from Meta</div>
            </div>
        </div>
    )
}

export default Sidebar  