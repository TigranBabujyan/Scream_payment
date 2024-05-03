import React from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';



const Admin: React.FC = () => {


    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <header className='header'>Admin</header>
                <div className='line'/>
                <div>
                    <header>Event</header>
                    <form className='event'>
                        <div className="input">
                            <input type="text" placeholder='Input Event Details'/>
                        </div>
                        <div className='input'>
                        <input type="text" placeholder='Input Event Details'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Event Details'/>
                        </div>
                    </form>
                </div>
                <div className='line'/>
                <div className='transfer_body'>
                    <header>Transfer</header>
                    <form>
                        <div className='input'>
                            <input type="text" placeholder='Input Transfer Details'/>
                        </div>
                    </form>
                </div>
                <div className='line'/>
                <div className='number'>
                    <header>Number</header>
                    <form>
                        <input type='number'></input>
                    </form>
                </div>
                <div className='line'/>
                <div className='social'>
                    <header>How you know about us</header>
                    <form>
                        <div className='input'>
                            <input type="text" placeholder='Input Header Text'/>
                        </div>
                        <div className='input'>
                        <input type="text" placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Input Socials'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
