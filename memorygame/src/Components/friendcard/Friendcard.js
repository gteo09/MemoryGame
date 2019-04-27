import React from "react";
import "./styles.css";

function FriendCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default FriendCard;