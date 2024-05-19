import {useState, FormEvent} from 'react'

type adicionaTarefaType = (texto: string) => void;

const TarefaForms = ({ adicionaTarefa }: { adicionaTarefa: adicionaTarefaType }) => {

  const [valor, setValor] = useState('')

  const Sumit = (e: FormEvent) => {
    e.preventDefault();
    if (!valor) return;
    adicionaTarefa(valor);
    setValor("");
  }

  return (

  <div className="w-full flex items-center justify-between">

    <form onSubmit={Sumit} className="flex items-center w-full">

      <input 
        placeholder='Nova tarefa...' 
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="w-full mr-2 border border-black rounded-lg py-1 px-2"
      />

      <button className="bg-verde hover:bg-verde focus:bg-verde text-white py-1 px-1 rounded-lg">
        OK
      </button>

    </form>

  </div>
  );
};

export default TarefaForms