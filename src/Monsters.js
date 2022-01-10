import React from "react";

import monster from "./monster.png";
import monster2 from "./monster2.png";

import "./Monsters.css";

export default function Monsters() {
  return (
    <div>
      <img
        src={monster}
        className="monster1"
        alt="monster1"
        title="Oh, that is interesting!"
      />
      <img src={monster2} className="monster2" alt="monster2" title="Hmm...." />
    </div>
  );
}
