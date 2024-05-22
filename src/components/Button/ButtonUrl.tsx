import React, {useEffect, useState} from 'react'
import './index.css'
import {NewDataTypes} from "../../types/adminData";
import {useNavigate} from "react-router-dom";

interface IProps {
    apiData: NewDataTypes,
    submit: string,
    agreement: string
}

function  SOSFormCard({apiData, submit, agreement}: IProps) {

    const navigate = useNavigate()


    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
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


    const handleUrl = () => {
        if (!isButtonDisabled){
            if (apiData.transfer_answer === "YES" && window.location.href.includes('/requirements')) {
                navigate(`${apiData.keyForEvent1Transfer}`)
            }
            if (apiData.transfer_answer === "NO" && window.location.href.includes('/requirements')) {
                navigate( `${apiData.keyForEvent1}`)
            }
            if (apiData.transfer_answer === "YES" && window.location.href.includes('/agreement')) {
                navigate(`${apiData.keyForEvent2Transfer}`)
            }
            if (apiData.transfer_answer === "NO" && window.location.href.includes('/agreement')) {
                navigate(`${apiData.keyForEvent2}`)
            }
        }else {
            alert('Please read and agree with terms')
        }
    }

    return (
        <div className="agreement_wrap">
            <div className='checkbox'>
                <input type="checkbox" onClick={handleCheckboxChange} id={"myCheckbox"}/>
                <div className="agreement">{agreement}</div>
            </div>
            <div className='submit'>
                <button onClick={handleUrl} className='submit_button' id={'myButton'} disabled={isButtonDisabled}>
                    {submit}
                </button>
            </div>
        </div>
    );
}

export default SOSFormCard;
