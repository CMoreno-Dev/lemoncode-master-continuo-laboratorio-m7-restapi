import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  totalPages: number;
  loading: boolean;
  onNavigate: (id: string) => void;
  onPageChange: (page: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, page, totalPages, loading, onNavigate, onPageChange } = props;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Rick & Morty Characters
      </Typography>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
      <div className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          disabled={loading}
        />
      </div>
    </div>
  );
};