import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "pages/checkout/checkout.module.css";
import { useRouter } from "next/router";

export type FormValues = {
  customer: {
    name: string;
    lastname: string;
    email: string;
    address: {
      address1: string;
      address2: string | null;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  card: {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  };
  order: {
    name: string;
    image: string;
    price: number;
  };
};

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const steps = ["Datos Personales", "Dirección de entrega", "Datos del pago"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    router.push("/confirmacion-compra");
  };

  const [securityCodeVisible, setSecurityCodeVisible] = useState(false);

  const toggleSecurityCodeVisibility = () => {
    setSecurityCodeVisible((prev) => !prev);
  };

  const checkoutForm = (
    <>
      <Container className={styles.containerForm}>
        <Typography variant="h2" align="center" gutterBottom>
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+$/,
                      message: "El apellido no debe contener números",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 letras",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      fullWidth
                      error={!!errors.customer?.name}
                      helperText={errors.customer?.name?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.lastname"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener al menos 2 letras",
                    },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+$/,
                      message: "El Apellido no debe contener números",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Apellido"
                      fullWidth
                      error={!!errors.customer?.lastname}
                      helperText={errors.customer?.lastname?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Ingrese un email válido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      error={!!errors.customer?.email}
                      helperText={errors.customer?.email?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          )}

          {activeStep === 1 && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.address.address1"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Dirección"
                      fullWidth
                      error={!!errors.customer?.address?.address1}
                      helperText={errors.customer?.address?.address1?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.address.address2"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Departamento, piso, etc."
                      fullWidth
                      error={!!errors.customer?.address?.address2}
                      helperText={errors.customer?.address?.address2?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.address.city"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Ciudad"
                      fullWidth
                      error={!!errors.customer?.address?.city}
                      helperText={errors.customer?.address?.city?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.address.state"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Provincia"
                      fullWidth
                      error={!!errors.customer?.address?.state}
                      helperText={errors.customer?.address?.state?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="customer.address.zipCode"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Ingrese solo números",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Código Postal"
                      fullWidth
                      error={!!errors.customer?.address?.zipCode}
                      helperText={errors.customer?.address?.zipCode?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          )}

          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="card.number"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value:
                        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                      message: "Ingrese un número de tarjeta de crédito válido",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Número de tarjeta"
                      fullWidth
                      error={!!errors.card?.number}
                      helperText={errors.card?.number?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="card.nameOnCard"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    minLength: 2,
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "El nombre no debe contener números ni caracteres especiales",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre como aparece en la tarjeta"
                      fullWidth
                      error={!!errors.card?.nameOnCard}
                      helperText={errors.card?.nameOnCard?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="card.expDate"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: "Ingrese una fecha de expiración válida (MM/YY)",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Fecha de expiración de la tarjeta"
                      fullWidth
                      error={!!errors.card?.expDate}
                      helperText={errors.card?.expDate?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="card.cvc"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Código de Seguridad"
                      fullWidth
                      type={securityCodeVisible ? "text" : "password"}
                      error={!!errors.card?.cvc}
                      helperText={errors.card?.cvc?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={toggleSecurityCodeVisibility}
                              edge="end"
                            >
                              {securityCodeVisible ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Grid item xs={12} sm={6}></Grid>
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2}>
            {activeStep !== 0 && (
              <Grid item xs={12}>
                <Button onClick={handleBack}>Regresar</Button>
              </Grid>
            )}
            <Grid item xs={12}>
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "1rem" }}
                >
                  <span>Finalizar compra</span>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ marginTop: "1rem" }}
                >
                  Siguiente
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );

  return <>{checkoutForm}</>;
};

export default CheckoutForm;
