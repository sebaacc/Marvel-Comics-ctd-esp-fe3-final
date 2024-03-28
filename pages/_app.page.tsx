import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from "dh-marvel/styles/material-theme";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import CheckoutPage from "./checkout/[id].page";

function MyApp({ Component, pageProps }: AppProps) {
  const isCheckout =
    Component["displayName"] === "CheckoutPage" || "ConfirmationPage"; // Verificar si el componente es CheckoutPage

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LayoutGeneral>
        <Component {...pageProps} />
      </LayoutGeneral>

      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */

        #__next {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default MyApp;
