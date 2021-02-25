import React, { Component } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Header, Content, Card,Button, CardItem, Text, Body,Title } from "native-base"
import Signin from '../toptabs/Signin';
import Signup from '../toptabs/Signup';

const Tab = createMaterialTopTabNavigator();

function Accounts() {
  return (

    <Container>
    <Content>
    <Header>
    <Body>
        <Title>Account</Title>
    </Body>
    </Header>
    <Content padder>

    <Tab.Navigator>
      <Tab.Screen name="Register" component={Signup}/>
      <Tab.Screen name="Login" component={Signin} />
    </Tab.Navigator>
   
    </Content>
    </Content>
  </Container>
    
  );
}
export default Accounts;