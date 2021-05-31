import React, { useState } from 'react';
import './Fruit.css';

function Fruit (props) {

    console.log(props)


    const [amount, setAmount] = useState(0);

    return (
        <div className="fruit-container">
            <img className="fruit-image" src={props.image} alt={props.fruitname} />
            <span className="fruit-name">{props.fruitname}</span>
            <button className="count-button" onClick={() => setAmount(amount + 1)}>+</button>
            <span className="counter"
                  setAmount={setAmount}
                  amount={amount}
            >{amount}</span>
            <button className="count-button" onClick={() => setAmount(amount - 1)}>-</button>

        </div>
    );


}
 export default Fruit;