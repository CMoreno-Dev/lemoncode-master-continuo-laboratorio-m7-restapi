import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacter } from './character.hook';
import { CharacterComponent } from './character.component';

export const CharacterContainer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { character, loadCharacter, saveCharacter } = useCharacter(id!);

  React.useEffect(() => {
    loadCharacter(id!);
  }, [id]);

  const handleSave = (character: any) => {
    saveCharacter(character);
    navigate(linkRoutes.characterCollection);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
    />
  );
};