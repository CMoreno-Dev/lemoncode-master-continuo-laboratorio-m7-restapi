import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  location: character.location.name,
  origin: character.origin.name,
});