import React from "react";

import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  // console.log(props.meaning);
  return (
    <div className="meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
            <p className="word-definition">{definition.definition}</p>
            <p className="word-example">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </section>
        );
      })}
      <p className="word-definition">{props.meaning.definitions.definition}</p>
    </div>
  );
}
