import React, {useEffect, useState} from 'react';

import './index.css';
import 'flag-icons/css/flag-icons.min.css';

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

    return (
        <div className='main'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='body'>
                <header className='header'>Scream Of Soul</header>
                {apiData && apiData.length ? (
                    <div>
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
