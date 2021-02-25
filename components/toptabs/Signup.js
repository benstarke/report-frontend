import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Container, Content, Form, Item, Input, Label,Button } from 'native-base';


export default function Signup({ navigation }){
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Fastname</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Lastname</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Id Number</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button full rounded onPress={() => navigation.navigate('Report')}>
              <Text>Register</Text>
            </Button>
          <View>
            <Text style={{alignSelf:'center',margin:10}}>Have an account?</Text>
          <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate('Accounts')}>
        <Text style={{alignSelf:'center',color: 'red'}}>Login</Text>
      </TouchableOpacity>
          </View>
          </Form>
        </Content>
      </Container>
    );
}