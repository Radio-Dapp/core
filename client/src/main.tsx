import { createRoot } from 'react-dom/client'
import './index.css'
import Web3Provider from "./contexts/Web3Context.tsx"
import HeroUIProvider from "./contexts/HeroUIProvider.tsx";
import Layout from "./layout.tsx";
import { BrowserRouter } from "react-router";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config.ts";
import App from "./App.tsx";


createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <HeroUIProvider>
      <Web3Provider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </Web3Provider>
    </HeroUIProvider>
  </ApolloProvider>
)