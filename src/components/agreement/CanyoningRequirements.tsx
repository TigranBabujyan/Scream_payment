import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";

import './index.css';
import 'flag-icons/css/flag-icons.min.css';
import { NewDataTypes } from "../../types/adminData";
import {DocumentData, onSnapshot, QuerySnapshot} from "firebase/firestore";
import { adminData } from "../../lib/controller";
import ButtonUrl from "../Button/ButtonUrl";

const CanyoningRequirements: React.FC = () => {

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
        []
    );
    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header_agreement'>Scream Of Soul</header>
                <div className='checklist'>
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
                <div className='submit_wrap'>
                    {apiData && apiData.length ? (
                        <div>
                            {
                                apiData?.map((apiData)=>
                                    <ButtonUrl agreement={t('agreement')} submit={t('submit')} apiData={apiData}/>
                                )
                            }
                        </div>
                    ): (<div/>)}
                </div>
            </div>
        </div>
    );
};

export default CanyoningRequirements;
