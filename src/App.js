// import logo from '../public/images/logo.png';
import "./App.css";

function App() {
  return (
    <div>
      <section>
        <header className="App-header">
          <img src="./images/logo.png" alt="logo" width="100" />
          <div>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>BLOG</li>
            </ul>
          </div>
        </header>
      </section>

      <section id="main">
        <div className="main-text">
          <span>kindself. </span><br/> where we reinvent <br /> the meaning of selfcare
        </div>

        <img src="./images/leaf.png" alt="leaf-main" width="520" />
      </section>
    </div>
  );
}

export default App;
