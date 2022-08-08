export const HeaderArea = () => {
    return (
            <header className="header-area">
                <section className="navigation">
                    <p><img src="./logo.png" alt="Nivis Services" /></p>
                    <nav>
                        <ul>
                            <li><a href="/">ABOUT NIVIS</a></li>
                            <li><a href="/">SERVICES</a></li>
                            <li><a href="/">CONTACT</a></li>
                            <li><a href="/">CLIENT PROFILE</a></li>
                            <li><a href="/">LOGIN</a></li>
                            <li><a href="/">REGISTER</a></li>
                            <li><a href="/">LOGOUT</a></li>

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
    );
}