import React, {useState} from 'react' 
import Button from './../Button';
import "./main.css"

function Body() {
    const [inputValue, setInputValue] = useState();
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <>
            <div class="container">
                <div class="search-box">
                    <form>
                        <input onChange={handleChange} type="text"></input>
                        <Button>Search</Button>
                    </form>
                    
                </div>
                <h3 class="copy-text">
                    {inputValue}
                </h3>
                <div>
                    tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                </div>
            </div>
        </>
    )
}

export default Body