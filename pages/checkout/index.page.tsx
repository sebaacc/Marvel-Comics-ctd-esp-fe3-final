import { Container, Typography } from "@mui/material";
import CheckoutForm from "dh-marvel/components/Form/CheckoutForm";
import { comicFormat } from "dh-marvel/components/common/CardM";
import CheckoutComicCard from "dh-marvel/components/common/CheckoutComicCard";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./checkout.module.css";

const CheckoutPage: NextPage<comicFormat> = () => {
  const [comic, setComic] = useState<comicFormat>({ "id": 0,
  "digitalId": 0,
  "title": "",
  
  "description": "",
  "modified": "",

  "prices": [
    {
      "type": "printPrice",
      "price": 0
    }
  ],
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/65d73a4012029",
    "extension": "jpg"
  },
  "images": [
    {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/65d73a4012029",
      "extension": "jpg"
    }
  ],

  "characters": {
    "available": 0,
    "collectionURI": "",
    "items": [
      {
        "resourceURI": "",
        "name": ""
      },
      {
        "resourceURI": "",
        "name": ""
      }
    ],
    "returned": 0
  },
});

  useEffect(() => {
    const savedComic = localStorage.getItem("selectedComic");
    if (savedComic) {
      setComic(JSON.parse(savedComic));
    }
  }, []);

  return (
    <>
      {comic.id > 0 ? (
        <Container className={styles.containerCheckout} maxWidth="lg">
          <CheckoutForm comic={comic} />
          <CheckoutComicCard comic={comic} />
        </Container>
      ) : (
        <Typography sx={{ margin: "3rem" }}>
          No haz seleccionado ningún comic! Vuelve al home y encuentra tu
          favorito 😃...
        </Typography>
      )}
    </>
  );
};

export default CheckoutPage;
