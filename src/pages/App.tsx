import React from "react";
import styled from "styled-components";
import Home from "./Home";

const App = () => {
  return (
    <OuterDiv>
    
      <Home />
    </OuterDiv>
  );
};

export default App;

const OuterDiv = styled.div`
 width:60%;
 
  display: flex;
  justify-content: center;
  margin: 10rem auto;
  border-radius: var(--border-parent-radius);
  background: var(--White);
  @media screen and (max-width: 1500px) {
    width: 80%;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    height:100vh;
    margin-top: 4rem;
    margin-bottom: 0px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
