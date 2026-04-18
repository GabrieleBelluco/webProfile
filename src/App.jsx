import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-fullscreen">
      <Nav />
      <div className="flex-grow-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
