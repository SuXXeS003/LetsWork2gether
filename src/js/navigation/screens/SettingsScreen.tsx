import * as React from "react";
import { View, Text } from "react-native";

interface Props {}

const SettingsScreen = (navigation:any,{}: Props) => {
  return (
    <View className="tw-flex tw-bg-primary-500">
      <Text>SETTINGS SCREEN</Text>
    </View>
  );
};

export { SettingsScreen };
