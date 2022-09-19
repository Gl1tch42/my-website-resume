import logo from './logo.svg';
import './App.css';
import Resume from './components/resume/resume';
import Perfil from './components/perfil/perfil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Perfil />
        <Resume />
      </header>
    </div>
  );
}

export default App;
