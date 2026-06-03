import "./App.css";
import { useState } from "react";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";

//no react, componentes sao FUNCOES

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front End",
    },
    {
      id: 2,
      nome: "Back end",
    },
    {
      id: 3,
      nome: "DevOps",
    },
    {
      id: 4,
      nome: "Inteligencias Artificial",
    },
    {
      id: 5,
      nome: "Data Science",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];
  const [eventos, setEventos] = useState([
    /**use state pois o react nao renderiza mutacoes diretas */
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
    // console.log([...eventos, evento]);
  }
  return (
    <main>
      <header>
        <img src="./src/assets/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />{" "}
      {/*Com useState, eventos persiste entre renders*/}
      {/* //percorre e transforma array de objetos em array de elementos jsx */}
      {temas.map(function (itemLista) {
        return (
          <section key={itemLista.id}>
            {/*cada filho da lista identifica o id de forma unica*/}
            <Tema tema={itemLista} />
            {eventos.map(function (item, indice) {
              return <CardEvento evento={item} key={indice} />;
            })}
            <CardEvento evento={eventos[0]} />
          </section>
        );
      })}
    </main>
  );
}

export default App;
