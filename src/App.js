import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Catalog } from "./components/Catalog";

function App() {
  return (
    <>
      <Header />
      <main>
        <Catalog />
      </main>
      <Footer />
    </>
  );
}

export default App;
