import './App.css';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessosa';
import Frase from './Components/Frase'

function App() {
  const name = 'Pedro';

  return (
    <div className="App">
      <Frase/>
      <Frase/>

      <SayMyName nome="Diomar"/>
      <SayMyName nome="João"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={name}/>
      <Pessoa 
      nome="Diomar" 
      idade="18" 
      profissao="Devs Web" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
