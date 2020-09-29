import React from 'react' 
import "./main.css"
import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';

function ContainerLayout() {
    return (
        <>
            <div>
                <Header></Header>
                <Body></Body>
                <Footer creator="Boat"></Footer>
            </div>
        </>
    )
}

export default ContainerLayout