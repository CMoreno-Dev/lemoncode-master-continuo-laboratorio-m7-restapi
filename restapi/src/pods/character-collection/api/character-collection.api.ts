import { CharacterEntityApi } from './character-collection.api-model';

const BASE_URL = 'http://localhost:3000/api';

export const getCharacterCollection = async (name: string = ''): Promise<CharacterEntityApi[]> => {
  const url = name ? `${BASE_URL}/character?name=${encodeURIComponent(name)}` : `${BASE_URL}/character`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};