import { CharacterEntityApi } from './character-collection.api-model';

const BASE_URL = 'http://localhost:3000/api';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();
  return data.results;
};