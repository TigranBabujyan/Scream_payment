import React, {useEffect, useState} from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

import {useTranslation} from "react-i18next";
import axios from 'axios';


const SOSForm: React.FC = () => {

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }


    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // This effect runs whenever the checkbox state changes
        setIsButtonDisabled(!isCheckboxChecked);
    }, [isCheckboxChecked]);

    const handleCheckboxChange = (event: any) => {
        setIsCheckboxChecked(event.target.checked);
    };
    const checkbox = document.getElementById('myCheckbox') as HTMLInputElement;
    const button = document.getElementById('myButton') as HTMLButtonElement;

    if (checkbox && button) {
        checkbox.addEventListener('change', () => {
            button.disabled = !checkbox.checked;
        });
    }


    const navigateToLink = () => {
        window.location.href = 'https://payment.paylink.am/?id=cWREbjZKQkxlZE1HMktna05ENTBXcFIzMjM0QkRqWEJCaDVIK2RnL3AzUDUreTVKczN6VStJZW5mSXRxQ01XYVVPd0dzRlREN2FzYUJrTUtOVGQ2ZXc9PQ';
    };

    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <div className='line'/>
                <div className='event_body'>
                    <header>Event</header>
                    <form className='event'>
                        <div className="radio">
                            <input type="radio" id='1st_event' name="fav_icon" value="1"/>
                            <label htmlFor='1st_event'>1</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='2nd_event' name="fav_icon" value="2"/>
                            <label htmlFor='2nd_event'>2</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='3rd_event' name="fav_icon" value="3"/>
                            <label htmlFor='3rd_event'>3</label>
                        </div>
                    </form>
                </div>
                <div className='line'/>
                <div className='transfer_body'>
                    <header>Transfer</header>
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
                    <header>Number</header>
                    <form>
                        <input type='number'></input>
                    </form>
                </div>
                <div className='line'/>
                <div className='social'>
                    <header>Socials</header>
                    <form>
                        <div className='radio'>
                            <input type="radio" id='instagram' name="fav_icon" value="instagram"/>
                            <label htmlFor='instagram'>instagram</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='facebook' name="fav_icon" value="facebook"/>
                            <label htmlFor='facebook'>facebook</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='tiktok' name="fav_icon" value="tiktok"/>
                            <label htmlFor='tiktok'>tiktok</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='friends' name="fav_icon" value="friends"/>
                            <label htmlFor='friends'>friends</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='google' name="fav_icon" value="google"/>
                            <label htmlFor='google'>google</label>
                        </div>
                        <div className='radio'>
                            <input type="radio" id='telegram' name="fav_icon" value="telegram"/>
                            <label htmlFor='telegram'>telegram</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SOSForm;
