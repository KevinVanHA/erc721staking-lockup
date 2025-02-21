import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Client ID:", process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID);
  return (
    <ThirdwebProvider
      activeChain={activeChainId}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || ""}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}