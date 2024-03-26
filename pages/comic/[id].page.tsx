import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Comic: NextPage = () => {
  const { query } = useRouter();

  const idComic = query.id;
  const srcImg =
    "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5967d3020ef5a.jpg";
  const comicTitle = "titulo";

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <>
      <img srcSet={srcImg} src={srcImg} alt={comicTitle} loading="lazy" />
      <CardContent>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent Descripción del comic
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          precio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <s>precio anterior</s>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Comprar</Button>
      </CardActions>
    </>
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        nombre del comic: {idComic}
      </Typography>

      <Card variant="outlined">{card}</Card>
    </div>
  );
};

export default Comic;
