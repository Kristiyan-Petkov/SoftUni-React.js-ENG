import { HeaderArea } from "./components/HeaderArea";
import { Welcome } from "./components/Welcome";
import { Services } from "./components/Services";
import { Promos } from "./components/Promos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderArea />
      <main>
        <Welcome />
        <Services />
        <Promos/>
      </main>
      <Footer/>
    </div >
  );
}

export default App;
