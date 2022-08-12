import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <!-- Section component  --> */}
        <section class="card users-container">
          <Search />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
