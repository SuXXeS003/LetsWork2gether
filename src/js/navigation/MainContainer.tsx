import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { GamesScreen } from "./screens/GamesScreen";

import HouseIcon from "react-native-bootstrap-icons/icons/house";
import GearIcon from "react-native-bootstrap-icons/icons/gear";
import ControllerIcon from "react-native-bootstrap-icons/icons/controller";

const homeName = "Home";
const settingsName = "Settings";
const gamesName = "Games";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let routeName = route.name;


              switch (routeName) {
                case homeName:
                  return(
                    <View>
                      <HouseIcon fill={color}/>
                    </View>
                  ) ;
             
                case settingsName:
                  return(
                    <View>
                      <GearIcon fill={color}/>
                    </View>
                  ) ;
                    case gamesName:
                      return(
                        <View>
                          <ControllerIcon fill={color}/>
                        </View>
                      ) ;
              }
            },
          })}
        >
          <Tab.Screen name={gamesName} component={GamesScreen}/>
          <Tab.Screen name={homeName} component={HomeScreen}/>
          <Tab.Screen name={settingsName} component={SettingsScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

function MyAppsProviders({ children }: any) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
