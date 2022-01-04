import React from "react";

import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  // console.log(props.meaning);
  return (
    <div className="meaning">
      <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="word-definition">{definition.definition}</p>
            <p className="word-example">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <p className="word-definition">{props.meaning.definitions.definition}</p>
    </div>
  );
}
