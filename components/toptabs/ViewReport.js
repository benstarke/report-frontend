import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';

export default class ViewReport extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Title of incident</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Describe your occurence
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Location,Date</Text>
            </CardItem>

            <CardItem header>
              <Text>Title of incident</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Describe your occurence
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Location,Date</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}