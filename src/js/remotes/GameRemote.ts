export interface Game {
  steamlink: string | null;
  name: string;
  description: string;
  imageUrl:string | null;
  rating: number | null;
  // releaseDates: Record<string, ReleaseDate>;
  ratingCount: number | null;
  igdbId: number;
  platforms: string[];
  genres: string[];
}

export interface ReleaseDate {
  region: string;
  date: string;
}
