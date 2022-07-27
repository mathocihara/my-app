import React from 'react';
import { Component } from 'react';
import Api from './api.jsx';

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
        <div className="App">

             <h1> Listar Produtos</h1>
             {produtos.map(produto =>{
                <div>
                 key={produto.id}
             <strong>Nome Produto</strong>
             <p>{produto.name}</p>
            {/* {produto.description} */}
                </div>


                
           })}

        </div>
      );
    }
}

export default Grid;