import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { characterFormat } from "dh-marvel/components/common/CharactersList";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import styles from "../comics/comicPage.module.css";

export interface CharacterProp {
  character: characterFormat;
}

const Character: NextPage<CharacterProp> = ({ character }) => {
  const srcImg = character.thumbnail.path + "." + character.thumbnail.extension;
  const name = character.name;
  const card = (
    <Card className={styles.characterPageCard} sx={{ maxWidth: "75%", minHeight: "85%" }}>
      <CardMedia
        sx={{ width: "50vh", height: "70vh", objectFit: "contain" }}
        component="img"
        image={srcImg}
        alt={name}
      />
      <CardContent className={styles.characterDescription}>
        <Typography variant="h3" gutterBottom>
          {name}
        </Typography>
        {character.description ? (
          <Box
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: "2px solid #1976d2", borderRadius: "13px" }}
          >
            <Typography variant="body1">{character.description}</Typography>
          </Box>
        ) : (
          "No se encontró descripción del personaje."
        )}
      </CardContent>
    </Card>
  );

  return <div className={styles.comicPageContainer}>{card}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const idCharacter = Number(id);
  const character = await getCharacter(idCharacter);

  return {
    props: {
      character,
    },
  };
};

export default Character;
