import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <ul className="word-synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>Sorry no synonyms!</p>
      </div>
    );
  }
}
