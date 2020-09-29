import React from 'react' 

function SearchBar ({inputCount,setInputCount}) {
    const handleChange = (event) => {
        setInputCount(event.target.value)
    }
    return (
        <>
            <form>
                <input onChange={handleChange} value={inputCount} type="text"></input>
            </form>
        </>
    ) 
    
}

export default SearchBar 