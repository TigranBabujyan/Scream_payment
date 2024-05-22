import React, {useState} from 'react'
import './index.css'
import {NewDataTypes} from "../../types/adminData";
import {Link} from "react-router-dom";
import {editData} from '../../lib/controller'
import {useNavigate} from "react-router-dom";



interface IProps {
    apiData: NewDataTypes
}



function  SOSFormCard({apiData}: IProps) {

    const [selectedEvent, setSelectedEvent] = useState('')
    const [transferAnswer, setTransferAnswer] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [selectedSurname, setSelectedSurname] = useState('')
    const [selectedSocial, setSelectedSocial] = useState('')
    const [selectedNumber, setSelectedNumber] = useState('')
    const [selectedEmail, setSelectedEmail] = useState('')

    const navigate = useNavigate()


    const handleRadioChangeEvent = (e: any) => {
         setSelectedEvent(e.target.value)
        console.log (selectedEvent, 'selected event')
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

    const handleRadioChangeEmail = (e: any) => {
        setSelectedEmail(e.target.value)
        console.log (selectedEmail, 'selected Email')
    }

    const handleSubmit = () => {
        navigate(`${selectedEvent === apiData.event1 ? '/requirements' : '/agreement'}`)
    }
    const changeEventDetails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data: any= {}

        if(transferAnswer) data.transfer_answer = transferAnswer

        try {
            await editData('admin_input', data)
            console.log('successfully changed')
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };


    return (
        <div className='main_wrap'>
            <form onSubmit={(e) => changeEventDetails(e)}>
                <div className='event_body'>
                    <h1>Event</h1>
                    <form className='event'>
                        <div className='title'>Event Details</div>
                        <div className='event_wrap'>
                            <div className="radio">
                                <input type="radio" id='1st_event' name="event" value={`${apiData.event1}`}
                                       onChange={handleRadioChangeEvent}/>
                                <label htmlFor='1st_event'>{apiData.event1}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='2nd_event' name="event" value={`${apiData.event2}`}
                                       onChange={handleRadioChangeEvent}/>
                                <label htmlFor='2nd_event'>{apiData.event2}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='3rd_event' name="event" value={`${apiData.event3}`}
                                       onChange={handleRadioChangeEvent}/>
                                <label htmlFor='3rd_event'>{apiData.event3}</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='event'>
                    <div className='title'>{apiData.transfer}</div>
                    <form>
                        <div className='radio'>
                            <input type="radio" id='transfer_yes' name="fav_icon" value="YES"
                                   onChange={() => {
                                       setTransferAnswer("YES")
                                   }}/>
                            <label htmlFor='transfer_yes'>YES</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='transfer_no' name="fav_icon" value="NO"
                                   onChange={() => {
                                       setTransferAnswer("NO")
                                   }}/>
                            <label htmlFor='transfer_no'>NO</label>
                        </div>
                    </form>
                </div>
                <div className='event'>
                    <div className='title'>{apiData.social_header}</div>
                    <form>
                        <div className='event_wrap'>
                            <div className='radio'>
                                <input type="radio" id='instagram' name="fav_icon" value={`${apiData.social1}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor={`${apiData.social1}`}>{apiData.social1}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='facebook' name="fav_icon" value={`${apiData.social2}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor='facebook'>{apiData.social2}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='tiktok' name="fav_icon" value={`${apiData.social3}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor='tiktok'>{apiData.social3}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='friends' name="fav_icon" value={`${apiData.social4}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor='friends'>{apiData.social4}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='google' name="fav_icon" value={`${apiData.social5}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor='google'>{apiData.social5}</label>
                            </div>
                            <div className='radio'>
                                <input type="radio" id='telegram' name="fav_icon" value={`${apiData.social6}`}
                                       onChange={handleRadioChangeSocial}/>
                                <label htmlFor='telegram'>{apiData.social6}</label>
                            </div>
                        </div>
                    </form>
                    <form>
                        <div className="input">
                            <div className='title'>Name/Имя/Անուն</div>
                            <input type="text" className='input_text' id='name' name="fav_icon"
                                   placeholder='Enter Your Name' required
                                   onChange={handleRadioChangeName}/>
                            <label htmlFor='surname'>{apiData.name}</label>
                        </div>
                        <div className="input">
                            <div className='title'>Surname/Фамилия/Ազգանուն</div>
                            <input type="text" className='input_text' id='surname' name="fav_icon"
                                   placeholder='Enter Your Surname' required
                                   onChange={handleRadioChangeSurname}/>
                            <label htmlFor='surname'>{apiData.surname}</label>
                        </div>
                        <div className='number'>
                            <form>
                                <div className='title'>{apiData.number_title}</div>
                                <input type='text' className='input_text' id='number' placeholder='Enter Your Number!'
                                       onChange={handleRadioChangeNumber}/>
                            </form>
                        </div>
                        <div className='email'>
                            <form>
                                <div className='title'>{apiData.email_title}</div>
                                <input type='text' className='input_text' id='number' placeholder='Enter Your Number!'
                                       onChange={handleRadioChangeEmail}/>
                            </form>
                        </div>
                    </form>
                </div>
                <button type='submit'>
                        Next
                </button>
            </form>
        </div>
    );
}

export default SOSFormCard;
