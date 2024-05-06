import React from 'react'
import './index.css'
import {NewDataTypes} from "../../types/adminData";
import {Link} from "react-router-dom";

interface IProps {
    apiData: NewDataTypes
}

function  SOSFormCard({apiData}: IProps) {

    return (
        <div className='main_wrap'>
            <div className='event_body'>
                <h1>Event</h1>
                <form className='event'>
                    <div className="input">
                        <h4>Name/Имя/Անուն</h4>
                        <input type="text" id='name' name="fav_icon" placeholder='Enter Your Name'/>
                    </div>
                    <div className="input">
                        <h4>Surname/Фамилия/Ազգանուն</h4>
                        <input type="text" id='surname' name="fav_icon" placeholder='Enter Your Surname'/>
                        <label htmlFor='surname'>{apiData.surname}</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id='1st_event' name="fav_icon" value={`${apiData.event1}`} required/>
                        <label htmlFor='1st_event'>{apiData.event1}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='2nd_event' name="fav_icon" value={`${apiData.event2}`} required/>
                        <label htmlFor='2nd_event'>{apiData.event2}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='3rd_event' name="fav_icon" value={`${apiData.event3}`}/>
                        <label htmlFor='3rd_event'>{apiData.event3}</label>
                    </div>
                </form>
            </div>
            <div className='line'/>
            <div className='transfer_body'>
                <h4>{apiData.transfer}</h4>
                <form>
                    <div className='radio'>
                        <input type="radio" id='transfer_yes' name="fav_icon" value="YES"/>
                        <label htmlFor='transfer_yes'>YES</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='transfer_no' name="fav_icon" value="NO"/>
                        <label htmlFor='transfer_no'>NO</label>
                    </div>
                </form>
            </div>
            <div className='line'/>
            <div className='number'>
                <h4>{apiData.number}</h4>
                <form>
                    <input type='number'></input>
                </form>
            </div>
            <div className='line'/>
            <div className='social'>
                <header>{apiData.social_header}</header>
                <form>
                    <div className='radio'>
                        <input type="radio" id='instagram' name="fav_icon" value={`${apiData.social1}`}/>
                        <label htmlFor={`${apiData.social1}`}>{apiData.social1}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='facebook' name="fav_icon" value={`${apiData.social2}`}/>
                        <label htmlFor='facebook'>{apiData.social2}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='tiktok' name="fav_icon" value={`${apiData.social3}`}/>
                        <label htmlFor='tiktok'>{apiData.social3}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='friends' name="fav_icon" value={`${apiData.social4}`}/>
                        <label htmlFor='friends'>{apiData.social4}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='google' name="fav_icon" value={`${apiData.social5}`}/>
                        <label htmlFor='google'>{apiData.social5}</label>
                    </div>
                    <div className='radio'>
                        <input type="radio" id='telegram' name="fav_icon" value={`${apiData.social6}`}/>
                        <label htmlFor='telegram'>{apiData.social6}</label>
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
