import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ComicProps } from "dh-marvel/components/common/CardM";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import styles from "./comicPage.module.css";

const Comic: NextPage<ComicProps> = ({ comic }) => {
  const srcImg = comic.thumbnail.path + "." + comic.thumbnail.extension;
  const comicTitle = comic.title;


  //console.log(comic.prices)


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
            Precio anterior: <s>{comic.prices[0].price}</s>
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1.5 }} color="text.primary">
            Precio: {comic.prices[0].price}
          </Typography>
          <Typography variant="body2">
          {comic.description}
          </Typography>
        </div>
        <CardActions>
          <Button size="large">Comprar</Button>
        </CardActions>
      </CardContent>
    </>
  );

  return (
    <>
      <Card className={styles.comicCard} variant="outlined">
        {card}
      </Card>
    </>
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
