import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="audio">
        <a href={props.phonetic.audio} className="link" target="_blank">
          LISTEN
        </a>
        <p className="text">{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
