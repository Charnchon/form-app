import React from 'react';
import Show from './components/Show';
import Background from './components/Background';
import FormInput from './components/FormInput';

function Appman() {
    return (
        <>
            <div className="App" >
                <Show title="This is title"></Show>
                <Background>clickMe</Background>
            </div>
            <FormInput/>
        </>
        
    )
}

export default Appman;
