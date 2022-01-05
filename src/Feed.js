import React, { useState } from "react";
import axios from "axios";

import "./Feed.css";

import Knowledge from "./Knowledge";
import Photos from "./Photos";

export default function Feed() {
  let [word, setWord] = useState("");
  let [knowledge, setKnowledge] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleWord(response) {
    // console.log(response.data[0]);
    setKnowledge(response.data[0]);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function feed(event) {
    event.preventDefault();
    alert("NOM NOM - Thank you for feeding us!");

    //API DOCS https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleWord);

    //PEXELS API DOCS
    let pexelsApiKey =
      "563492ad6f917000010000013c9334179df146e382244daa9aca79c8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
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
          placeholder="search a word..."
          className="search-box"
          onChange={handleKeyword}
        />
      </form>
      <Photos photos={photos} />
      <Knowledge knowledge={knowledge} />
    </div>
  );
}
