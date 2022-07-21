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

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const myGameList: Game[] = [];

    setGames(myGameList);
  }
  
  return (
    <BaseContent>
      <View style={tw("h-full bg-secondary-300 flex flex-col justify-between")}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={tw("text-white text-xs")}>New Releases</Text>
            </View>
          }
          ListHeaderComponentStyle={styles.listHeader}
          contentContainerStyle={styles.listContent}
          data={GameList}
          numColumns={2}
          renderItem={(item) => {
            const game = item.item as Game;
            return (
              <View>
                <GameItem game={game} index={0}></GameItem>
              </View>
            );
          }}
          keyExtractor={(item) => item.igdbId.toString()}
        ></FlatList>
      </View>
    </BaseContent>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    justifyContent: "center",
  },
  listContent: {
    padding: 24,
  },
});
export { HomeScreen };
