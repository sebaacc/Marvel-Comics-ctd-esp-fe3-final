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
  MenuItem,
} from "@mui/material";

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

const CheckoutPage = () => {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
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
                    value: /^[A-Za-z]+$/,
                    message:
                      "El nombre no debe contener números ni caracteres especiales",
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
                    value: /^[A-Za-z]+$/,
                    message:
                      "El Apellido no debe contener números ni caracteres especiales",
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
                rules={{ required: "Este campo es requerido" }}
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
            {/* Agrega aquí los campos restantes para Datos Personales */}
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
              {activeStep === steps.length - 1
                ? "Finalizar compra"
                : "Siguiente"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CheckoutPage;
