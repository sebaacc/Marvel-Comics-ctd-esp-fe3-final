import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ComicProps } from "dh-marvel/components/common/CardM";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";

const Comic: NextPage<ComicProps> = ({ comic }) => {
  const idComic = comic.id;
  const srcImg = comic.thumbnail.path + "." + comic.thumbnail.extension;
  const comicTitle = comic.title;

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
      <Typography variant="h3" gutterBottom>
        {comicTitle}
      </Typography>
      <Card variant="outlined">{card}</Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const idComic = Number(id);

  const comic = await getComic(idComic);

  return {
    props: {
      comic,
    },
  };
};

export default Comic;
