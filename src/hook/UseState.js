import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

UseState.propTypes = {
    
};

 function getRandomColor (){ 
    
    const listColor = ['deepping','green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random()*5);
    return listColor[randomIndex];
}

function UseState() {
    const [color, setColor] = useState('deeppink');
    useEffect(() => {
        const color = localStorage.getItem('box_color')
        setColor(color)
    }, [])
    const handelBoxClick = () => {
        const NewColor = getRandomColor();
        setColor(NewColor);
        localStorage.setItem('box_color', NewColor);
    }
    return (
        <div className ="color-box " style = {{backgroundColor: color}}  onClick = {handelBoxClick}>
            Color - Box
        </div>
    );
}

export default UseState;