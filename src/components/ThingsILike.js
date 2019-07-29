import React from "react";

export default function ThingsILike(props) {
  return (
    <>
      <h3 style={{ color: "rgb(255, 111, 97)" }}>Things I like...</h3>
      <p>
        <span role="img" aria-label="emoji-fishingpole">
          🎣
        </span>{" "}
        React Hooks
      </p>
      <p>
        <span role="img" aria-label="emoji-bank">
          🏦
        </span>{" "}
        Behavioral Economics
      </p>
    </>
  );
}
