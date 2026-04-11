import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterVm;
  onSave: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const [localBestSentence, setLocalBestSentence] = useState(character.bestSentence);

  const handleSave = () => {
    onSave({ ...character, bestSentence: localBestSentence });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {character.name}
      </Typography>
      
      <img src={character.image} alt={character.name} className={classes.image} />
      
      <div className={classes.info}>
        <div className={classes.field}>
          <Typography variant="subtitle1"><strong>Status:</strong> {character.status}</Typography>
        </div>
        <div className={classes.field}>
          <Typography variant="subtitle1"><strong>Species:</strong> {character.species}</Typography>
        </div>
        <div className={classes.field}>
          <Typography variant="subtitle1"><strong>Gender:</strong> {character.gender}</Typography>
        </div>
        <div className={classes.field}>
          <Typography variant="subtitle1"><strong>Location:</strong> {character.location}</Typography>
        </div>
        <div className={classes.field}>
          <Typography variant="subtitle1"><strong>Origin:</strong> {character.origin}</Typography>
        </div>
        
        <TextField
          name="bestSentence"
          label="Best Sentence"
          value={localBestSentence}
          onChange={(e) => setLocalBestSentence(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={3}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};