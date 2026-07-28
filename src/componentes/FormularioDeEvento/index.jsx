import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa }  from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preecha para criar um evnento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evnento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
           
            name="dataEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="htmlFor">Tema do evento</Label>
          <ListaSuspensa 
          name="tema" 
          id="tema" 
          defaultValue=""> 
          <option value="" disabled>Selecione uma opção</option> 
          </ListaSuspensa> 
        </CampoDeFormulario>
        
      </div>
      <div  className='acoes'>
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  );
}
