import { StatusBar } from "expo-status-bar";
import {  Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { withStyledProps } from "tailwindcss-react-native/dist/with-styled-props";

export default function App() {
  return (
    <TailwindProvider>
      <View className="tw-flex-1 tw-items-center tw-justify-center tw-bg-white">
        <Text className="tw-font-bold tw-text-red-700">Hello World...</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}

function MyAppsProviders({ children }: any) {
  return <TailwindProvider>{children}</TailwindProvider>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
