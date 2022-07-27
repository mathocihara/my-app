import React from 'react';
import { Component } from 'react';
import Api from './api.jsx';
import './grid.css'

class Grid extends Component {

state={
produtos:[],
}

async componentDidMount(){
const response = await Api.get('');
console.log(response.data.products)
this.setState({ produtos: response.data.products})
}

render(){

const {produtos} = this.state;
return (
<div className="AppGrid">

<h3 className='subTituloGrid'>Sua seleção especial</h3>  
  

  <ul>
  {produtos.map(produto =>{
  return(
  <div className="card" key={produto.id}  >
    <strong>Nome Produto</strong>
    <p>{produto.name}</p>
    <strong>Descrição do Produto</strong>
    <p>{produto.description}</p>
    <strong>Valor Antigo</strong>
    <p>{produto.oldPrice}</p>
    <strong>Valor</strong>
    <p>{produto.price}</p>
    <strong>Quantidade de Parcelas</strong>
    <p>{produto.installments.count}</p>
    <strong> Parcelas</strong>
    <p>{produto.installments.value}</p>
    <button className='buttonGrid'>Comprar</button>
    </div>
  
  )
  })}</ul>
    <div className='informaçõesGerais'>
    <button className='buttonGridProdutos'>Ainda mais produtos aqui!</button>
    <h3>Compartilhe a novidade</h3>
    <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
    <form>
    <div className='formularioPerguntas'>
    <label  className='labeFormGrid'>Nome do seu amigo:
      <input type="text" />
    </label>

    <label  className='buttonFormGrid'>Email:
      <input type="text" />
    </label>
    </div>
    <div className='buttonFormFinal'>
    <button className='buttonFormEnvio'>Enviar agora</button>
    </div>
    </form>

    </div>

</div>
);
}
}

export default Grid;