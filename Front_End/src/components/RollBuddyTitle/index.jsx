import React from "react";
import styled from "styled-components"
import {createGlobalStyle} from "styled-components";

export const RollBuddyTitle = createGlobalStyle`
  .app-title {
    font-size: 3em;
    color: black;
  }
  
`;

export const StyledTitle = styled.nav`
    align-item: top;
    text-align: center;
`;

export function Nav({children}) {
    return (
        <StyledTitle>
            <RollBuddyTitle/>
            {children}
        </StyledTitle>
    );
}