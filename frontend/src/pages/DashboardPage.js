import React, {Component} from 'react';
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MenuBar from "../components/MenuBar"

const DashboardContainer = styled.div`
  display: flex;
`

const RightSide = styled.div`
  flex-grow: 1;
  background: green;
  max-height: 100vh;
`

export default class DashboardPage extends Component {
  render() {
    return(
      <DashboardContainer>
        <SideBar/>
        <RightSide>
          <MenuBar/>
        </RightSide>
      </DashboardContainer>
    );
  }
}
