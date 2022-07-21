import { View, Text } from "react-native";
import * as Colors from "../util/Color";

import { BottomTabNavigation } from "./BottomTabNavigation";
import { StatusBar } from "expo-status-bar";
import { takeWhile } from "lodash";
import { useTailwind } from "tailwind-rn/dist";

export default function MainContainer() {

  const tw = useTailwind();

  return (
    <View style={tw("flex h-full")}>
      <StatusBar backgroundColor={Colors.PRIMARY} style="light"></StatusBar>
      <BottomTabNavigation />
    </View>
  );
}
