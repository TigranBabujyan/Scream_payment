import React, {useState} from 'react'
import './index.css'
import {NewDataTypes} from "../../types/adminData";
import {Link} from "react-router-dom";

interface IProps {
    apiData: NewDataTypes
}

function  SOSFormCard({apiData}: IProps) {

    const [selectedEvent, setSelectedEvent] = useState('')
    const [selectedTransfer, setSelectedTransfer] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [selectedSurname, setSelectedSurname] = useState('')
    const [selectedSocial, setSelectedSocial] = useState('')
    const [selectedNumber, setSelectedNumber] = useState('')
    const handleRadioChangeEvent = (e: any) => {
         setSelectedEvent(e.target.value)
        console.log (selectedEvent, 'selected event')
    }
    const handleRadioChangeTransfer = (e: any) => {
        setSelectedTransfer(e.target.value)
        console.log (selectedTransfer, 'selected transfer')
    }
    const handleRadioChangeSocial = (e: any) => {
        setSelectedSocial(e.target.value)
        console.log (selectedSocial, 'selected Social')
    }
    const handleRadioChangeName = (e: any) => {
        setSelectedName(e.target.value)
        console.log (selectedName, 'selected Name')
    }
    const handleRadioChangeSurname = (e: any) => {
        setSelectedSurname(e.target.value)
        console.log (selectedSurname, 'selected Surname')
    }
    const handleRadioChangeNumber = (e: any) => {
        setSelectedNumber(e.target.value)
        console.log (selectedNumber, 'selected Number')
    }

    return (
        <div className='main_wrap'>
            <div className='event_body'>
                <h1>Event</h1>
                <form className='event'>
                    <div className='title'>Event Details</div>
                    <div className='event_wrap'>
                        <div className="radio">
                            <input type="radio" id='1st_event' name="event" value={`${apiData.event1}`} onChange={handleRadioChangeEvent}/>
                            <label htmlFor='1st_event'>{apiData.event1}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='2nd_event' name="event" value={`${apiData.event2}`} onChange={handleRadioChangeEvent}/>
                            <label htmlFor='2nd_event'>{apiData.event2}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='3rd_event' name="event" value={`${apiData.event3}`} onChange={handleRadioChangeEvent}/>
                            <label htmlFor='3rd_event'>{apiData.event3}</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className='event'>
                <div className='title'>{apiData.transfer}</div>
                <form>
                    <div className='radio'>
                        <input type="radio" id='transfer_yes' name="fav_icon" value="YES"  onChange={handleRadioChangeTransfer}/>
                        <label htmlFor='transfer_yes'>YES</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='transfer_no' name="fav_icon" value="NO"  onChange={handleRadioChangeTransfer}/>
                        <label htmlFor='transfer_no'>NO</label>
                    </div>
                </form>
            </div>
            <div className='event'>
                <div className='title'>{apiData.social_header}</div>
                <form>
                    <div className='event_wrap'>
                        <div className='radio'>
                            <input type="radio" id='instagram' name="fav_icon" value={`${apiData.social1}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor={`${apiData.social1}`}>{apiData.social1}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='facebook' name="fav_icon" value={`${apiData.social2}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor='facebook'>{apiData.social2}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='tiktok' name="fav_icon" value={`${apiData.social3}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor='tiktok'>{apiData.social3}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='friends' name="fav_icon" value={`${apiData.social4}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor='friends'>{apiData.social4}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='google' name="fav_icon" value={`${apiData.social5}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor='google'>{apiData.social5}</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='telegram' name="fav_icon" value={`${apiData.social6}`}  onChange={handleRadioChangeSocial}/>
                            <label htmlFor='telegram'>{apiData.social6}</label>
                        </div>
                    </div>
                </form>
                <form>
                    <div className="input">
                        <div className='title'>Name/Имя/Անուն</div>
                        <input type="text" id='name' name="fav_icon" placeholder='Enter Your Name' required onChange={handleRadioChangeName}/>
                        <label htmlFor='surname'>{apiData.name}</label>
                    </div>
                    <div className="input">
                        <div className='title'>Surname/Фамилия/Ազգանուն</div>
                        <input type="text" id='surname' name="fav_icon" placeholder='Enter Your Surname' required onChange={handleRadioChangeSurname}/>
                        <label htmlFor='surname'>{apiData.surname}</label>
                    </div>
                    <div className='number'>
                        <form>
                            <div className='title'>{apiData.number}</div>
                            <input type='text' id='number' placeholder='Enter Your Number!' onChange={handleRadioChangeNumber}/>
                        </form>
                    </div>
                </form>
                <button>
                    <Link to='agreement'>
                        Next
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default SOSFormCard;
