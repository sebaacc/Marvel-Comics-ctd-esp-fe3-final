import {  Container } from "@mui/material";
import CheckoutForm from "dh-marvel/components/Form/CheckoutForm";
import { comicFormat } from "dh-marvel/components/common/CardM";
import CheckoutComicCard from "dh-marvel/components/common/CheckoutComicCard";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./checkout.module.css"

const CheckoutPage: NextPage<comicFormat> = () => {

  const [comic, setComic] = useState<comicFormat | null>();

  useEffect(() => {
    const savedComic = localStorage.getItem("selectedComic");
    if (savedComic) {
      setComic(JSON.parse(savedComic));
    }
  }, []);

  return (
    <Container className={styles.containerCheckout} maxWidth="lg">
      {<CheckoutForm />}
      <CheckoutComicCard comic={comic}/>
    </Container>
  );
};


export default CheckoutPage;
