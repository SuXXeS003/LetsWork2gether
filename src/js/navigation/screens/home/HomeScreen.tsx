import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { Game } from "../../../remotes/GameRemote";
import GameList from "../GameObject.json";
import { GameItem } from "../../../components/list-items/GameItem";
import { useTailwind } from "tailwind-rn";

interface Props {}

const HomeScreen = ({ navigation }: any, {}: Props) => {
  function handlePress() {
    navigation.navigate("Games Details");
  }

const tw = useTailwind();

  return (
    <BaseContent>
      <View style={tw("h-full")}>
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
                <GameItem game={game} index={0}></GameItem>
            );
          }}
          keyExtractor={(item) => item.igdbId.toString()}
        ></FlatList>
      </View>
      </BaseContent>
  );
};

const styles = StyleSheet.create({
});
export { HomeScreen };
