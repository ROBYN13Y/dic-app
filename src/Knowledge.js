import React from "react";

import "./Knowledge.css";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Knowledge(props) {
  // console.log(props.knowledge);

  if (props.knowledge) {
    return (
      <div className="container knowledge">
        <p className="knowledge-word">{props.knowledge.word}</p>
        {props.knowledge.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.knowledge.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
