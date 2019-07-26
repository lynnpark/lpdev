import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import ThingsILike from "./components/ThingsILike";

export default function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <Header />
        <hr />
        <BlurbWrapper>
          <p>
            Hello there beautiful people
            <span role="img" aria-label="sparkle">
              ✨✨✨
            </span>
          </p>
          <p>
            I'm a full-stack dev, but my focus has been on the front-end since I
            fell in love with React two years ago. Coding makes me happy!
          </p>
        </BlurbWrapper>
        <ThingsILike/>
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
