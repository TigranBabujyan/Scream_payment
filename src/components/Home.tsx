import React from 'react';
import './index.css';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
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
                        <button onClick={() => handleChangeLanguage("am")}>AM</button>
                        <button onClick={() => handleChangeLanguage("en")}>EN</button>
                        <button onClick={() => handleChangeLanguage("ru")}>RU</button>
                    </div>
                    <ol>
                        <div className='checklist_title'>{t('title')}</div>
                        <div className='checklist_subtitle'>{t('subtitle')}</div>
                        <div className='list'>
                            <li>{t("list.1")}</li>
                            <li>{t("list.2")}</li>
                            <li>{t("list.3")}</li>
                            <li>{t("list.4")}</li>
                            <li>{t("list.5")}</li>
                            <li>{t("list.6")}</li>
                            <li>{t("list.7")}</li>
                            <li>{t("list.8")}</li>
                            <li>{t("list.9")}</li>
                            <li>{t("list.10")}</li>
                            <li>{t("list.11")}</li>
                            <li>{t("list.12")}</li>
                            <li>{t("list.13")}</li>
                            <li>{t("list.14")}</li>
                            <li>{t("list.15")}</li>
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
                            <button  id={'myButton'} disabled={true}>{t('submit')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
