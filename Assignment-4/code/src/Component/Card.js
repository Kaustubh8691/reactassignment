import React from "react";


export default function Card({obj}){
    const {name,location,likes,description,PostImage}=obj;
    console.log(obj);
    return(
        <div className="card">
            <div className="headr">
                <div className="name">
                    <h3>{name}</h3>
                    <p>{location}</p>
                </div>
                <div className="more">....</div>
            </div>
            <div className="cardimage">
                <img src={require(`../Images/${PostImage}`)} alt="images" width="100%"/>
            </div>
            <div className="foot">
                <div>
                    <span>{"\u2661"}</span>
                    <span>{"\u27A2"}</span>
                </div>
                <div className="date">{String(new Date()).split("GMT")[0]}</div>
            </div>
            <div className="like-content">
                <p >{likes} likes</p>
                <p className="content">{description}</p>
            </div>
        </div>
    );
}