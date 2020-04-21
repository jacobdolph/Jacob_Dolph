import React from 'react';
import WebDevTitle from '../WebDevTitle';


function WebDev() {

    return (
        <div className='center' style={{ backgroundColor: 'white', height: '100%' }}>
            <div>
                <WebDevTitle />
                <br />
                <div style={{ fontSize: "3rem" }}>
                    <h6 className=' flow-text' style={{ padding: "1rem 1rem", margin: '0rem 1rem', color: "#616161" }}>"Hello, My name is Jacob Dolph. I am a web developer located in Cottenwood Heights, Ut."</h6>
                </div>
            </div>
        </div>
    )
}
export default WebDev;