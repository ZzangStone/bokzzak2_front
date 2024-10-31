import styled from "styled-components";
import PopulationCongestion from "./PastData/PopulationCongestion";
import RealTimePopulationRatio from "./PastData/RealTimePopulationRatio";
import PopulationOverTime from "./PastData/PopulationOverTime";

const Past = () => {
  return (
    <Container>
      <Title>{`서울 세계 불꽃놀이`}</Title>
      <PopulationCongestion />
      <RealTimePopulationRatio />
      <PopulationOverTime />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  max-height: 90vh; /* 화면 높이의 90%로 제한 */
  overflow-y: auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default Past;
