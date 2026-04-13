import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  totalPages: number;
  loading: boolean;
  search: string;
  onNavigate: (id: string) => void;
  onPageChange: (page: number) => void;
  onSearch: (search: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, page, totalPages, loading, search, onNavigate, onPageChange, onSearch } = props;
  const [searchInput, setSearchInput] = React.useState(search);

  React.useEffect(() => {
    setSearchInput(search);
  }, [search]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchInput);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Rick & Morty Characters
      </Typography>
      <div className={classes.search}>
        <TextField
          label="Búsqueda por nombre"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchChange}
          fullWidth
          disabled={loading}
        />
        <Button variant="contained" onClick={handleSearchSubmit} disabled={loading}>
          Buscar
        </Button>
      </div>
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