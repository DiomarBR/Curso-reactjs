import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {
  const name = 'Diomar';

  const neWname = name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <HelloWorld/>
    </div>
  );
}

export default App;
