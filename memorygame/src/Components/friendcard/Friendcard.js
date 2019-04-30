import React from "react";
import "./styles.css";


function FriendCard(props) {
    return (
      <div className="card" >
        <div className="img-container" value={props.id} onClick={props.handleImgClick}>
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }
  
  export default FriendCard;