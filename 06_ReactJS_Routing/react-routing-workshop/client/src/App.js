import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalogue from "./components/Catalogue/Catalogue";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Create from "./components/Games/Create";
import Details from './components/Games/Details';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';

function App() {
  const [games, setGames] = useState([]);

  const addComment = (gameId, comment) => {
    setGames(state => {
      const game = state.find(x => x._id === gameId);
      const comments = game.comments || [];
      comments.push(comment);

      return [
        ...state.filter(x => x._id !== gameId),
        {...game, comments},
      ]
    })
  }

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      });
  }, []);

  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content"></main>
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/catalog" element={<Catalogue games={games} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/catalog/:gameId" element={<Details games={games} addComment={addComment}/>} />
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
