import { ReactElement } from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { Game } from "../../remotes/GameRemote";

interface Props extends React.BaseHTMLAttributes<ReactElement> {
  game: Game;
  index: number;
}

const GameItem = ({ game, index }: Props) => {

  const tw = useTailwind();
  
  return (
    <View
      key={game.igdbId?.toString()}
      style={tw("flex flex-1 flex-col p-4 w-full")}
    >
      
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: game.imageUrl || "",
        }}
      />
      <Text style={tw("text-white")}>{game.name}</Text>
    </View>
  );
};

export { GameItem };
