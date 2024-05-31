import React, {useState} from 'react'
import './index.css'
import {NewDataTypes} from "../../types/adminData";
import {editData} from '../../lib/controller'
import {useNavigate} from "react-router-dom";
import { Button, Input, Radio, Space} from "antd";




interface IProps {
    apiData: NewDataTypes
}



function  SOSFormCard({apiData}: IProps) {

    const [selectedEvent, setSelectedEvent] = useState('')
    const [transferAnswer, setTransferAnswer] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [selectedSurname, setSelectedSurname] = useState('')
    const [selectedSocial, setSelectedSocial] = useState('')
    const [selectedNumber, setSelectedNumber] = useState('')
    const [selectedEmail, setSelectedEmail] = useState('')
    const [requirement, setRequirement] = useState(false)

    const navigate = useNavigate()


    const handleRadioChangeEvent = (e: any) => {
         setSelectedEvent(e.target.value)
    }
    const handleRadioChangeSocial = (e: any) => {
        setSelectedSocial(e.target.value)
    }
    const handleRadioChangeName = (e: any) => {
        setSelectedName(e.target.value)
    }
    const handleRadioChangeSurname = (e: any) => {
        setSelectedSurname(e.target.value)
    }
    const handleRadioChangeNumber = (e: any) => {
        setSelectedNumber(e.target.value)
    }

    const handleRadioChangeEmail = (e: any) => {
        setSelectedEmail(e.target.value)
    }

    const handleRadioChangeTransfer = (e: any) => {
        setTransferAnswer(e.target.value)
    }

    const handleSubmit = () => {
        if (selectedSocial === '' || selectedEmail === '' || selectedEvent === '' || selectedName === '' || selectedSurname === '' || selectedNumber === '') {
            alert('Please enter Required fields!')
            setRequirement(true)
        } else {
            navigate(`${selectedEvent === apiData.event1 ? '/requirements' : '/agreement'}`)
        }
    }
    const changeEventDetails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data: any= {}

        if(transferAnswer) data.transfer_answer = transferAnswer

        try {
            await editData('admin_input', data)
        } catch (error) {
        }
        handleSubmit()
    };


    return (
        <div className='main_wrap'>
            <form onSubmit={(e) => changeEventDetails(e)}>
                <div className='event_body'>
                    <h1>Event</h1>
                    <form className='event'>
                        <div className='title'>Event Details</div>
                        <Radio.Group onChange={handleRadioChangeEvent}>
                            <Space className='event_wrap' direction="vertical">
                                <Radio className = {`${requirement &&  selectedEvent === '' ? 'required' : 'text_correction'}`} value={`${apiData.event1}`}>{apiData.event1}</Radio>
                                <Radio className = {`${requirement &&  selectedEvent === '' ? 'required' : 'text_correction'}`} value={`${apiData.event2}`}>{apiData.event2}</Radio>
                                <Radio className = {`${requirement &&  selectedEvent === '' ? 'required' : 'text_correction'}`} value={`${apiData.event3}`}>{apiData.event3}</Radio>
                            </Space>
                        </Radio.Group>
                    </form>
                </div>
                <div className='event'>
                    <div className='title'>{apiData.transfer}</div>
                    <form onChange={handleRadioChangeTransfer}>
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio className = {`${requirement && transferAnswer === '' ? 'required' : 'text_correction'}`} onChange={() => {
                                    setTransferAnswer("YES")
                                }} value='YES'>YES</Radio>
                                <Radio className = {`${requirement && transferAnswer === '' ? 'required' : 'text_correction'}`} onChange={() => {
                                    setTransferAnswer("NO")
                                }} value='NO'>NO</Radio>
                            </Space>
                        </Radio.Group>
                    </form>
                </div>
                <div className='event'>
                    <div className='title'>{apiData.social_header}</div>
                    <form>
                        <div className='event_wrap'>
                            <Radio.Group onChange={handleRadioChangeSocial}>
                                <Space className='event_wrap' direction="vertical">
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social1}`}
                                    >
                                        {apiData.social1}
                                    </Radio>
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social2}`}
                                    >
                                        {apiData.social2}
                                    </Radio>
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social3}`}
                                    >
                                        {apiData.social3}
                                    </Radio>
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social4}`}
                                    >
                                        {apiData.social4}
                                    </Radio>
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social5}`}>
                                        {selectedSocial === apiData.social5 ? (
                                            <Input
                                                className = {`${requirement && selectedSocial === ''? 'required' : 'input_text_radio'}`}
                                                placeholder = 'Name'
                                            />

                                        ) : `${apiData.social5}`}
                                    </Radio>
                                    <Radio
                                        className = {`${requirement && selectedSocial === '' ? 'required' : 'text_correction'}`}
                                        value={`${apiData.social6}`}>
                                        {selectedSocial === apiData.social6 ? (
                                            <Input
                                                className = {`${requirement && selectedSocial === ''? 'required' : 'input_text_radio'}`}
                                                placeholder = 'Name'
                                            />
                                        ) : 'Other...'}
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </form>
                    <form>
                        <div className="input">
                            <div className='title'>Name/Имя/Անուն</div>
                            <Input
                                type="text"
                                className={`${requirement && selectedName === '' ? 'required': 'input_text'}`}
                                id='name'
                                name="fav_icon"
                                placeholder='Enter Your Name'
                                required
                                onChange={handleRadioChangeName}/>
                            <label htmlFor='surname'>{apiData.name}</label>
                        </div>
                        <div className="input">
                            <div className='title'>Surname/Фамилия/Ազգանուն</div>
                            <Input
                                type="text"
                                className= {`${requirement && selectedSurname === ''? 'required' : 'input_text'}`}
                                id='surname'
                                name="fav_icon"
                                placeholder='Enter Your Surname'
                                required
                                onChange={handleRadioChangeSurname}/>
                            <label htmlFor='surname'>{apiData.surname}</label>
                        </div>
                        <div className='number'>
                            <form>
                                <div className='title'>{apiData.number_title}</div>
                                <Input
                                    type='text'
                                    className={`${requirement && selectedNumber === '' ? 'required': 'input_text'}`}
                                    id='number'
                                    placeholder='Enter Your Number!'
                                    onChange={handleRadioChangeNumber}/>
                            </form>
                        </div>
                        <div className='email'>
                            <form>
                                <div className='title'>{apiData.email_title}</div>
                                <Input
                                    type='email'
                                    className={`${requirement && selectedEmail === '' ? 'required' :'input_text'}`}
                                    id='email'
                                    placeholder='Enter Your Email!'
                                    onChange={handleRadioChangeEmail}/>
                            </form>
                        </div>
                    </form>
                </div>
                <Button htmlType='submit'>
                        Next
                </Button>
            </form>
        </div>
    );
}

export default SOSFormCard;
