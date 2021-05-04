import MainRouter from "./Config/router";
import client from "./ApolloProvider/ApolloProvider";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import "tailwindcss/tailwind.css";
import { GlobalProvider } from "./Context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <ApolloProvider client={client}>
        <MainRouter />
      </ApolloProvider>
    </GlobalProvider>
  );
}

export default App;
