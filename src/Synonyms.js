import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="synonyms">
      <ul className="word-synonyms">
        <b className="syn">SYNONYMS:</b>{" "}
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    </div>
  );
}