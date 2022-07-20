import { ReactElement } from "react";
import { Image, Text, View } from "react-native";
import { Game } from "../../remotes/GameRemote";

interface Props extends React.BaseHTMLAttributes<ReactElement> {
  game: Game;
  index: number;
}

const GameItem = ({ game, index }: Props) => {
  return (
    <View
      key={game.igdbId?.toString()}
      className="tw-flex tw-flex-1 tw-flex-col tw-p-4 tw-w-full"
    >
      
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: game.imageUrl || "",
        }}
      />
      <Text className="tw-text-white">{game.name}</Text>
    </View>
  );
};

export { GameItem };
