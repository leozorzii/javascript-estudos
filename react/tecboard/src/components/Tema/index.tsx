import "./tema.css";
//define o tipo do parametro tema : nome
export function Tema({ tema }: { tema: { nome: string } }) {
  return <h3 className="titulo-tema">{tema.nome}</h3>;
}
