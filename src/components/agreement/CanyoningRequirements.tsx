import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";

import './index.css';
import 'flag-icons/css/flag-icons.min.css';
import selectedTransfer from '../form-card/FormCard';

const CanyoningRequirements: React.FC = () => {

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


    const navigateToLink = () => {
        window.location.href = 'https://payment.paylink.am/?id=cWREbjZKQkxlZE1HMktna05ENTBXcFIzMjM0QkRqWEJCaDVIK2RnL3AzUDUreTVKczN6VStJZW5mSXRxQ01XYVVPd0dzRlREN2FzYUJrTUtOVGQ2ZXc9PQ';
    };

    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <div className='checklist'>
                    {/*Need to replace buttons to the same line with header*/}
                    <div className='language'>
                        <div className='lang_buttons'>
                            <button className='button' onClick={() => handleChangeLanguage("am")}><span
                                className="fi fi-am"/></button>
                            <button className='button' onClick={() => handleChangeLanguage("en")}><span
                                className="fi fi-us"/></button>
                            <button className='button' onClick={() => handleChangeLanguage("ru")}><span
                                className="fi fi-ru"/></button>
                        </div>
                    </div>
                    <div className='checklist_title'>{t('canyoning_requirements.title')}</div>
                    <div className='checklist_subtitle'>{t('canyoning_requirements.subtitle')}</div>
                    <ol>
                        <div className='list'>
                            {Array.from({length: 7}, (_, i) => (
                                <li key={i}>{t(`canyoning_requirements.list1.${i + 1}`)}</li>
                            ))}
                        </div>
                    </ol>
                    <div className='price_includes_wrap'>
                        <div className="includes_title">{t("canyoning_requirements.title2")}</div>
                        <div className="price_includes">{t("canyoning_requirements.sub1")}</div>
                        <div className="price_includes">{t("canyoning_requirements.sub2")}</div>
                    </div>
                    <ol>
                        <div className='list'>
                            {Array.from({length:4}, (_, i) => (
                                <li key={i}>{t(`canyoning_requirements.list2.${i + 1}`)}</li>
                            ))}
                        </div>
                    </ol>
                </div>
                <div className="agreement_wrap">
                    <div className='checkbox'>
                        <input type="checkbox" onClick={handleCheckboxChange} id={"myCheckbox"}/>
                        <div className="agreement">{t("agreement")}</div>
                    </div>
                    <div className= 'submit' onClick={navigateToLink}>
                        <button className='submit_button' id={'myButton'} disabled={true}>{t('submit')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CanyoningRequirements;
