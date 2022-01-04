import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetic">
      <p className="audio">{props.phonetic.audio}</p>
      <p className="text">{props.phonetic.text}</p>
    </div>
  );
}
