import React, { Component } from "react";
import {View,TouchableOpacity} from 'react-native';
//import Snackbar from 'react-native-snackbar';
import {Container, Content, Item, Input, Card, CardItem, Text, Body,Button } from "native-base";


export default function Signin({ navigation }){
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem button onPress={() => alert("This is Card Body")} bordered>
              <Body>
              <Item rounded>
            <Input placeholder='Phone number'/>
          </Item>
              </Body>
            </CardItem>
            <CardItem footer button>
            <Item rounded>
            <Input placeholder='Id number'/>
          </Item>
            </CardItem>
            <Button full rounded onPress={() => navigation.navigate('Report')}>
              <Text>Login</Text>
            </Button>
          <View>
            <Text style={{alignSelf:'center',margin:10}}>Don't have an account?</Text>
          <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('Accounts')}>
        <Text style={{alignSelf:'center',color: 'red'}}>Register</Text>
      </TouchableOpacity>
          </View>
          </Card>
        </Content>
      </Container>
    );
}