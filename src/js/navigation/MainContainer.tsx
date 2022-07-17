import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text } from "react-native";
import * as Colors from "../util/Color";

import { BottomTabNavigation } from "./BottomTabNavigation";
import { StatusBar } from "expo-status-bar";

export default function MainContainer() {
  return (
    <TailwindProvider>
      <StatusBar backgroundColor={Colors.PRIMARY} style="light"></StatusBar>
      <BottomTabNavigation />
    </TailwindProvider>
  );
}

function MyAppsProviders({ children }: any) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
