import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import './App.css';

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   userService.getAll()
  //     .then(users => setUsers(users));
  // }, []);

  // const addUserHandler = (user) => {

  // }

  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <!-- Section component  --> */}
        <section className="card users-container">
          <Search />
          <UserList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
