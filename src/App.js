import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Acceuil from "./Views/Accueil/Acceuil";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Acceuil></Acceuil>
      <Footer></Footer>
    </div>
  );
}

export default App;
