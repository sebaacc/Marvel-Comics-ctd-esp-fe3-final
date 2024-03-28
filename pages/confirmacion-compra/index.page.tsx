import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Container, Typography } from "@mui/material";
import styles from "./confirmation.module.css";

const ConfirmationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className={styles.confirmationDiv}>
      <Typography variant="h3" align="center" gutterBottom>
        Confirmación de Pago
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        ¡Gracias por su compra! Estamos procesando su pago.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Será redirigido a la página de inicio en unos segundos.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/")}
      >
        Volver a la página de inicio
      </Button>
    </Container>
  );
};

export default ConfirmationPage;
