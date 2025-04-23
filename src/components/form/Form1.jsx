import React, {useState} from 'react';
import './form.css';
import {useNavigate} from 'react-router-dom';
import { TextField } from '@mui/material';

const Form1 = () =>{

    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const [companyNameError, setCompanyNameError] = useState(false);
    const [clientNameError, setClientNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [phoneNumError, setPhoneNumError] = useState(false);

    const onClientNameChange = (e) => {
        setClientName(e.target.value);
    };
    const onCompanyNameChange = (e)=>{
        setCompanyName(e.target.value);
    };
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onPhoneNumChange = (e)=>{
        setPhoneNum(e.target.value);
    }

    const checkAndNavigate = () => {
        let isValid = true;

        if (!companyName) {
            setCompanyNameError(true);
            isValid = false;
        }
        if (!clientName) {
            setClientNameError(true);
            isValid = false;
        }
        if(!email){
            setEmailError(true);
            isValid=false;
            setEmailEmpty(true);
        }
        if (email && !email.includes('@') && !email.includes('.')) {
            setEmailError(true);
            isValid = false;
        }
        if (phoneNum&&phoneNum.length<4) {
            setPhoneNumError(true);
            isValid = false;
        }

        if (isValid) {
            navigate('/form2');
        }
    };

    return (
        <div className={"form"}>
            <center><h1>Заявка в ItBot</h1></center>
            <TextField label={'Название компании'}
                       value={companyName}
                       required={true}
                       onChange={onCompanyNameChange}
                       error={companyNameError}
                       helperText={companyNameError ? "Это поле обязательно" : ""}
            />
            <TextField label={'ФИО'}
                       value={clientName}
                       required={true}
                       onChange={onClientNameChange}
                       error={clientNameError}
                       helperText={clientNameError ? "Это поле обязательно" : ""}
            />
            <TextField label={'Электронная почта'}
                       value={email}
                       required={true}
                       onChange={onEmailChange}
                       error={emailError}
                       helperText={emailEmpty? "Это поле обязательно" : emailError? "Введите корректную электронную почту" : ""}
            />
            <TextField label={'Телефон'}
                       value={phoneNum}
                       onChange={onPhoneNumChange}
                       error={phoneNumError}
                       helperText={phoneNumError ? "Введите корректный номер телефона" : ""}
            />
            <button type="button" id="btnForm2" onClick={checkAndNavigate}>
                Далее
            </button>

        </div>
    );
}

export default Form1;
