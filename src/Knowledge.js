import React from "react";

import "./Knowledge.css";

export default function Knowledge(props) {
  // console.log(props.knowledge);

  if (props.knowledge) {
    return (
      <div className="container">
        <div className="definition">
          <p className="knowledge-word">{props.knowledge.word}</p>
          <p className="partOfSpeech">
            {props.knowledge.meanings[0].partOfSpeech}
          </p>
          <p className="word-definition">
            {props.knowledge.meanings[0].definitions[0].definition}
          </p>
          <p className="word-example">
            ex. {props.knowledge.meanings[0].definitions[0].example}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
