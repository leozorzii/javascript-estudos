import "./formulario-de-evento.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ButtonFormulario } from "../button";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function handleSubmit(formData) {
    console.log("hora de criar um novo evento", formData);
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={handleSubmit}>
      <TituloFormulario>Preencha para criar evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento"></Label>
          Qual nome do evento?
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa"></Label>
          Qual a endereço da imagem de capa?
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="http://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento"></Label>
          Data do evento
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do Evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
        <div className="acoes">
          <ButtonFormulario>Criar Evento</ButtonFormulario>
        </div>
      </div>
    </form>
  );
}
