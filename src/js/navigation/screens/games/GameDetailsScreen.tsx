import type { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { Image, Text, View } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { useTailwind } from "tailwind-rn";
import { GameStackParamList } from "../../stacks/GameStackParamList";


type Props = StackScreenProps<GameStackParamList, "GameDetails">;

interface InfoCardProps extends React.BaseHTMLAttributes<React.ReactElement> {}

export const InfoCard = ({ ...rest }: InfoCardProps) => {
const tw = useTailwind();

  return <View style={tw("p-2 bg-primary-600 mt-2")}>{rest.children}</View>;
};

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
          <Text style={textStyle}>{`Title: ${game.name}`} </Text>
        </InfoCard>

        <InfoCard>
          <Text style={textStyle}>{game.description}</Text>
        </InfoCard>
      </View>
    </BaseContent>
  );
};

export { GameDetailsScreen };
