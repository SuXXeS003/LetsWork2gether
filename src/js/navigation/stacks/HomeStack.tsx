import { createStackNavigator } from "@react-navigation/stack";
import { StackScreenOptions } from "../../util/ScreenOptions";
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={StackScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export { HomeStack };
