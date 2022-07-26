import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { Game } from "../../../remotes/GameRemote";
import GameList from "../GameObject.json";
import { GameItem } from "../../../components/list-items/GameItem";
import { useTailwind } from "tailwind-rn";
import type { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../stacks/HomeStackParamList";

type Props = StackScreenProps<HomeStackParamList, "HomeScreen">;


const HomeScreen = ({ navigation, route }: Props) => {
  function handleOnPress(game:Game) {
    navigation.navigate("GameDetails", {game});
  }

const tw = useTailwind();

  return (
    <BaseContent>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={tw("text-white text-xl")}>New Releases</Text>
            </View>
          }
          ListHeaderComponentStyle={tw("h-12 text-xl")}
          columnWrapperStyle={tw("py-2")}
          data={GameList}
          numColumns={2}
          renderItem={(item) => {
            const game = item.item as Game;
            return (
                <GameItem game={game} index={0} onPress={()=>handleOnPress(game)}></GameItem>
            );
          }}
          keyExtractor={(item) => item.igdbId.toString()}
        ></FlatList>
      </BaseContent>
  );
};

export { HomeScreen };
