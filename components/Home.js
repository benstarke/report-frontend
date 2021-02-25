import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accounts from './bottomtabs/Accounts';
import Report from './bottomtabs/Report';
import Homepage from './bottomtabs/Homepage';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home"  size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen name="Report" component={Report} 
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="Accounts" component={Accounts}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;