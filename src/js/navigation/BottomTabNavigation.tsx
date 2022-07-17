import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Colors from "../util/Color";
import { HomeStack } from "./stacks/HomeStack";
import { GamesStack } from "./stacks/GamesStack";

import HouseIcon from "react-native-bootstrap-icons/icons/house";
import ControllerIcon from "react-native-bootstrap-icons/icons/controller";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const homeName = "Home";
const gamesName = "Games";

const Tab = createBottomTabNavigator();

interface Props {}

const BottomTabNavigation = (navigation: any, {}: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let routeName = route.name;

            switch (routeName) {
              case homeName:
                return (
                  <View>
                    <HouseIcon fill={color} />
                  </View>
                );
              case gamesName:
                return (
                  <View>
                    <ControllerIcon fill={color} />
                  </View>
                );
            }
          },
          tabBarActiveTintColor: Colors.SECONDARY,
          // tabBarBackground:Colors.PRIMARY
        })}
      >
        <Tab.Screen name={gamesName} component={GamesStack} />
        <Tab.Screen name={homeName} component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { BottomTabNavigation };
