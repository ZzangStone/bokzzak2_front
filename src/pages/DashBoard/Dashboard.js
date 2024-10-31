import React, { useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import SideBar from "./SideBar";
import Past from "./Past";
import Modeling from "./Modeling";

const Dashboard = () => {
  const [selection, setSelection] = useState(0);
  return (
    <DashboardContainer>
      <Header>복작복작 MAP</Header>
      <MainContainer>
        <SideBar selection={selection} setSelection={setSelection} />
        <DashboardBar>
          {selection === 0 ? <Past /> : null}
          {selection === 1 ? <Modeling /> : null}
        </DashboardBar>
        <Map></Map>
      </MainContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DashboardBar = styled.div`
  /* background-color: #f00; */
  flex: 1.5;
  height: 100%;
  overflow-y: auto;
`;

export default Dashboard;
