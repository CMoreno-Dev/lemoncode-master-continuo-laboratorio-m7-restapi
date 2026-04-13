import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  search: string;
  onNavigate: (id: string) => void;
  onSearch: (search: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, search, onNavigate, onSearch } = props;
  const [searchInput, setSearchInput] = React.useState(search);

  React.useEffect(() => {
    setSearchInput(search);
  }, [search]);

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
          label="Search by name"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchChange}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearchSubmit}>
          Search
        </Button>
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
};