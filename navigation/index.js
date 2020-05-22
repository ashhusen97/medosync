import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Accident from "../screens/Accident";
import Declartion from "../screens/Declartion";
export default class Navigation extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MedoSync"
            component={Home}
            options={{
              headerTintColor: "skyblue",

              headerTitle: (
                <Image
                  style={{ width: 120, height: 40 }}
                  source={{
                    uri:
                      "https://www.medosync.com/wp-content/uploads/2019/11/MedoSync_logo_final_hor.png",
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Accident"
            component={Accident}
            options={{
              headerTintColor: "skyblue",
              headerTitle: (
                <Image
                  style={{ width: 120, height: 40 }}
                  source={{
                    uri:
                      "https://www.medosync.com/wp-content/uploads/2019/11/MedoSync_logo_final_hor.png",
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Declartion"
            component={Declartion}
            options={{
              headerTintColor: "skyblue",
              headerTitle: (
                <Image
                  style={{ width: 120, height: 40 }}
                  source={{
                    uri:
                      "https://www.medosync.com/wp-content/uploads/2019/11/MedoSync_logo_final_hor.png",
                  }}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
