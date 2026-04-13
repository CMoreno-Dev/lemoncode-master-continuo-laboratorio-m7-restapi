import { CharacterEntityApi, CharacterCollectionResponse } from './character-collection.api-model';

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql';

const GET_CHARACTERS_QUERY = `
  query($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
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
  }
`;

export const getCharacterCollection = async (page: number = 1): Promise<CharacterCollectionResponse> => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_CHARACTERS_QUERY,
      variables: { page },
    }),
  });

  const { data } = await response.json();
  return {
    characters: data.characters.results,
    info: data.characters.info,
  };
};