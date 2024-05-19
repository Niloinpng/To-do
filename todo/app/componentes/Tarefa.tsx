import React from 'react';
import { RiDeleteBin7Fill } from "react-icons/ri";

interface Tarefa {
  id: number;
  texto: string;
  status: boolean;
};

interface TarefaProps {
  tarefa: Tarefa;
  removeTarefa: (id: number) => void;
  completaTarefa: (id: number) => void;
};

const Tarefa: React.FC<TarefaProps> = ({ tarefa, removeTarefa, completaTarefa }) => {

  return (

    <div className="tarefa flex items-center justify-between mt-2" key={tarefa.id}>
      
    <div className="flex items-center">
      <input 
        type="checkbox" 
        checked={tarefa.status} 
        onChange={() => completaTarefa(tarefa.id)} 
        className="mr-2"
      />
      <div className={tarefa.status ? "opacity-50" : ""}>
        <p style={{textDecoration: tarefa.status ? "line-through" : ""}}>
          {tarefa.texto}
        </p>
      </div>
    </div>

    <button 
      className="ml-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
      onClick={() => removeTarefa(tarefa.id)}>
      <RiDeleteBin7Fill  />
    </button>

    </div>

  );
};

export default Tarefa;