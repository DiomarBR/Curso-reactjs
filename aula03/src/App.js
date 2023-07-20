import './App.css';

function App() {
  const name = 'Diomar';

  const neWname = name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>ola , {neWname}</p>
      <p>soma: {sum(1,2)}</p>
      <img src={url} alt="minha imagem"/>
    </div>
  );
}

export default App;
