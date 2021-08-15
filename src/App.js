import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieAPI from "./components/MovieAPI";

function App() {
  return (
    <div className="app">
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  );
}

export default App;
