import { takeWhile } from "lodash";
import * as React from "react";
import {  Text } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { useTailwind } from "tailwind-rn";


interface Props {
  title: string;
}


const GameDetailsScreen = (navigation: any, { title = "No title" }: Props) => {

const tw = useTailwind();

  return (
    <BaseContent>
      <Text style={tw("text-white")}>{`Title: ${title}`} </Text>
    </BaseContent>
  );
};

export { GameDetailsScreen };
