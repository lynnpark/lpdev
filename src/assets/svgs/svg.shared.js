import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  height: ${props => (props.size ? props.size : 30)}px;
  width: ${props => (props.size ? props.size : 30)}px;
  fill: ${props => (props.fill ? props.fill : "#000")};
`;

export default function createSvg(path, attributes = {}) {
  function svg(props) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...attributes}
        {...props}
      >
        {path}
      </Svg>
    );
  }
  return svg;
}
