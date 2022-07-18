import { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { BaseContent } from "../../components/BaseContent";
import { Game } from "../../remotes/GameRemote";
import * as GameList from "./GameObject.json";
import { cloneDeep } from "lodash";
import { GamesScreen } from "./GamesScreen";

interface Props {}

const HomeScreen = ({ navigation }: any, {}: Props) => {
  function handlePress() {
    navigation.navigate("Games Details");
  }

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(Object.values(JSON.parse(JSON.stringify(GameList))) as Game[]);
  }, []);

  useEffect(() => {
    // console.log(games[0].name)
    games.map((g) => console.log(g));
  }, [games]);

  return (
    <BaseContent>
      <Text className="tw-text-white tw-text-lg">New Releases</Text>
      {/* <View className=" tw-grid tw-grid-cols-3 tw-gap-3 "> */}
      {games.map((game) => {
        return(
         
          <View key={game.igdbId}>
          <Image
            style={{ width: "50px", height: "50px" }}
            source={{
              uri: "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg",
            }}
          />
          <Text className="tw-text-white">{game.name}</Text>
        </View>
        )
     
      })}
         {/* </View> */}
      {/* <Button onPress={handlePress} title="Game Details"></Button> */}
    </BaseContent>
  );
};

export { HomeScreen };
