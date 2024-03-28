import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./card.module.css";
import { getServerSideProps } from "dh-marvel/pages/comics/[id].page";

export interface ComicProps {
  comic: comicFormat;
}

export interface comicFormat {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  modified: string;
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  characters: Characters;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}
interface Item {
  resourceURI: string;
  name: string;
}
interface Thumbnail {
  path: string;
  extension: string;
}
interface Price {
  type: string;
  price: number;
}

export default function CheckoutComicCard({ comic }: ComicProps) {
  const lastComicPrice = comic.prices[comic.prices.length - 1];

  return (
    <div>
      <Card
        className={styles.card}
        sx={{ maxWidth: 300, minHeight: 500, minWidth: "100%" }}
      >
        <CardMedia
          sx={{ height: 310, backgroundSize: "contain" }}
          image={comic.thumbnail.path + "." + comic.thumbnail.extension}
          title={comic.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ minHeight: "30%" }}
          >
            {comic.title}
          </Typography>
        </CardContent>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.primary">
          Precio: ${lastComicPrice?.price}
        </Typography>
      </Card>
    </div>
  );
}
