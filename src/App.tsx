import React, { useState } from "react";
import Modal from "react-modal";
import { createApolloClient } from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { MainPage } from "./pages/MainPage";
import "./App.scss";

function App() {
  Modal.setAppElement("#root");
  const [client] = useState(
    createApolloClient(process.env.REACT_APP_HASURO_ADMIN_TOKEN ?? "")
  );

  return (
    <ApolloProvider client={client}>
      <div id="App" className="App">
        <MainPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
