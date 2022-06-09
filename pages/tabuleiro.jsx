import { useState } from "react";
import Casa from "../components/Casa";

export default function Tabuleiro() {
  const [index, setIndex] = useState(-1);

  const getColor = (index) => {
    const linha = Math.floor(index / 8);
    const coluna = index % 8;

    if (linha % 2 == coluna % 2) return "#f1dab6";
    return "#b78963";
  };

  const selecionarCasa = (idx) => {
    if (index === idx) setIndex(-1);
    else setIndex(idx);
  };

  return (
    <div className="tabuleiro-pagina">
      <div className="tabuleiro">
        {Array(64)
          .fill(0)
          .map((_, idx) => (
            <Casa
              cor={getColor(idx)}
              index={idx}
              selected={index === idx}
              onClick={() => selecionarCasa(idx)}
            />
          ))}
      </div>
    </div>
  );
}
