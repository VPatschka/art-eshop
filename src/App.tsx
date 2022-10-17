import React, { useState } from 'react';
import './App.css';
import { CategoryFilter } from "./components/filters/CategoryFilter";
import { createApolloClient } from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";

function App() {
  const [client] = useState(createApolloClient(process.env.REACT_APP_HASURO_ADMIN_TOKEN ?? ''));

  return (
    <ApolloProvider client={client} >
    <div className="App">
    </div>
    </ApolloProvider>
  );
}

export default App;
