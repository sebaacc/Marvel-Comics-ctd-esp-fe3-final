import { FormValues } from "dh-marvel/components/Form/CheckoutForm";

export const postCheckout = async (body: FormValues) => {
  try {
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: body.customer,
        card: body.card,
        order: body.order,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};
