import type { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { Image, Text, View } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { useTailwind } from "tailwind-rn";
import { GameStackParamList } from "../../stacks/GameStackParamList";
import { InfoCard } from "./components/InfoCard";


type Props = StackScreenProps<GameStackParamList, "GameDetails">;



const GameDetailsScreen = ({ navigation, route }: Props) => {
  const tw = useTailwind();
  const { game } = route.params;
  const textStyle = tw("text-white");

  return (
    <BaseContent>
      <View style={tw("flex-col h-full")}>
        <Image
          style={tw("h-32 w-full")}
          source={{
            uri: game.imageUrl || "",
          }}
        />

        <InfoCard>
          <Text numberOfLines={3} style={tw("text-white font-bold")}>
            {game.name} 
          </Text>
        </InfoCard>

        <InfoCard >
          <Text style={textStyle}>{game.description}</Text>
        </InfoCard>
      </View>
    </BaseContent>
  );
};

export { GameDetailsScreen };
