import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Web3Provider from "./contexts/Web3Context.tsx"
import HeroUIProvider from "./contexts/HeroUIProvider.tsx";
import Layout from "./layout.tsx";
import { BrowserRouter } from "react-router";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config.ts";


createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <HeroUIProvider>
        <Web3Provider>
          <Layout>
            <App />
          </Layout>
        </Web3Provider>
      </HeroUIProvider>
    </BrowserRouter>
  </ApolloProvider>
)