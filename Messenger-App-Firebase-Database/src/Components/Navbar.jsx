import React from 'react'
import '../App.css'
import { Messages } from './Messenger'
const Navbar_Component = () => {
    return (
        <>
            <div className="Main_Navbar container-fluid">
                <div className='addsa'>
                    <h1>
                        DEMO Messenger App
                    </h1>
                </div>
            </div>
            <br />
            <Messages />
        </>
    )
}

export { Navbar_Component }