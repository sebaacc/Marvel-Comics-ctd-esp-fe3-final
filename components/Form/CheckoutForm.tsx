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
import Link from "next/link";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  department: string;
  city: string;
  province: string;
  postalCode: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  securityCode: string;
};

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      securityCode: "",
    },
  });

  const steps = ["Datos Personales", "Dirección de entrega", "Datos del pago"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const [securityCodeVisible, setSecurityCodeVisible] = useState(false);

  const toggleSecurityCodeVisibility = () => {
    setSecurityCodeVisible((prev) => !prev);
  };

  const checkoutForm = (
    <>
      <Container>
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
                  name="firstName"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 letras",
                    },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+$/,
                      message: "El nombre no debe contener números",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      fullWidth
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    minLength: 2,
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
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
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
                      error={!!errors.email}
                      helperText={errors.email?.message}
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
                  name="address"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Dirección"
                      fullWidth
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="department"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Departamento, piso, etc."
                      fullWidth
                      error={!!errors.department}
                      helperText={errors.department?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="city"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Ciudad"
                      fullWidth
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="province"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Provincia"
                      fullWidth
                      error={!!errors.province}
                      helperText={errors.province?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="postalCode"
                  control={control}
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
                      error={!!errors.postalCode}
                      helperText={errors.postalCode?.message}
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
                  name="cardNumber"
                  control={control}
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
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="cardName"
                  control={control}
                  rules={{
                    required: "Este campo es requerido",
                    minLength: 2,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message:
                        "El nombre no debe contener números ni caracteres especiales",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre como aparece en la tarjeta"
                      fullWidth
                      error={!!errors.cardName}
                      helperText={errors.cardName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="expiryDate"
                  control={control}
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
                      error={!!errors.expiryDate}
                      helperText={errors.expiryDate?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="securityCode"
                  control={control}
                  rules={{ required: "Este campo es requerido" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Código de Seguridad"
                      fullWidth
                      type={securityCodeVisible ? "text" : "password"}
                      error={!!errors.securityCode}
                      helperText={errors.securityCode?.message}
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? (
                  <Link href={"/confirmacion-compra"}>
                    <span> Finalizar compra</span>
                  </Link>
                ) : (
                  "Siguiente"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );

  return <>{checkoutForm}</>;
};

export default CheckoutForm;
