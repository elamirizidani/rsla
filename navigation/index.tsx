import { StyleSheet, Text, View,Image, Dimensions, Pressable } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SpeechScreen from '../screens/SpeechScreen';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function Tabs(){
  return(
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'formSheet'}} >
        <Stack.Screen
         name="Category" 
         component={CategoryScreen}
         options={({route}) => ({ title: route.params.name})}
         />
      </Stack.Group>

    </Stack.Navigator>
  );
}

const {width,height} = Dimensions.get("window");
function BottomTabs() {
    return (
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
            position:'absolute',
            bottom: height *2/100,
            left:20,
            right:20,
            backgroundColor: '#fff',
            borderRadius:15,
            height: height *8/100,
            ...styles.shadow
          }
        }}
      >
        <Tab.Screen name="Setting" component={HomeScreen}
          options={{
            headerShown:false,
            tabBarIcon:()=>(
              <Pressable style={{justifyContent:'center',alignItems:'center',top:10}}>
                <Image source={require('../assets/images/icons/course.png')}
                style={styles.tabIcon}
                  />
              </Pressable>
            )
          }}
        />
        <Tab.Screen name="RSLMA" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon:({focused}) =>(
              <View style={styles.viewIcon}>
                <Image source={require('../assets/images/icons/home.png')}
                  resizeMethod='contain'
                  style={[styles.tabIcon,{tintColor: focused ? '#e32f45' : '#748c94'}]}
                />
            </View>
          )}}
        />
        <Tab.Screen name="Search" component={SearchScreen}
          options={{
            // headerShown:false,
            tabBarIcon:({focused})=>(
              <View style={{justifyContent:'center',alignItems:'center',top:10}}>
                
                  <Feather
                  style={styles.tabIcon}
          name="search"
          size={30}
          color="black"
        />
              </View>
            )
          }}
        />

        <Tab.Screen name="Speech" component={SpeechScreen}
          options={{
            // headerShown:false,
            tabBarIcon:({focused})=>(
              <View style={{justifyContent:'center',alignItems:'center',top:10}}>
                <FontAwesome name="microphone" style={styles.tabIcon} size={30} color="black" />
              </View>
            )
          }}
        />

      
      </Tab.Navigator>
    );
  }


const styles = StyleSheet.create({
shadow:{
  shadowColor:'#7f5df0',
  shadowOffset:{
    width:0,height:10,
  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  elevation:5
},
viewIcon:{
  justifyContent:'center',
  alignItems:'center',
  // top:-10,
  backgroundColor:'#ffcc00',
  height: height *7/100,
  width: height *7/100,
  borderRadius:30
},
tabIcon:{
  width:35,
  height:35,
}
})