import React from 'react' 
import Button from './../Button';
import "./main.css"

function Header() {

    return (
        <>
            <div class="navbar">
                <div>
                    logo
                </div>
                <Button>
                    Signin
                </Button>
            </div>
        </>
    )
}

export default Header