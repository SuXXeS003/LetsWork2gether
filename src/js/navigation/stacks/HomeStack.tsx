import { createStackNavigator } from "@react-navigation/stack";
import * as Colors from "../../util/Color";
import { GameDetailsScreen } from "../screens/games/GameDetailsScreen";
import { HomeScreen } from "../screens/home/HomeScreen";


const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    >
      <Stack.Screen
        name="Home Stack"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Games Details"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: "Hier kommt Param hin",
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStack };
