import { css } from '@emotion/css';

export const root = css`
  padding: 1rem;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
`;