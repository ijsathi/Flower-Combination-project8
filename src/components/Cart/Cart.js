import React from 'react';
import './cart.css';

const Cart = (props) => {
    let total = 0;
    let selectName = '';
    for (const cart of props.carts) {
        total = total + cart.price
    }
    for (const names of props.carts) {
        selectName = names.name + ',' + '\n' + selectName + '\n';

    }
    return (
        <div className='cart'>
            <h1><span className="symbol">𝕱</span>𝖑𝖔𝖜𝖊𝖗's <span className="combination">𝕮𝖔𝖒𝖇𝖎𝖓𝖆𝖙𝖎𝖔𝖓</span></h1> <br />
            <h3> <i class="fas fa-cart-plus"></i>  Flowers Added: {props.carts.length}</h3>
            <h4>Total: $ {total.toFixed(2)}</h4>
            <br />
            <p><span className='list'><i  class="far fa-list-alt awesome-icon"></i>Added Flower List:</span> <span className='list-name'> {selectName}</span></p>
        </div>
    );
};

export default Cart;