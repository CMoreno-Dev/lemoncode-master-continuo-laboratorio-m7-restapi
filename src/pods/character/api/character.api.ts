import { CharacterEntityApi } from './character.api-model';
import { CharacterVm } from '../character.vm';

const BASE_URL = 'http://localhost:3000/api';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  return response.json();
};

export const saveCharacter = async (character: CharacterVm): Promise<void> => {
  await fetch(`${BASE_URL}/character/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bestSentence: character.bestSentence }),
  });
};