import React from "react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import TitleContainer from "./TitleContainer";
import { PiList } from "react-icons/pi";

const Main = () => {
  return (
    <MainContainer>
      <IconContainer>
        <PiList />
      </IconContainer>
      <TitleContainer />
      <ContentContainer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px;
`;
export default Main;
