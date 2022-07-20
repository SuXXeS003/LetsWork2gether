import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { BaseContent } from "../../../components/base-layout/BaseContent";
import { Game } from "../../../remotes/GameRemote";
import GameList from "../GameObject.json";
import {GameItem} from "../../../components/list-items/GameItem";

interface Props {}

const HomeScreen = ({ navigation }: any, {}: Props) => {
  function handlePress() {
    navigation.navigate("Games Details");
  }

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

   function fetchData() {
    console.log(GameList[0].name);
    const myGameList: Game[] =[];

    GameList.forEach(item=>{
      console.log(item.name)
    })
    // GameList.forEach((item) => {
    //   myGameList.push({
    //     name: item.name,
    //     description: item.description,
    //     imageUrl: item.imageUrl,
    //     igdbId: item.igdbId,
    //     genres: item.genres,
    //     rating: item.rating,
    //     ratingCount: item.ratingCount,
    //     steamlink: item.steamlink,
    //     platforms: item.platforms,
    //     // releaseDates:item.releaseDates
    //   });
    // });

    setGames(myGameList);
  }

  const styleListContainer:string = "tw-h-full tw-bg-secondary-300 tw-flex tw-flex-col tw-justify-between"
  return (
    <BaseContent>
    <View className={styleListContainer}>
      <FlatList
      ListHeaderComponent={<View><Text className="tw-text-white tw-text-xl">New Releases</Text></View>}
      ListHeaderComponentStyle={styles.listHeader}
      contentContainerStyle={styles.listContent}
        data={GameList}
        numColumns={3}
        renderItem={(item) => {
          const game = item.item as Game;
          return (
          <View>
            <GameItem game={game} index={0}></GameItem>
            </View>
          )
        }}
        keyExtractor={(item) => item.igdbId.toString()}
      ></FlatList>

    </View>
    </BaseContent>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    height:55,
    justifyContent:"center",
  },
  listContent: {
    padding:24,
  }
})
export { HomeScreen };
