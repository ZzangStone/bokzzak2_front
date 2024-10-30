import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <TitleContainer></TitleContainer>
      <ContentContainer></ContentContainer>
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

const TitleContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
  width: 100vw;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100vw;
`;

export default Main;
