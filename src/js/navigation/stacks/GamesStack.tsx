import { createStackNavigator } from "@react-navigation/stack";
import { StackScreenOptions } from "../../util/ScreenOptions";
import { GamesScreen } from "../screens/GamesScreen";

const Stack = createStackNavigator();

function GamesStack() {
  return (
    <Stack.Navigator screenOptions={StackScreenOptions}>
      <Stack.Screen name="Games" component={GamesScreen} />
    </Stack.Navigator>
  );
}

export { GamesStack };
