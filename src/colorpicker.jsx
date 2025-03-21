import React, {useState} from 'react'



function ColorPicker(){
     
    let [color, setColor] = useState("");

    let styles = {
        backgroundColor: color
    }
     
    function handleColorChange(event){
        setColor(event.target.value);
    }
     
     
     return(
        <div className="color-picker-container">
            <h1> Color Picker</h1>
            
            <div className='color-display' style={styles}>
                <p>Selected color: {color}</p>
            </div>

            <label>Select a color</label>
            <input type="color" value={color} onchange={handleColorChange} />
            
        </div>
    );
}

export default ColorPicker
