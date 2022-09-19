import logo from './logo.svg';
import './App.css';
import Resume from './components/resume/resume';
import Perfil from './components/perfil/perfil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="conteiner">
          <Perfil />
          <Resume />
        </div>
      </header>
    </div>
  );
}

export default App;
