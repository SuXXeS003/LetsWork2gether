export interface Game {
  steamlink: string | null;
  name: string;
  description: string;
  rating: number;
  releaseDates: ReleaseDate[];
  ratingCount: number;
  igdbId: number;
  platforms: string[];
  genres: string[];
}

export interface ReleaseDate {
  platform: string;
  region: string;
  date: string;
}
