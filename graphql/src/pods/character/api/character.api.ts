import { CharacterEntityApi } from './character.api-model';
import { CharacterVm } from '../character.vm';

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql';

const GET_CHARACTER_QUERY = `
  query($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

const getBestSentenceKey = (id: string) => `bestSentence_${id}`;

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_CHARACTER_QUERY,
      variables: { id },
    }),
  });

  const { data } = await response.json();
  const character = data.character;
  
  const bestSentence = localStorage.getItem(getBestSentenceKey(id)) || '';
  
  return {
    ...character,
    bestSentence,
  };
};

export const saveCharacter = async (character: CharacterVm): Promise<void> => {
  localStorage.setItem(getBestSentenceKey(character.id), character.bestSentence);
};