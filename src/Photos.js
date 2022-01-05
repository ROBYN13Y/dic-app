import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="photos">
        {props.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.tiny}
              className="word-photo"
              width="100px"
              alt="photo"
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
