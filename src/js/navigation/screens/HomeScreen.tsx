import * as React from "react";
import { View, Text, Button } from "react-native";
import { BaseContent } from "../../components/BaseContent";

interface Props {}


const HomeScreen = ({navigation}:any, {}: Props) => {
  function handlePress(){
    navigation.navigate("Games Details")
    }

  return (
  <BaseContent>
  <Text className="tw-text-white">New Releases</Text>
  <Button onPress={ handlePress } title="Game Details"></Button>
  </BaseContent>
  );
};

export { HomeScreen };
