import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <h1>lynn park</h1>
        <h3>lynnpark.dev@gmail.com</h3>
        <hr />
        <BlurbWrapper>
          <p>Hello there beautiful people ✨✨✨</p>
          <p>
            I'm a full-stack dev, but my focus has been on the front-end since I
            discovered React two years ago. Coding makes me happy!
          </p>
        </BlurbWrapper>

        <h3 style={{ color: "rgb(255, 111, 97)" }}>Things I like...</h3>
        <p>🎣 React Hooks</p>
        <p>🏦 Behavioral Economics</p>
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 32px);
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`;

const BlurbWrapper = styled.div`
  line-height: 1.75;
  padding: 8px 0;
`;
