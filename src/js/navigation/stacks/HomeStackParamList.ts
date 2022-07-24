import { Game } from "../../remotes/GameRemote";

export type HomeStackParamList = {
  HomeScreen: undefined;
  GameDetails: { game: Game };
};
