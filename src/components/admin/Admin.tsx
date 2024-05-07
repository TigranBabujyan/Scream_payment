import React, { useState } from 'react';
import './index.css';
import 'flag-icons/css/flag-icons.min.css';
import {editData} from '../../lib/controller'
import {useNavigate} from "react-router-dom";


const Admin: React.FC = () => {


    const [event1, setEvent1] = useState('')
    const [event2, setEvent2] = useState('')
    const [event3, setEvent3] = useState('')
    const [transfer, setTransfer] = useState('')
    const [number, setNumber] = useState('')
    const [social_title, setSocial_title] = useState('')
    const [social1, setSocial1] = useState('')
    const [social2, setSocial2] = useState('')
    const [social3, setSocial3] = useState('')
    const [social4, setSocial4] = useState('')
    const [social5, setSocial5] = useState('')
    const [social6, setSocial6] = useState('')
    const [keyForEvent1, setKeyForEvent1] = useState('')
    const [keyForEvent2, setKeyForEvent2] = useState('')
    const [keyForEvent3, setKeyForEvent3] = useState('')

    const navigate = useNavigate()
    const changeEventDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data: any= {}

        if(event1) data.event1 = event1
        if(event2) data.event2 = event2
        if(event3) data.event3 = event3
        if(transfer) data.transfer = transfer
        if(number) data.number = number
        if(social_title) data.social_title = social_title
        if(social1) data.social1 = social1
        if(social2) data.social2 = social2
        if(social3) data.social3 = social3
        if(social4) data.social4 = social4
        if(social5) data.social5 = social5
        if(social6) data.social6 = social6
        if(keyForEvent1) data.keyForEvent1 = keyForEvent1
        if(keyForEvent2) data.keyForEvent2 = keyForEvent2
        if(keyForEvent3) data.keyForEvent3 = keyForEvent3

        editData('admin_input', data)

        console.log('successfully changed')
        navigate('/')
    }
    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <form onSubmit={(e) => changeEventDetails(e)}>
                    <header className='header'>Scream Of Soul</header>
                    <header className='header'>Admin</header>
                    <div className='wrap'>
                        <header>Event</header>
                        <form onSubmit={(e) => changeEventDetails(e)} className='event'>
                            <div className="input">
                                <label>Event:1</label>
                                <input
                                    type="text"
                                    value={event1}
                                    id='event1'
                                    placeholder='Input Event Details'
                                    required
                                    onChange={(e) => setEvent1(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <label>Event:2</label>
                                <input
                                    type="text"
                                    value={event2}
                                    id='event2'
                                    placeholder='Input Event Details'
                                    required
                                    onChange={(e) => setEvent2(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <label>Event:3</label>
                                <input
                                    type="text"
                                    value={event3}
                                    id='event3'
                                    placeholder='Input Event Details'
                                    required
                                    onChange={(e) => setEvent3(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='wrap'>
                        <header>Transfer</header>
                        <form onSubmit={(e) => changeEventDetails(e)}>
                            <div className='input'>
                                <label>Input Transfer Details</label>
                                <input
                                    type="text"
                                    value={transfer}
                                    id='transfer'
                                    placeholder='Input Event Details'
                                    required
                                    onChange={(e) => setTransfer(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='input'>
                        <label>Number Details</label>
                        <form onSubmit={(e) => changeEventDetails(e)}>
                            <input
                                type="string"
                                value={number}
                                id='number'
                                placeholder='Input Event Details'
                                required
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className='input'>
                        <header>How you know about us</header>
                        <form onSubmit={(e) => changeEventDetails(e)}>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social_title}
                                    id='event_title'
                                    placeholder='Input Social Details'
                                    required
                                    onChange={(e) => setSocial_title(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social1}
                                    id='social1'
                                    placeholder='Social:1'
                                    required
                                    onChange={(e) => setSocial1(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social2}
                                    id='social2'
                                    placeholder='Social:2'
                                    required
                                    onChange={(e) => setSocial2(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social3}
                                    id='social3'
                                    placeholder='Social:3'
                                    required
                                    onChange={(e) => setSocial3(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social4}
                                    id='social4'
                                    placeholder='Social:4'
                                    required
                                    onChange={(e) => setSocial4(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social5}
                                    id='social5'
                                    placeholder='Social:5'
                                    required
                                    onChange={(e) => setSocial5(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type="text"
                                    value={social6}
                                    id='social6'
                                    placeholder='Social:6'
                                    required
                                    onChange={(e) => setSocial6(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className='keyEvent_wrap'>
                            <header>Input url to make buttons work!</header>
                            <input placeholder='event:1 url' onChange={(e) => setKeyForEvent1(e.target.value)}
                                   type='text'/>
                            <input placeholder='event:2 url' onChange={(e) => setKeyForEvent2(e.target.value)}
                                   type='text'/>
                            <input placeholder='event:3 url' onChange={(e) => setKeyForEvent3(e.target.value)}
                                   type='text'/>
                        </form>
                    </div>
                    <button type='submit'>SAVE</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
