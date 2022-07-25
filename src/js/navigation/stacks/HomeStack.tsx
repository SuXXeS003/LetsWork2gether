import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import * as Colors from "../../util/Color";
import { GameDetailsScreen } from "../screens/games/GameDetailsScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { HomeStackParamList } from "./HomeStackParamList";

const Stack = createStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
          borderBottomColor:Colors.SECONDARY
        },
        headerTintColor: Colors.WHITE,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.game.name,
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeStack };
