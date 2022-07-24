import * as React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";


interface Props {}


const GamesScreen = (navigation: any, {}: Props) => {

const tw = useTailwind();

  return (
    <View style={tw("flex bg-secondary-600")}>
      <Text>GAMES SCREEN</Text>
    </View>
  );
};

export { GamesScreen };
