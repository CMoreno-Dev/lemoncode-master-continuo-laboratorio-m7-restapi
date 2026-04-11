import * as React from 'react';
import { CharacterVm } from './character.vm';
import { getCharacter, saveCharacter as saveCharacterApi } from './api';
import { mapFromApiToVm } from './character.mapper';

export const useCharacter = (id: string) => {
  const [character, setCharacter] = React.useState<CharacterVm | null>(null);

  const loadCharacter = (id: string) => {
    getCharacter(id).then((result) =>
      setCharacter(mapFromApiToVm(result))
    );
  };

  const saveCharacter = (character: CharacterVm) => {
    saveCharacterApi(character).then(() => {
      setCharacter(character);
    });
  };

  return { character, loadCharacter, saveCharacter };
};