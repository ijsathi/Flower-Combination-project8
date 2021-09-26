import React from 'react';
import('./Item.css')
const Item = (props) => {
    const { name, color, family, price, scientificName, url,kingdom } = props.item;
    return (

        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={url} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <h5>Scientific Name: {scientificName}</h5>
                        <h6>Family: <small> {family}</small></h6>
                        <h6>Kingdom: <small>{kingdom}</small></h6>
                        <h6>Color: <small>{color}</small></h6>
                        <h5>Price: {price}</h5>
                        <button onClick={() => props.addToCart(props.item)} className='cart-button'><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Item;