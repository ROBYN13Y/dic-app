import React from "react";

import "./Knowledge.css";

export default function Knowledge(props) {
  console.log(props.knowledge);

  if (props.knowledge) {
    return (
      <div className="container knowledge">
        <div className="word">
          <p className="knowledge-word">{props.knowledge.word}</p>
        </div>
        <div className="definition">
          <p className="partOfSpeech">
            {props.knowledge.meanings[0].partOfSpeech}
          </p>
          <p className="word-definition">
            {props.knowledge.meanings[0].definitions[0].definition}
          </p>
          <p className="word-example">
            {props.knowledge.meanings[0].definitions[0].example}
          </p>
        </div>
        <div className="synonyms">
          <p className="title">SYNONYMS:</p>
          <ul className="word-synonyms">
            {props.knowledge.meanings[0].definitions[0].synonyms.map(function (
              synonyms,
              index
            ) {
              return <li key={index}>{synonyms}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
