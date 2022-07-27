import React from 'react';
import './Main.css'
function Main (){


    return (
        <main>
            <div className='container'>
            <div className='text'>
        <h3>Ajude o algorítimo a ser mais certeiro</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum 
        dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean
        lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu 
        non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas
        erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi
        diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>

        <div className='form'>
        <form>
        <label className='buttonForm'>Seu Nome
            <input type="text" />
        </label>

        <label className='buttonForm'>E-mail
            <input type="text" />
        </label>

        <label className='buttonForm'>CPF
            <input type="text" />
        </label>
        </form>

        <div>
        <label >Masculino
            <input type="radio" name="" id="" />
        </label>

        <label >Feminino
            <input type="radio" name="" id="" />
        </label>
        </div>

        <button>Enviar</button>
        </div>
        </div>
        </main>

    );
}

export default Main;