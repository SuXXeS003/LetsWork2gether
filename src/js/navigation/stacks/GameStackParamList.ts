import { Game } from "../../remotes/GameRemote";

export type GameStackParamList = {
  GamesScreen: undefined;
  GameDetails: { game: Game };
};
