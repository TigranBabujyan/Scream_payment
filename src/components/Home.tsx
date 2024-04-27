import React from 'react';
import './index.css';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
const Home: React.FC = () => {

    const props = {

        arm: {
            title: "MEDICAL CONTRAINDICATIONS",
            subtitle: "Most people can jump, but there are diseases that (with whom) you must be careful.",
            1: "Musculoskeletal system: spinal injuries in the past, spinal surgery, herniated discs, 3 degrees scoliosis, congenital malformations of the spine.",
            2: "The cardiovascular system: congenital and acquired malformations of the heart, pacemaker, rhythm disorders (arrhythmia), arterial hypertension, hypertension stage 2-3, heart failure.",
            3: "Respiratory system: asthma of mixed genesis.",
            4: " (The) early postoperative period: first 3 months after surgery",
            5: "Intracranial hypertension, epilepsy.",
            6: "Thyrotoxicosis.",
            7: "Pregnancy",
            8: "Psychiatric disorders in the acute stage: schizophrenia, MDS, etc.",
            9: "The omission of the kidneys of 2-3 degrees.",
            10: "Strong nervous disorders.",
            11: "Diabetes.",
            12: "Coming to the event in a state of alcoholic, drug intoxication",
            13: "FACE CONTROL.",
            14: "Do not listen to / ignore the guidance of instructors",
            15: "SMOKING NEAR GEAR.",
            lower_title: "Remember, that organizers can't visually assess your physical and psychological health, you're responsible for your jump!"
        },
        eng: {
            title: "MEDICAL CONTRAINDICATIONS",
            subtitle: "Most people can jump, but there are diseases that (with whom) you must be careful.",
            1: "Musculoskeletal system: spinal injuries in the past, spinal surgery, herniated discs, 3 degrees scoliosis, congenital malformations of the spine.",
            2: "The cardiovascular system: congenital and acquired malformations of the heart, pacemaker, rhythm disorders (arrhythmia), arterial hypertension, hypertension stage 2-3, heart failure.",
            3: "Respiratory system: asthma of mixed genesis.",
            4: " (The) early postoperative period: first 3 months after surgery",
            5: "Intracranial hypertension, epilepsy.",
            6: "Thyrotoxicosis.",
            7: "Pregnancy",
            8: "Psychiatric disorders in the acute stage: schizophrenia, MDS, etc.",
            9: "The omission of the kidneys of 2-3 degrees.",
            10: "Strong nervous disorders.",
            11: "Diabetes.",
            12: "Coming to the event in a state of alcoholic, drug intoxication",
            13: "FACE CONTROL.",
            14: "Do not listen to / ignore the guidance of instructors",
            15: "SMOKING NEAR GEAR.",
            lower_title: "Remember, that organizers can't visually assess your physical and psychological health, you're responsible for your jump!"
        },
        rus: {
            title: "MEDICAL CONTRAINDICATIONS",
            subtitle: "Most people can jump, but there are diseases that (with whom) you must be careful.",
            1: "Musculoskeletal system: spinal injuries in the past, spinal surgery, herniated discs, 3 degrees scoliosis, congenital malformations of the spine.",
            2: "The cardiovascular system: congenital and acquired malformations of the heart, pacemaker, rhythm disorders (arrhythmia), arterial hypertension, hypertension stage 2-3, heart failure.",
            3: "Respiratory system: asthma of mixed genesis.",
            4: " (The) early postoperative period: first 3 months after surgery",
            5: "Intracranial hypertension, epilepsy.",
            6: "Thyrotoxicosis.",
            7: "Pregnancy",
            8: "Psychiatric disorders in the acute stage: schizophrenia, MDS, etc.",
            9: "The omission of the kidneys of 2-3 degrees.",
            10: "Strong nervous disorders.",
            11: "Diabetes.",
            12: "Coming to the event in a state of alcoholic, drug intoxication",
            13: "FACE CONTROL.",
            14: "Do not listen to / ignore the guidance of instructors",
            15: "SMOKING NEAR GEAR.",
            lower_title: "Remember, that organizers can't visually assess your physical and psychological health, you're responsible for your jump!"
        }
    }

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
                        <button id={'myButton'} disabled={true}>{t('submit')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
