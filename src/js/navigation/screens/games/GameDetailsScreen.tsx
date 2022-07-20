import * as React from "react";
import {  Text } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";

interface Props {
  title: string;
}

const GameDetailsScreen = (navigation: any, { title = "No title" }: Props) => {
  return (
    <BaseContent>
      <Text className="tw-text-white">{`Title: ${title}`} </Text>
    </BaseContent>
  );
};

export { GameDetailsScreen };
