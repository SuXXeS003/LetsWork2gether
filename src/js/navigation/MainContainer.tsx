import { TailwindProvider } from "tailwindcss-react-native";
import { View, Text } from "react-native";

import { BottomTabNavigation } from "./BottomTabNavigation";

export default function MainContainer() {
  return (
    <TailwindProvider>
      <BottomTabNavigation />
    </TailwindProvider>
  );
}

function MyAppsProviders({ children }: any) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
