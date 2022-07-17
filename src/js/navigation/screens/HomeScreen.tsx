import * as React from "react";
import { View, Text } from "react-native";

interface Props {}

const HomeScreen = (navigation:any,{}: Props) => {
  return (
    <View className="tw-flex tw-bg-secondary-300">
      <Text>HOMESCREEN</Text>
    </View>
  );
};

export { HomeScreen };
