import React, {useEffect, useState} from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

import {useTranslation} from "react-i18next";
import {NewDataTypes} from "../../types/adminData";
import ButtonUrl from "../Button/ButtonUrl";
import {DocumentData, onSnapshot, QuerySnapshot} from "firebase/firestore";
import {adminData} from "../../lib/controller";


const Agreement: React.FC  = () => {

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    const [apiData, setApiData] = useState<NewDataTypes []>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => onSnapshot(adminData, (snapshot: QuerySnapshot<DocumentData>)=> {
            setApiData(
                snapshot.docs.map((doc)=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }),
        )
            setLoading(false);

        }),
        []);


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
                <div className='width_test'>
                    {apiData && apiData.length ? (
                        <div>
                            {
                                apiData?.map((apiData)=>
                                    <ButtonUrl agreement= {t('agreement')} submit={t('submit')} apiData={apiData}/>
                                )
                            }
                        </div>
                    ): (<div/>)}
                </div>
            </div>
        </div>
    );
};

export default Agreement;
