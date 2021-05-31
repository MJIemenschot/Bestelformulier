import React, { useState } from 'react';

function Fruit (props) {

    //console.log("Wat zit er in de props", props);

    const [amount, setAmount] = useState(0);

    return (
        <div className="fruit-container">
            {props.fruitname}
            <button onClick={() => setAmount(amount + 1)}>+</button>
            {amount}
            <button onClick={() => setAmount(amount - 1)}>-</button>

        </div>
    );


}
 export default Fruit;