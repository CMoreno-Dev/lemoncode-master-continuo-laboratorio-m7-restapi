import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, page, totalPages, loading, loadPage, loadCharacterCollection, search, onSearch } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleNavigate = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  const handlePageChange = (pageNumber: number) => {
    loadPage(pageNumber, search);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      page={page}
      totalPages={totalPages}
      loading={loading}
      search={search}
      onNavigate={handleNavigate}
      onPageChange={handlePageChange}
      onSearch={onSearch}
    />
  );
};