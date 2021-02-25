import React, { Component } from "react";
import {View} from 'react-native';
import { Container, Header, Content, Card,Button, CardItem, Text, Body,Title } from "native-base"


export default function Homepage({ navigation }) {
    return (
      <Container>
        <Content>
        <Header>
        <Body>
            <Title>Home</Title>
        </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Report Incident</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                A classification of a crime victim's relationship to the offender.
                 An offender who is either related to, well known to, or casually acquainted with the victim is a nonstranger. For crimes with more than one offender, if any of the offenders are nonstrangers, 
                then the group of offenders as a whole is classified as nonstranger.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>By Reporter</Text>
            </CardItem>
          </Card>
          <View>
      <Button bordered rounded style={{alignSelf:'center',margin:10}} onPress={() => navigation.navigate('Accounts')}><Text>Report Victimazation</Text></Button>
    </View>
        </Content>
        </Content>
      </Container>
      
    );
}
