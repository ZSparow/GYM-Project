
import React from 'react'

function UserField({ name, weight, height, status, image }) {
    return (
        <div className="user-field">
            <div className="main-container">
                <img src={`${image === "avatar" ? "./fitness.svg" : image}`} alt="this is user" />
                <div className="container" >
                    <h3> {`${name} `}</h3>
                    <div className="inner-container">
                        <p>{height} cm</p>
                        <p>{weight} kg</p>
                    </div>
                </div>
            </div>
            <h3 className={`status ${status === "مفعل" ? "active" : status === "منتهي" ? "end" : "about"}`}>{status}</h3>
        </div>
    )
}

export default UserField
