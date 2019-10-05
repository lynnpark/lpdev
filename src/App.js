import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";

export default function App() {
  //const [content, setContent] = useState("main");

  return (
    <div className="App">
      <ContentWrapper>
        <Header showIcons={false} />
        <Emailh2
          onClick={() => {
            window.location = "mailto:lynnpark.dev@gmail.com";
          }}
        >
          lynnpark.dev@gmail.com
        </Emailh2>
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

const Emailh2 = styled.h2`
  cursor: pointer;
  &:hover {
    color: #e0e0e0;
    text-decoration: rgb(255, 111, 97);
  }
`;
