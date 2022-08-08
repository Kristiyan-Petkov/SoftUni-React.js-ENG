

function App() {
  return (
    <div className="App">
      <header>
        <section className="navigation">
            <p><img src="./logo.png" alt="Nivis Services" /></p>
            <nav>
                <ul>
                    <li><a href="/">ABOUT US</a></li>
                    <li><a href="/">OFFERINGS</a></li>
                    <li><a href="/">CAMPS</a></li>
                    <li><a href="/">BLOG</a></li>
                    <li><a href="/">CONTACT US</a></li>
                    <li>
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </section>
        <section className="site-header">
            <h1>Lorem Ipsum</h1>
            <button>LEARN MORE</button>
        </section>
    </header >
    <main>
        <section className="welcome">
            <h2>Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
        </section>
        <section className="offers">
            <h2>Our offers</h2>
            <ul>
                <li><a href="/">
                    <img src="./Images/backpack.png" alt="backpack" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
                <li><a href="/">
                    <img src="./Images/books.png" alt="books" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
                <li><a href="/">
                    <img src="./Images/bus.png" alt="bus" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
                <li><a href="/">
                    <img src="./Images/sandwich.png" alt="sandwich" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
                <li><a href="/">
                    <img src="./Images/first-aid-kit.png" alt="firstAid" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
                <li><a href="/">
                    <img src="./Images/plan.png" alt="plan" />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </a>
                </li>
            </ul>
        </section>
        <section className="camps">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <ul>
                <li>
                    <img src="./Images/photo-kids-playing-football.jpg" alt="kidsFootball" />
                    <section className="info">
                        <div>
                            <h3>Lorem Ipsum</h3>
                            <p>15h February 2019</p>
                        </div>
                        <div>
                            $35
                        </div>
                    </section>
                    <section className="moreInfo">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>ENROLL TODAY</button>
                    </section>
                </li>
                <li>
                    <img src="./Images/swimming-pool.jpeg" alt="swimming"/>
                    <section className="info">
                        <div>
                            <h3>Lorem Ipsum</h3>
                            <p>15h February 2019</p>
                        </div>
                        <div>
                            $35
                        </div>
                    </section>
                    <section className="moreInfo">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>ENROLL TODAY</button>
                    </section>
                </li>
                <li>
                    <img src="./Images/kids_dogs_playing.jpg" alt="kidsFootball" />
                    <section className="info">
                        <div>
                            <h3>Dog Day</h3>
                            <p>15h February 2019</p>
                        </div>
                        <div>
                            $35
                        </div>
                    </section>
                    <section className="moreInfo">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>ENROLL TODAY</button>
                    </section>
                </li>
            </ul>
        </section>
    </main>
    <footer>
        <p>CopyRight 2022. All Rights Reserved.</p>
        <ul>
            <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
        </ul>
    </footer >
    </div >
  );
}

export default App;
