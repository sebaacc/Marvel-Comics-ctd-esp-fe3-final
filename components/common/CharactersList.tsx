import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./CharactersList.module.css";

export interface charactersListProps {
  characters: characterFormat[];
}
export interface characterFormat {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: Url[];
}
interface Url {
  type: string;
  url: string;
}
interface Stories {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}
interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}
interface Comics {
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
export default function CharactersList({ characters }: charactersListProps) {
  const cardList = (
    <>
      {characters.map((character) => (
        <Card className={styles.asociatedCharacterCard} key={character.id}>
          <CardMedia
            sx={{
              width: "30vh",
              height: "30vh",
              objectFit: "contain",
              borderRadius: "50%",
            }}
            component="img"
            height="20"
            image={
              character.thumbnail.path + "." + character.thumbnail.extension
            }
            alt={character.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );

  return <div className={styles.charactersContainer}>{cardList}</div>;
}
