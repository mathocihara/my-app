import React from 'react';

import './header.css'
function Header() {
return (


<header>
    <div className='header'>
        <div className='text'>
            <p>uma seleção de produtos</p>
            <h1>especial para você</h1>
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        </div>
        <div className='buttonHeader'>
            <button id='button'>
               <p id='textButton'>Conheça a Linx</p> 
            </button>

            <button id='button'>
            <p id='textButton'> Ajude o algorítimo</p>
            </button>

            <button id='button'>
            <p id='textButton'>   Seus produtos </p>
            </button>

            <button id='button'>
              <p id='textButton'> Compartilhe </p>  
            </button>
        </div>
    </div>
</header>



);
}

export default Header;