import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import {TituloFormulario} from "../TituloFormulario"

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preecha para criar um evnento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evnento?</Label>
        <CampoDeEntrada 
        type="text" 
        id="nome" 
        placeholder="Summer dev hits" 
        />
      </CampoDeFormulario>
    </form>
  );
}