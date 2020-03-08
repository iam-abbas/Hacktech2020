import React, {Component} from 'react';
import '../index.css';
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MenuBar from "../components/MenuBar"
import RegisterPage from "./RegisterPage";
import {BrowserRouter} from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import Route from "react-router-dom/es/Route";
import ChatPage from "./ChatPage";
import PostPage from "./PostPage";

const DashboardContainer = styled.div`
  display: flex;
`

const RightSide = styled.div`
  flex-grow: 1;
  background: white;
  max-height: 100vh;
`

class DashboardPage extends Component {
  render() {
    return(
      <DashboardContainer>
        <SideBar/>
        <RightSide>
          <MenuBar history={this.props.history}/>
          <Route path="/dashboard/chat" component={ChatPage}/>
          <Route path="/dashboard/posts" component={PostPage}/>
        </RightSide>
      </DashboardContainer>
    );
  }
}

export default DashboardPage;
