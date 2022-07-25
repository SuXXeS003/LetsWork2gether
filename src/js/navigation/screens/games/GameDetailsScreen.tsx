import type { StackScreenProps } from "@react-navigation/stack";
import React, { Component } from 'react'
import { Image, Text, View, Linking } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { useTailwind } from "tailwind-rn";
import { GameStackParamList } from "../../stacks/GameStackParamList";
import { InfoCard } from "./components/InfoCard";
import Icon from "@mdi/react";
import {  mdiSteam } from "@mdi/js";
import * as Colors from "../../../util/Color";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = StackScreenProps<GameStackParamList, "GameDetails">;

const GameDetailsScreen  = ({ navigation, route }: Props)  => {
  const tw = useTailwind();
  const { game } = route.params;
  const textStyle = tw("text-white");
  const textStyleBold = tw("text-white font-bold");

  function handleOpenLink(url: string) {
    Linking.openURL(url).catch((err) => console.error("An error occured", err));
  }

  return (
    <View style={tw("flex-col h-full")}>
      <Image
        style={tw("h-32 w-full")}
        source={{
          uri: game.imageUrl || "",
        }}
      />

      <BaseContent>
        <InfoCard>
          <Text numberOfLines={3} style={tw("text-white font-bold")}>
            {game.name}
          </Text>
        </InfoCard>

        <InfoCard>
          <Text style={textStyle}>{game.description}</Text>
        </InfoCard>

        <InfoCard>
          <View style={tw("flex-col")}>
            <Text style={textStyleBold}>Genres</Text>
            <Text style={textStyle}>{game.genres}</Text>
          </View>
        </InfoCard>

        <InfoCard>
          <View style={tw("flex-col")}>
            <Text style={textStyleBold}>Platforms</Text>
            <Text style={textStyle}>{game.platforms.join(", ")}</Text>
          </View>
        </InfoCard>

        <InfoCard>
          <View style={tw("flex-col")}>
            <Text style={textStyleBold}>Rating</Text>
            <Text style={textStyle}>
              {game.rating ? game.rating.toFixed(2) : "No rating"}
            </Text>
          </View>
        </InfoCard>

        {/* <InfoCard expandable={false}>
          <View style={tw("flex-col")}>
            <Text style={textStyleBold}>Links</Text>
            {game.steamlink ? (
              <TouchableOpacity onPress={() => handleOpenLink(game.steamlink!)}>
                <Icon
                  path={mdiSteam}
                  size={3}
                  color={Colors.WHITE}
                />
               </TouchableOpacity>
            ) : (
              null
            )}
          </View>
        </InfoCard> */}
      </BaseContent>
    </View>
  );
};

export { GameDetailsScreen };
