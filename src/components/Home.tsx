import React from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

import {useTranslation} from "react-i18next";


const Home: React.FC = () => {

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }
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
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <div className='checklist'>
                    <div className='language'>
                        <button className='button' onClick={() => handleChangeLanguage("am")}><span className="fi fi-am"/></button>
                        <button className='button' onClick={() => handleChangeLanguage("en")}><span className="fi fi-gb-eng"/></button>
                        <button className='button' onClick={() => handleChangeLanguage("ru")}><span className="fi fi-ru"/></button>
                    </div>
                    <ol>
                        <div className='checklist_title'>{t('title')}</div>
                        <div className='checklist_subtitle'>{t('subtitle')}</div>
                        <div className='list'>
                            {Array.from({ length: 15 }, (_, i) => (
                                <li key={i}>{t(`list.${i + 1}`)}</li>
                            ))}
                        </div>
                    </ol>
                    <div className="lower_title">{t("lower_title")}</div>
                    <div className="aggreement_positioning">
                        <div className='checkbox'>
                            <input type="checkbox" id={"myCheckbox"}/>
                            <div className="agreement">{t("agreement")}</div>
                        </div>
                        <div onClick={navigateToLink}>
                             {/*There is a bug a active and not active button on a checkbox click!!!*/}
                            <button id={'myButton'} disabled={true}>{t('submit')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
