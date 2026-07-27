import "./App.css";
import {FormularioDeEvento} from './componentes/FormularioDeEvento'

// no react, componetes são FUNÇÕES
// props é um OBJETO
// props.children

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
