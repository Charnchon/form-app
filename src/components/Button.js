import React , {useState} from 'react' 
function Button(props) {
    return (
        <div>
            <button onClick={props.onClick}>{props.children}</button>
        </div>
        
    )
  }

export default Button;
