import styled from "@emotion/styled";
import { CardMedia,Card } from "@mui/material";

export const MovieCard = styled(Card)({
  display: 'flex',
  marginBottom: '1rem',
});

export const MovieMedia = styled(CardMedia)({
  width: 150,
  height: '100%',
  objectFit: 'cover',
});


