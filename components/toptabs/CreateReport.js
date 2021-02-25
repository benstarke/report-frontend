import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet,Form } from 'react-native';

 
 class CreateReport extends Component {
     state = {
      data: ''
    } 
  
  componentDidMount = () => {
    fetch('https://github.com/Developer-Felix/App-with-React-Django-Rest-Framework.git', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
    });
 }


render(){

  return(
    <View>
         <Text>{this.state.data.body}</Text>
    </View>
  )
}
  }
export default CreateReport;
 