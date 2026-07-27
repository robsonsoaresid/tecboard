import "./App.css";

// no react, componetes são FUNÇÕES
// props é um OBJETO
// props.children

function TituloFormulario({ children }) {
  return <h2>{children}</h2>;
}

function CampoDeFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function CampoDeEntrada(props) {
  return <input {...props} />;
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preecha para criar um evnento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evnento?</Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
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
      <FormularioDeEvento />
    </main>
  );
}

export default App;
