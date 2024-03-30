import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./card.module.css";
import Link from "next/link";

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

export default function CardM({ comic }: ComicProps) {
  const handleBuyClick = () => {
    localStorage.setItem("selectedComic", JSON.stringify(comic));
  };
  const inStock: boolean = (comic.prices[0].price > 0 ? true : false);

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
        <CardActions className={styles.cardButtonDiv}>
        {inStock ? (
            <Link href={"/checkout"}>
              <Button size="large" onClick={handleBuyClick}>
                Comprar
              </Button>
            </Link>
          ) : (
            <Button disabled size="large">
              Comprar
            </Button>
          )}
          <Link href={"/comics/" + comic.id}>
            <Button size="large">Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
