import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content"></main>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

      

      {/* Login Page ( Only for Guest users ) */}
      {/* Register Page ( Only for Guest users ) */}

      {/* Create Page ( Only for logged-in users ) */}
      {/* Edit Page ( Only for the creator )*/}
      {/*Details Page*/}

      {/* Catalogue */}
    </div>
  );
}

export default App;
