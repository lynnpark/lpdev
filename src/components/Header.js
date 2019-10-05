import React from "react";
import styled from "styled-components";
import { Email, Twit } from "../assets/svgs/";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <HeaderWrapper>
      <NameAndNavWrapper>
        <Name>lynn park</Name>
        {/* <Nav /> */}
      </NameAndNavWrapper>

      {props.showIcons && (
        <IconsWrapper>
          <Email
            fill="white"
            size="24"
            onClick={() => {
              window.location = "mailto:lynnpark.dev@gmail.com";
            }}
          />
          <Twit fill="white" size="24" />
        </IconsWrapper>
      )}
    </HeaderWrapper>
  );
}

const NameAndNavWrapper = styled.div`
  /* justify-self:  */
  align-self: flex-end;
`;

const HeaderWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const Name = styled.h1`
  color: rgb(255, 111, 97);
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  padding-bottom: 8px;
`;

const IconsWrapper = styled.div`
  cursor: pointer;
  align-content: baseline;
  > svg {
    &:hover {
      fill: #e0e0e0;
    }
  }
`;
