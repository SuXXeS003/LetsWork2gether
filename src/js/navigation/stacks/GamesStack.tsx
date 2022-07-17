import { createStackNavigator } from "@react-navigation/stack";
import * as Colors from "../../util/Color";
import { GameDetailsScreen } from "../screens/GameDetailsScreen";
import { GamesScreen } from "../screens/GamesScreen";

const Stack = createStackNavigator();

function GamesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE
      }}
    >
      <Stack.Screen
        name="Games Stack"
        component={GamesScreen}
        options={{ title: "Games" }}
      />
      <Stack.Screen
        name="Games Details"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: "Hier kommt Param hin",
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          headerTintColor: Colors.WHITE,
        })}
      />
    </Stack.Navigator>
  );
}

export { GamesStack };
