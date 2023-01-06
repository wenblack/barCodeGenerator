import "./App.css";
import { List } from "./components/List";
import { Logo } from "./assets/logo";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <main className="App">
        <Logo></Logo>
        <h2 style={{ marginTop: '40px' }}>Gerador de código de Barras</h2>
        <List></List>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
