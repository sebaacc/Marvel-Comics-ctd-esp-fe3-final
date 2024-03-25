import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./card.module.css";

export interface ComicProps {
  comic: {
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

export default function CardM({ comic }: ComicProps) {
  return (
    <div>
      <Card className={styles.card} sx={{ maxWidth: 300, minHeight: 500, minWidth: "100%" }}>
        <CardMedia
          sx={{ height: 310, backgroundSize: "contain" }}
          image={comic.thumbnail.path + "." + comic.thumbnail.extension}
          title={comic.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{minHeight:"30%"}}>
            {comic.title}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardButtonDiv}>
          <Button size="large">Comprar</Button>
          <Button size="large">Ver detalle</Button>
        </CardActions>
      </Card>
    </div>
  );
}
