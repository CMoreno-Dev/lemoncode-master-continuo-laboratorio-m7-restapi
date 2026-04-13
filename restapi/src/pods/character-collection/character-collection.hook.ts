import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );
  const [search, setSearch] = React.useState('');

  const loadCharacterCollection = (searchTerm: string = '') => {
    getCharacterCollection(searchTerm).then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  const onSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    loadCharacterCollection(searchTerm);
  };

  return { characterCollection, loadCharacterCollection, search, onSearch };
};