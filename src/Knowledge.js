import React from "react";

import "./Knowledge.css";

import Synonyms from "./Synonyms";

export default function Knowledge(props) {
  // console.log(props.knowledge);

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
          <Synonyms
            synonyms={props.knowledge.meanings[0].definitions[0].synonyms}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
