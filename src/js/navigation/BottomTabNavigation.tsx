import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import * as Colors from "../util/Color";
import { HomeStack } from "./stacks/HomeStack";
import { GamesStack } from "./stacks/GamesStack";

import HouseIcon from "react-native-bootstrap-icons/icons/house";
import ControllerIcon from "react-native-bootstrap-icons/icons/controller";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BottomTabNavigationParams } from "./types/BottomTabNavigationParams";

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
                  <HouseIcon fill={focused ? Colors.SECONDARY : Colors.WHITE} />
                );
              case gamesName:
                return (
                  <ControllerIcon
                    fill={focused ? Colors.SECONDARY : Colors.WHITE}
                  />
                );
            }
          },
          tabBarActiveTintColor: Colors.SECONDARY,
          tabBarInactiveTintColor: Colors.WHITE,
          tabBarActiveBackgroundColor: Colors.PRIMARY,
          tabBarInactiveBackgroundColor: Colors.PRIMARY,
          tabBarLabelStyle: { paddingTop: 5 },
          tabBarItemStyle: { padding: 10 },
          tabBarStyle: { borderTopColor: Colors.SECONDARY, borderTopWidth: 1 },
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
            borderBottomWidth: 1,
            borderBottomColor: Colors.SECONDARY,
          },
          headerTintColor: Colors.WHITE,
        })}
      >
        <Tab.Screen name={gamesName} component={GamesStack} />
        <Tab.Screen name={homeName} component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { BottomTabNavigation };
