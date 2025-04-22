import React, {useState} from 'react';
import './form.css';
import { TextField } from '@mui/material';

const Form1 = () =>{

    const [companyName, setCompanyName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const onUserNameChange = (e) => {
        setUserName(e.target.value);};
    const onCompanyNameChange = (e)=>{
        setCompanyName(e.target.value);};
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onPhoneNumChange = (e)=>{
        setPhoneNum(e.target.value);
    }
    return (
        <div className={"form"}>
            <center><h1>Заявка в ItBot</h1></center>
            <TextField label={'Название компании'}
                       value={companyName}
                       onChange={onCompanyNameChange}
            />
            <TextField label={'ФИО'}
                       value={userName}
                       onChange={onUserNameChange}
            />

            <TextField label={'Электронная почта'}
                       value={email}
                       onChange={onEmailChange}
            />
            <small>Этот адрес используется как форма связи между вами и нашими специалистами</small>
            <TextField label={'Телефон'}
                       value={phoneNum}
                       onChange={onPhoneNumChange}
            />
            <button onClick={undefined}>
                Далее
            </button>

        </div>
    );
}

export default Form1;