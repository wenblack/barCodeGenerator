import "./App.css";
import { List } from "./components/List";
import { Logo } from "./assets/logo";

function App() {
  return (
    <>
      <main className="App">
        <Logo></Logo>
        <h2>Gerador de código de Barras</h2>
        <List></List>
      </main>
    </>
  );
}

export default App;
