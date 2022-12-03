import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Users from './components/Users';

function App() {

  const client = new ApolloClient({cache: new InMemoryCache(),uri: "http://localhost:4000/graphql"})
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Users/>
      </div>
    </ApolloProvider>
  );
}

export default App;