import React, {useEffect, useState} from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

import {useTranslation} from "react-i18next";
import {google} from "googleapis";

import {QuerySnapshot, DocumentData, onSnapshot } from 'firebase/firestore'
import {adminData} from '../../lib/controller'
import {NewDataTypes} from "../../types/adminData";
import SOSFormCard from "../form-card/FormCard";

const SOSForm: React.FC = () => {

    const [apiData, setApiData] = useState<NewDataTypes []>([])

    useEffect(() => onSnapshot(adminData, (snapshot: QuerySnapshot<DocumentData>)=> {
            setApiData(
                snapshot.docs.map((doc)=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }),
            )
        }),
        []
    );

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                <div className='line'/>
                {apiData && apiData.length ? (
                    <div className='form_card'>
                        {
                            apiData?.map((apiData)=>
                                <SOSFormCard apiData={apiData}/>
                            )
                        }
                    </div>
                ): (<div/>)}
            </div>
        </div>
    );
};

export default SOSForm;
