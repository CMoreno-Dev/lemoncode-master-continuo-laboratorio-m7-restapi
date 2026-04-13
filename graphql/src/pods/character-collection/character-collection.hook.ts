import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

const ITEMS_PER_PAGE = 5;

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const loadPage = (pageNumber: number) => {
    setLoading(true);
    getCharacterCollection(pageNumber).then((result) => {
      const allCharacters = mapToCollection(result.characters, mapFromApiToVm);
      const slicedCharacters = allCharacters.slice(0, ITEMS_PER_PAGE);
      const calculatedTotalPages = Math.ceil(result.info.count / ITEMS_PER_PAGE);
      
      setCharacterCollection(slicedCharacters);
      setTotalPages(calculatedTotalPages);
      setPage(pageNumber);
      setLoading(false);
    });
  };

  const loadCharacterCollection = () => {
    loadPage(1);
  };

  return { characterCollection, page, totalPages, loading, loadPage, loadCharacterCollection };
};