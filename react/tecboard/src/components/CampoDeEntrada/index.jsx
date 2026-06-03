import "./campo-entrada.css";
export function CampoDeEntrada(props) {
  if (props.type === "select") {
    return (
      <select className="campo-entrada campo-entrada-select">
        {props.opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    );
  }
  return <input {...props} className="campo-entrada" />; //spread operator de todas as propriedas(expande para todas as props)
}
