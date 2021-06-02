import './App.css';
import { createContext, useContext, useEffect, useReducer, useState } from 'react';

//useState e useEffect

// const eventoFn = () => {
//   console.log('h1 clicado');
// };

// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   const handleChange = () => {
//     setReverse(!reverse);
//   };

//   const reverseClass = reverse ? 'reverse' : '';

//   // componentDidMount - executa 1x
//   useEffect(() => {
//     document.querySelector('h1')?.addEventListener('click', eventoFn);

//     //componentWillUnMount - limpeza
//     return () => {
//       document.querySelector('h1')?.removeEventListener('click', eventoFn);
//     };
//   }, []);

//   //executa toda vez que a dependência mudar
//   useEffect(() => {
//     console.log('C1: ', counter, 'C2: ', counter2);
//   }, [counter, counter2]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>
//           C1: {counter} C2: {counter2}
//         </h1>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <button type="button" onClick={handleChange}>
//           Reverse {reverseClass}
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;

//useContext

// import { AppContext } from './contexts/AppContext';
// import { Div } from './components/Div';

// function App() {
//   return (
//     <AppContext>
//       <Div />
//     </AppContext>
//   );
// }

// export default App;

// useReducer: usado para estados mais complexos, que requerem alguma lógica
// ele retorna um estado e uma função usada para disparar ações

const globalState = {
  title: 'título do contexto',
  body: 'body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda');
      return { ...state, title: action.payload };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('Nenhuma action encontrada');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: '' })}>Sem action</button>
    </div>
  );
}

export default App;
