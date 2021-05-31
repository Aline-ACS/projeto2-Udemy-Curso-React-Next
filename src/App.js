import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const eventoFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleChange = () => {
    setReverse(!reverse);
  };

  const reverseClass = reverse ? 'reverse' : '';

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventoFn);

    //componentWillUnMount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventoFn);
    };
  }, []);

  //executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          C1: {counter} C2: {counter2}
        </h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <button type="button" onClick={handleChange}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
