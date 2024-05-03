import React, {useEffect, useState} from 'react';
import {QuerySnapshot, DocumentData, onSnapshot } from 'firebase/firestore'

import './index.css';
import 'flag-icons/css/flag-icons.min.css';
import {adminData} from '../../lib/controller'
import {NewDataTypes} from "../../types/adminData";



const Admin: React.FC = () => {

    const [apiData, setApiData] = useState<NewDataTypes[]>([])

    useEffect(() => onSnapshot(adminData, (snapshot: QuerySnapshot<DocumentData>)=> {
        setApiData(
            snapshot.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }),
        )
    }),
        []);

    console.log(apiData)

    function saveData() {
        const eventInput1 = document.getElementById('event1') as HTMLInputElement;
        const eventInput2 = document.getElementById('event2') as HTMLInputElement;
        const eventInput3 = document.getElementById('event3') as HTMLInputElement;
        const transfer = document.getElementById('transfer') as HTMLInputElement;
        const number = document.getElementById('number') as HTMLInputElement;
        const social_header = document.getElementById('social_header') as HTMLInputElement;
        const social1 = document.getElementById('social1') as HTMLInputElement;
        const social2 = document.getElementById('social2') as HTMLInputElement;
        const social3 = document.getElementById('social3') as HTMLInputElement;
        const social4 = document.getElementById('social4') as HTMLInputElement;
        const social5 = document.getElementById('social5') as HTMLInputElement;
        const social6 = document.getElementById('social6') as HTMLInputElement;

        const data = {
            eventInput1: parseInt(eventInput1.value),
            eventInput2: parseInt(eventInput2.value),
            eventInput3: parseInt(eventInput3.value),
            transfer: parseInt(transfer.value),
            number: parseInt(number.value),
            social_header: parseInt(social_header.value),
            social1: parseInt(social1.value),
            social2: parseInt(social2.value),
            social3: parseInt(social3.value),
            social4: parseInt(social4.value),
            social5: parseInt(social5.value),
            social6: parseInt(social6.value),
        };

        const jsonData = JSON.stringify(data);

        console.log('Data saved:', jsonData);
    }


    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <header className='header'>Admin</header>
                <div className='line'/>
                <div className='wrap'>
                    <header>Event</header>
                    <form className='event'>
                        <div className="input">
                            <input type="text" id='event1' placeholder='Input Event Details'/>
                        </div>
                        <div className='input'>
                        <input type="text" id='event2' placeholder='Input Event Details'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='event3' placeholder='Input Event Details'/>
                        </div>
                    </form>
                </div>
                <div className='line'/>
                <div className='wrap'>
                    <header>Transfer</header>
                    <form>
                        <div className='input'>
                            <input type="text" id='transfer' placeholder='Input Transfer Details'/>
                        </div>
                    </form>
                </div>
                <div className='line'/>
                <div className='wrap'>
                    <header>Number</header>
                    <form>
                        <input type='number' id='number'></input>
                    </form>
                </div>
                <div className='line'/>
                <div className='wrap'>
                    <header>How you know about us</header>
                    <form>
                        <div className='input'>
                            <input type="text" id='social_header' placeholder='Input Header Text'/>
                        </div>
                        <div className='input'>
                        <input type="text" id='social1' placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='social2' placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='social3' placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='social4' placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='social5' placeholder='Input Socials'/>
                        </div>
                        <div className='input'>
                            <input type="text" id='social6' placeholder='Input Socials'/>
                        </div>
                    </form>
                </div>
                <button type='button' onClick={()=> saveData()}>SAVE</button>
            </div>
        </div>
    );
};

export default Admin;
