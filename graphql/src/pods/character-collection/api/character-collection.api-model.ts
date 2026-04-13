export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  bestSentence?: string;
}

export interface CharacterCollectionResponse {
  characters: CharacterEntityApi[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}