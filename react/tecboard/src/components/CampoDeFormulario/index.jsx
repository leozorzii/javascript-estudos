import "./campo-form.css";
//desconstroi e guardando numa variavel o objeto, destructoring
export function CampoDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
