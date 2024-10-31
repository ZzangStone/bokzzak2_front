import React from "react";
import styled from "styled-components";

const PopulationCongestion = () => {
  return (
    <Container>
      <Header>인구 혼잡도</Header>
      <Status>약간 붐빔</Status>
      <Description>
        사람들이 몰릴 가능성이 큽니다. 특정 지역에 집중된 인구가 있을 수
        있습니다.
      </Description>
      <Legend>
        <ColorLabel color="#00C853">여유</ColorLabel>
        <ColorLabel color="#FFEB3B">보통</ColorLabel>
        <ColorLabel color="#D50000">붐빔</ColorLabel>
      </Legend>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Status = styled.div`
  font-size: 24px;
  color: #ff9800;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const ColorLabel = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

export default PopulationCongestion;
