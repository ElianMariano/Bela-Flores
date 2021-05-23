import React, {useState} from 'react'

import './styles.css'

interface QuantityPickerProps{
    width?: string;
    quantity?: number;
    onChange(q: number): any;
}


function QuantityPicker(props: QuantityPickerProps){
    const [quantity, setQuantity] = useState(() => props.quantity !== undefined ? props.quantity : 1);

    function onMinus(){
        if (quantity === 1)
            props.onChange(1);
        else
            props.onChange(quantity-1)
            
        setQuantity(() => quantity === 1 ? 1 : quantity-1);
    }

    function onPlus(){
        setQuantity(quantity+1);
        props.onChange(quantity+1);
    }

    return (
        <div className="quantity-picker">
            <button className="picker-button" onClick={() => onMinus()}>-</button>
            <h4 className="picker-quantity">{quantity}</h4>
            <button className="picker-button" onClick={() => onPlus()}>+</button>
        </div>
    )
}

export default QuantityPicker;