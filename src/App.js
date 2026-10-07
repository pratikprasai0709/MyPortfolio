import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import "./components/home/home.css";
import "./components/navbar/navbar.css";
import "./App.css";
import About from "./components/about me/about";
import "./components/about me/about.css";
import Myprojects from "./components/myProjects/Myprojects";
import "./components/myProjects/Myprojects.css";
import Contact from "./components/contact/contact";
import "./components/contact/contact.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Myprojects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

