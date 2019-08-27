import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <div>
      <NavLink>photos</NavLink> ∙ <NavLink>reading list</NavLink>
    </div>
  );
}

const NavLink = styled.a`
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #e0e0e0;
    text-decoration: rgb(255, 111, 97) double line-through;
    font-size: 16px;
  }
`;
