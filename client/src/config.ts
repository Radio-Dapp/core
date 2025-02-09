import { fraxtalTestnet } from "viem/chains";
import type { PrivyClientConfig } from "@privy-io/react-auth";
const theme = localStorage.getItem("theme") || "dark"
import { ApolloClient, InMemoryCache } from '@apollo/client';
import axios from 'axios';
import { SERVER_URL } from "./constants";

export const supportedChains = [fraxtalTestnet];

export const privyAppId = "cm6aectht00xy13ttzmcz93fc";
export const privyConfig: PrivyClientConfig = {
  appearance: {
    accentColor: "#737373",
    logo: "/icons/logo_icon.png",
    theme: theme === "dark" ? "#121212" : "#f5f5f5",
    landingHeader: "Radio - Asset & Fund Management",
    walletChainType: "ethereum-only",
    showWalletLoginFirst: true,
  },
  supportedChains: supportedChains,
  loginMethods: [
    "email",
    "wallet",
    "google",
    "discord",
    "twitter",
  ],
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
};

export const apolloClient = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 32_000,
  headers: {
    "Content-Type": "application/json",
  },
});