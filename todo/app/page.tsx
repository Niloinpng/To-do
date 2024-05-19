"use client";
import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Tarefa from './componentes/Tarefa';
import TarefaForms from './componentes/TarefaForms';
import Filtro from './componentes/Filtro';
import { BiSolidSpreadsheet } from "react-icons/bi";

export default function Home() {
  const [tarefas,setTarefas] = useState([
    {id: 1,
      texto: "TP1: Corrigir erros da main",
      status: false,
    },
    {id: 2,
      texto: "Fazer atividade semanal do estágio",
      status: false,
    },
    {id: 3,
      texto: "Reunião com trainees",
      status: true,
    },
    {id: 4,
      texto: "Escrever avaliação para cada aluno",
      status: false,
    },
    {id: 5,
      texto: "SD: Assistir vídeo aulas do aprender3",
      status: true,
    },
    {id: 6,
      texto: "Regar resultados do RPSE de Maio",
      status: true,
    },
    {id: 7,
      texto: "Codar NAV (Projeto-temprave)",
      status: false,
    },
  ])

  const [filtro, setFiltro] = useState("Tudo")

  const filtrarTarefas = (texto : string): void => {
    setFiltro(texto)
  }

  const adicionaTarefa = (texto: string): void => {
    const novaTarefas = [...tarefas, {
      id: Math.floor(Math.random() * 100000),
      texto,
      status: false,
    }];
    setTarefas(novaTarefas);
  }

  const removeTarefa = (id: number): void => {
    const novaTarefas = [...tarefas]
    const filtroTarefas = novaTarefas.filter(tarefa => tarefa.id !== id ? tarefa : null);
    setTarefas(filtroTarefas)
  }

  const removeTarefasCompletas = (): void => {
    const novaTarefas = [...tarefas]
    const filtroTarefas = novaTarefas.filter(tarefa => !tarefa.status ? tarefa : null);
    setTarefas(filtroTarefas)
  }

  const completaTarefa = (id: number): void => {
    const novaTarefas = [...tarefas]
    novaTarefas.map((tarefa) => tarefa.id === id ? tarefa.status = !tarefa.status : tarefa)
    setTarefas(novaTarefas)
  }

  const contaTarefasIncompletas = (): number => {
    return tarefas.filter(tarefa => !tarefa.status).length;
  };

  const contaTarefas = (): number => {
    return tarefas.length;
  }

  return (

    <div className="bg-cinza min-h-screen flex justify-center pt-20">

      <div className = "min-h-screen flex justify-center">

        <div className='w-70%'>

          <h1 className="text-3xl text-verde font-bold flex items-center space-x-2">
            PraFazer <BiSolidSpreadsheet />
          </h1>

          <div className = " bg-white p-6 shadow-lg rounded-lg">

          <TarefaForms  adicionaTarefa={adicionaTarefa}/>

          {contaTarefas() === 0 ? (
          <div className=''>
            <h3 className="text-xl flex justify-center mt-7">Todas as tarefas foram feitas :)</h3>
          </div>
          
          ) : (
          <div className="mt-7">
            {tarefas
              .filter((tarefa) => filtro === "Tudo" ? true : filtro === "Ativas" ? !tarefa.status : tarefa.status)
              .map(tarefa => (
                <Tarefa 
                  tarefa={tarefa} 
                  key={tarefa.id} 
                  removeTarefa={removeTarefa} 
                  completaTarefa={completaTarefa}
                />
              ))}
          </div>)}


          <div className="flex justify-between items-center mt-7">

            <p className="text-sm">{contaTarefasIncompletas()} itens restantes</p>

            <Filtro filtro={filtro} 
                    filtrarTarefas = {filtrarTarefas}/>

            <button 
                className="ml-10 text-sm opacity-100 hover:opacity-50 transition-opacity duration-200"
                onClick={() => removeTarefasCompletas()}>
                Limpar completas
            </button>

          </div>

          </div>

        </div>

      </div>

    </div>
  );
}
