import "./App.css";

// no react, componetes são FUNÇÕES

function FormularioDeEvento (){
  return (
    <form className="form-evento">
      <h2>
        Preecha para criar um evnento:
      </h2>
      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evnento?
        </label>
        <input type="text" id="nome" />
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento/>
    </main>
  );
}

export default App;
