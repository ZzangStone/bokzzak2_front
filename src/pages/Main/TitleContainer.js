import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const TitleContainer = () => {
  return (
    <TitleDiv>
      <SubTitle>편리한 축제 이동을 위한 혼잡 예측</SubTitle>
      <MainTitle>복작복작</MainTitle>
      <SearchBar />
    </TitleDiv>
  );
};

const TitleDiv = styled.div`
  flex: 0.9;
  background-color: ${({ theme }) => theme.color.background};
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-size: 30px;
`;

const SubTitle = styled.div``;

export default TitleContainer;
