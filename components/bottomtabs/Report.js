import React, { Component } from "react";
import {Container, Header, Content, Item,Input, Card, CardItem,Body,Title } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewReport from '../toptabs/ViewReport';
import CreateReport from '../toptabs/CreateReport';


const Tab = createMaterialTopTabNavigator();

export  default class Report extends Component {
  render() {
    return (
      <Container>
        <Content>
    <Header>
    <Body>
        <Title>Report</Title>
    </Body>
    </Header>
    <Content padder>
      <Tab.Navigator>
      <Tab.Screen name="SendReport" component={CreateReport} />
      <Tab.Screen name="ViewReport" component={ViewReport} />
    </Tab.Navigator>
    </Content>
    </Content>
    </Container>
    );
  }
}