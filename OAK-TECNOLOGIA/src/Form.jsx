import './App.css'
import { useState } from 'react';


function Form() {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [disponivel, setDisponivel] = useState('sim');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNome('');
    setDescricao('');
    setValor('');
    setDisponivel('sim');
    console.log({ nome, descricao, valor, disponivel });

  };

  function exibirMensagemCadastro() {
    alert('Produto cadastrado com sucesso!');
  }

  return (
    <>
      <div className='container-main'>

        <form className='container-Form' onSubmit={handleSubmit}>
          <h1>Cadastro de Produtos</h1>
          <label>Nome do produto</label>
          <input
            type="text"
            placeholder='Nome do produto'
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          >
          </input>
          <label>Descrição do produto</label>
          <input
            type="text"
            placeholder='Descrição do produto'
            id='descricao'
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          >
          </input>
          <label>Valor do produto</label>
          <input
            type="number"
            placeholder='Valor do produto'
            id='valor'
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          >
          </input>
          <label>Disponível para venda</label>
          <select
            placeholder='Disponível para venda'
            id='disponivel'
            value={disponivel}
            onChange={(event) => setDisponivel(event.target.value)}
          >
            <option>Sim</option>
            <option>Não</option>

          </select><br></br>
          <button type="submit" onClick={exibirMensagemCadastro()}>Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default Form;
