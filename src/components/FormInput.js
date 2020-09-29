import React, {useState} from 'react' 

function FormInput({inputValue, setInputValue}) {

    const handleClick = (event) => {
        setInputValue(event.target.value)
    }

    const handleClickClear = (event) => {
        setInputValue("")
    }

    const handleClickSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }

    return (
      <>
        <form onSubmit={handleClickSubmit}>
            <input type="text" value={inputValue} onChange={handleClick}>
            </input>
            <button type="submit">
                Submit
            </button>
        </form>
        <div>
            {inputValue}
        </div>
        <button onClick={handleClickClear}>
            Clear
        </button>
      </>
    )
  }

export default FormInput