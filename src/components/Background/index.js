import React , {useState} from 'react' 

function Background(props) {
    const [backgroundColor,setBackgroundColor] = useState("#fff")
    const [state,setState] = useState()
    const handleClick = () => {
        setBackgroundColor(backgroundColor === "#fff"?"#f00" : "#fff")
    }
    return (
        <>
            <div>
                <div style={{backgroundColor}} onClick={handleClick}>
                    ClickMe{(backgroundColor === "#fff"?"white" : "red")}
                </div>
            </div>
        </>
        
        
    )
  }

export default Background;