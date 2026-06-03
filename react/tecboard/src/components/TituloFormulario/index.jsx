import "./titulo-form.css";
//props eh um OBJETO
//props.children

export function TituloFormulario({ children }) {
  return <h2 className="titulo-form">{children}</h2>;
}
