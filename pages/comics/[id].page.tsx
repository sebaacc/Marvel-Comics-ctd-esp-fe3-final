import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { comicFormat } from "dh-marvel/components/common/CardM";
import {
  getCharactersFromComic,
  getComic,
} from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import styles from "./comicPage.module.css";
import CharactersList, {
  characterFormat,
} from "dh-marvel/components/common/CharactersList";

export interface ComicPropsAndCharacters {
  comic: comicFormat;
  asociatedCharacters: characterFormat[];
}

const Comic: NextPage<ComicPropsAndCharacters> = ({
  comic,
  asociatedCharacters,
}) => {
  const srcImg = comic.thumbnail.path + "." + comic.thumbnail.extension;
  const comicTitle = comic.title;
  const lastComicPrice = comic.prices[comic.prices.length - 1];
  const previousComicPrice = comic.prices[comic.prices.length - 2];
  const inStock: boolean = true;

  const card = (
    <>
      <CardMedia
        sx={{ width: "50vh", height: "70vh", objectFit: "contain" }}
        component="img"
        image={srcImg}
        alt={comicTitle}
      />
      <CardContent className={styles.comicDescription}>
        <Typography variant="h3" gutterBottom>
          {comicTitle}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            <s>Precio anterior: ${previousComicPrice?.price}</s>
          </Typography>
          <Typography variant="h5" sx={{ mb: 1.5 }} color="text.primary">
            Precio: ${lastComicPrice?.price}
          </Typography>
          <Box
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: "2px solid #1976d2", borderRadius: "13px" }}
          >
            <Typography variant="body1">{comic.description}</Typography>
          </Box>
        </div>
        <CardActions className={styles.cardActionsStyle}>
          {inStock ? (
            <Button variant="contained" size="large">
              Comprar
            </Button>
          ) : (
            <Button disabled variant="contained" size="large">
              Comprar
            </Button>
          )}
        </CardActions>
      </CardContent>
    </>
  );

  return (
    <div className={styles.comicPageContainer}>
      <Card className={styles.comicCard} variant="outlined">
        {card}
      </Card>
      <CharactersList characters={asociatedCharacters} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const idComic = Number(id);

  const comic = await getComic(idComic);
  const asociatedCharacters = await getCharactersFromComic(idComic);

  return {
    props: {
      comic,
      asociatedCharacters,
    },
  };
};

export default Comic;
