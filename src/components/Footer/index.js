import React from 'react' 
import Button from './../Button';
import "./main.css"

function Footer(props) {
    return (
        <>
            <div class="footer">
                <div>
                    copy right {props.creator}
                </div>
                <Button>
                    login
                </Button>
            </div>
        </>
    )
  }

export default Footer