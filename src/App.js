import './App.css';
import como from './content/como';
import cuidados from './content/cuidados';
import pq from "./content/pq";
import how from "./content/how.jpg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>USO DE MÁSCARAS NA PANDEMIA</h1>
        <h3>Pedro e Laisa, 301 INFO</h3>
      </div>
      <div className="content">
        <h2 className="firstH2">Por que ela é usada?</h2>
        <p>{pq}</p>
        <h2>Como usá-la?</h2>
        <p>{como}</p>
        <img src={how} alt="how"/>
        <h2 className="lastH2">Cuidados</h2>
        <p>{cuidados}</p>
      </div>
    </div>
  );
}

export default App;