import React, { useState } from "react";
import axios from "axios";

import "./Feed.css";

import Knowledge from "./Knowledge";

export default function Feed() {
  let [word, setWord] = useState("");
  let [knowledge, setKnowledge] = useState(null);

  function handleWord(response) {
    console.log(response.data[0]);
    setKnowledge(response.data[0]);
  }

  function feed(event) {
    event.preventDefault();

    //API docs https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleWord);
  }

  function handleKeyword(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={feed}>
        <label className="form-label">FEED THE MONSTERS </label>
        <input
          type="text"
          placeholder=".   .   ."
          className="search-box"
          onChange={handleKeyword}
        />
      </form>
      <Knowledge knowledge={knowledge} />
    </div>
  );
}
