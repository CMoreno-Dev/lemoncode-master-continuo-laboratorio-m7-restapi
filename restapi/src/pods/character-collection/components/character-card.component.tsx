import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onNavigate: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onNavigate } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.name[0]}</Avatar>}
        title={character.name}
        subheader={`${character.species} - ${character.status}`}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle2" gutterBottom>
            Location: {character.location}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Origin: {character.origin}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onNavigate(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};