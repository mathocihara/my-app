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
            <button>
                Conheça a Linx
            </button>

            <button>
                Ajude o algorítimo
            </button>

            <button>
                Seus produtos
            </button>

            <button>
                Compartilhe
            </button>
        </div>
    </div>
</header>



);
}

export default Header;