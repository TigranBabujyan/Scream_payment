import React, {useEffect, useState} from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

import {useTranslation} from "react-i18next";
import {NewDataTypes} from "../../types/adminData";


const Agreement: React.FC  = () => {

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }


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

    const [apiData, setApiData] = useState<NewDataTypes []>([])
    const [buttonUrl, setButtonUrl] = useState('')

    useEffect(() => {
        if(apiData[0]) {
            if(apiData[0].transfer_answer){
                if(apiData[0].keyForEvent2Transfer){
                    setButtonUrl(apiData[0].keyForEvent2Transfer)
                }
            }
            if(!apiData[0].transfer_answer){
                if(apiData[0].keyForEvent2){
                    setButtonUrl(apiData[0].keyForEvent2)
                }
            }
        }
    }, [apiData]);


    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <div className='checklist'>
                    <div className='language'>
                        <div className='empty'/>
                        <div className='lang_buttons'>
                            <button className='button' onClick={() => handleChangeLanguage("am")}><span
                                className="fi fi-am"/></button>
                            <button className='button' onClick={() => handleChangeLanguage("en")}><span
                                className="fi fi-us"/></button>
                            <button className='button' onClick={() => handleChangeLanguage("ru")}><span
                                className="fi fi-ru"/></button>
                        </div>
                    </div>
                    <div className='checklist_title'>{t('rope_jumping_agreement.title')}</div>
                    <div className='checklist_subtitle'>{t('rope_jumping_agreement.subtitle')}</div>
                    <ol>
                        <div className='list'>
                            {Array.from({length: 15}, (_, i) => (
                                <li key={i}>{t(`rope_jumping_agreement.list.${i + 1}`)}</li>
                            ))}
                        </div>
                    </ol>
                    <div className="lower_title">{t("rope_jumping_agreement.lower_title")}</div>
                </div>
                <div className="agreement_wrap">
                    <div className='checkbox'>
                        <input type="checkbox" onClick={handleCheckboxChange} id={"myCheckbox"}/>
                        <div className="agreement">{t("agreement")}</div>
                    </div>
                    <div className= 'submit' onClick={() => buttonUrl}>
                        <button className='submit_button' id={'myButton'} disabled={true}>{t('submit')}</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Agreement;
