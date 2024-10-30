import React, { useState } from "react";
import styled from "styled-components";
import Content from "../../components/Main/Content";

const ContentContainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const contentItems = Array.from({ length: 6 }, (_, index) => (
    <Content key={index} />
  ));

  // 페이지 수 계산 (각 페이지에 최대 4개씩)
  const pageCount = Math.ceil(contentItems.length / 4);

  // 좌측 화살표 클릭 시 이동
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  // 우측 화살표 클릭 시 이동
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(
        prevIndex + 4,
        contentItems.length - (contentItems.length % 4 || 4)
      )
    );
  };

  // 인디케이터 점 클릭 시 해당 페이지로 이동
  const goToPage = (pageIndex) => {
    setStartIndex(pageIndex * 4);
  };

  // 현재 페이지 인덱스 계산
  const currentPage = Math.floor(startIndex / 4);

  return (
    <Container>
      <ArrowButton onClick={handlePrev} disabled={startIndex === 0}>
        {"<"}
      </ArrowButton>
      <ContentGrid>
        {contentItems.slice(startIndex, startIndex + 4).map((item, index) => (
          <Content key={index}>{item}</Content>
        ))}
      </ContentGrid>
      <ArrowButton
        onClick={handleNext}
        disabled={startIndex + 4 >= contentItems.length}
      >
        {">"}
      </ArrowButton>
      <IndicatorContainer>
        {Array.from({ length: pageCount }, (_, index) => (
          <Dot
            key={index}
            active={index === currentPage}
            onClick={() => goToPage(index)} // 클릭 시 해당 페이지로 이동
          />
        ))}
      </IndicatorContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  flex: 1;
  overflow: hidden;
  padding-bottom: 40px;
  justify-content: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  padding: 0 10px;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? "#333" : "#ccc")};
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
`;

export default ContentContainer;
