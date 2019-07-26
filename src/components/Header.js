import React from "react";
import styled from "styled-components";
import { Email } from "../assets/svgs/";

export default function Header(props) {
  return (
    <HeaderWrapper>
      <Name>lynn park</Name> 
      <IconsWrapper>
        <Email fill="white" onClick={()=>{window.location = "mailto:lynnpark.dev@gmail.com";}} />
      </IconsWrapper>
    </HeaderWrapper> 
  );
}

const HeaderWrapper = styled.div`
  min-width: 100%;
  display: flex;

justify-content: space-between;
align-items: baseline;
`;

const Name = styled.div`
  color: rgb(255, 111, 97);
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const IconsWrapper = styled.div`
  cursor: pointer;
  align-self: flex-end;
  >svg{
    &:hover {
      fill: #e0e0e0;
    }
  }
`;
