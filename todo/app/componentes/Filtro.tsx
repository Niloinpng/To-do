import React from 'react';

interface FiltroProps{
    filtro: string;
    filtrarTarefas: (texto: string) => void;
};

const Filtro: React.FC<FiltroProps> = ({filtro, filtrarTarefas }) => {

  return (

    <div className="ml-10 text-2sm">

      <button 
        className={`ml-2 ${filtro === "Tudo" ? 'font-bold' : ''}`}
        onClick={() => filtrarTarefas("Tudo")}>
        Tudo
      </button>

      <button 
        className={`ml-2 ${filtro === "Ativas" ? 'font-bold' : ''}`}
        onClick={() => filtrarTarefas("Ativas")}> 
        Ativas
      </button>
      
      <button 
        className={`ml-2 ${filtro === "Completas" ? 'font-bold' : ''}`}
        onClick={() => filtrarTarefas("Completas")}>
        Completas
      </button>

    </div>
  );
};

export default Filtro;
