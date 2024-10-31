import styled from "styled-components";

const SideBar = (props) => {
  return (
    <Container>
      <Selection
        value={0}
        selected={props.selection === 0}
        onClick={() => props.setSelection(0)}
      >
        분석
      </Selection>
      <Selection
        value={1}
        selected={props.selection === 1}
        onClick={() => props.setSelection(1)}
      >
        예측 유동인구
      </Selection>
    </Container>
  );
};

const Container = styled.div`
  flex: 0.2;
  background-color: #e8e9ed;
`;

const Selection = styled.div`
  width: 100%;
  text-align: center;
  font-size: 10px;
  height: 50px;
  background-color: ${(props) => (props.selected ? "#B6B9C6" : null)};
  cursor: pointer;
`;

export default SideBar;
