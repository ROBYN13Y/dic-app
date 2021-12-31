import React, { useState } from "react";

import "./Feed.css";

export default function Feed() {
  let [keyword, setKeyword] = useState("");

  function feed(event) {
    event.preventDefault();
    alert(`SEARCHING FOR ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
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
    </div>
  );
}
