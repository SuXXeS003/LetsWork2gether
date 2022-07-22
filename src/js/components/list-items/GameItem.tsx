import { ReactElement } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn/dist";
import { Game } from "../../remotes/GameRemote";

interface Props extends React.BaseHTMLAttributes<ReactElement> {
  game: Game;
  index: number;
  onPress: () => void;
}

const GameItem = ({ game, index, onPress }: Props) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={tw("flex-col bg-primary-400 rounded-lg items-center mr-2 h-52")}
      onPress={onPress}
    >
      <Image
        style={tw("h-2/3 w-32 rounded-t-lg")}
        source={{
          uri: game.imageUrl || "",
        }}
      />

      <Text style={tw("h-1/3 text-white  w-32 p-2")}>{game.name}</Text>
    </TouchableOpacity>
  );
};

export { GameItem };
