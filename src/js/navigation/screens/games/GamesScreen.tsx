import * as React from "react";
import { View, Text } from "react-native";

interface Props {}

const GamesScreen = (navigation: any, {}: Props) => {
  return (
    <View className="tw-flex tw-bg-secondary-600">
      <Text>GAMES SCREEN</Text>
    </View>
  );
};

export { GamesScreen };
