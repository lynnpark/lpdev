import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";

export default function App() {
  const [content, setContent] = useState("main");

  return (
    <div className="App">
      <ContentWrapper>
        <Header />
        <BlurbWrapper>
          <p>
            Hello there beautiful people{" "}
            <span role="img" aria-label="emoji-sparkle">
              ✨
            </span>
            <span role="img" aria-label="emoji-sparkle">
              ✨
            </span>
            <span role="img" aria-label="emoji-sparkle">
              ✨
            </span>
          </p>
        </BlurbWrapper>
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
