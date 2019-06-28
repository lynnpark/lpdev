import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function OneLetterByOne(props) {
  const [loading, setLoading] = useState("");
  let tick = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(() => {
        if (tick >= props.title.length) tick = 0;
        tick++;
        const text = props.title.slice(0, tick);
        return text;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return <>{loading}</>;
}

OneLetterByOne.propTypes = {
  title: PropTypes.string.isRequired
};
