import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  location: character.location.name,
  origin: character.origin.name,
  bestSentence: character.bestSentence || '',
});