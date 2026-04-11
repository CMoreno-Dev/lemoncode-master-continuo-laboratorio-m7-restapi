import { CharacterEntityApi } from './character-collection.api-model';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();
  return data.results;
};