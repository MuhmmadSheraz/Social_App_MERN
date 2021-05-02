import MainRouter from "./Config/router";
import client from "./ApolloProvider/ApolloProvider";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import "tailwindcss/tailwind.css";
function App() {
  return (
    <ApolloProvider client={client}>
      <MainRouter />
    </ApolloProvider>
  );
}

export default App;
