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
        <div className={"page"}>
            <div className={"header"}>
                <h1>Заявка в ItBot</h1>
            </div>

            <div className="container">
                <div className={'eachForm'}>
            <TextField label={'Укажите вашу компанию'}
                       id={"textField"}
                       value={companyName}
                       required={true}
                       onChange={onCompanyNameChange}
                       error={companyNameError}
                       helperText={companyNameError ? "Это поле обязательно" : ""}
            />
                </div>
                <div className={'eachForm'}>
            <TextField label={'Укажите ваше ФИО'}
                       id={"textField"}
                       value={clientName}
                       required={true}
                       onChange={onClientNameChange}
                       error={clientNameError}
                       helperText={clientNameError ? "Это поле обязательно" : ""}
            />
                </div>
                    <div className={'eachForm'}>
            <TextField label={'Укажите вашу электронную почту'}
                       id={"textField"}
                       value={email}
                       required={true}
                       onChange={onEmailChange}
                       error={emailError}
                       helperText={emailEmpty? "Это поле обязательно" : emailError? "Введите корректную электронную почту" : ""}
            />
                    </div>
                        <div className={"underText"}>
            Этот электронный адрес используется как форма связи между вами и нашими специалистами.
                    </div>
                    <div className={'eachForm'}>
            <TextField label={'Номер телефона для связи'}
                       id={"textField"}
                       value={phoneNum}
                       onChange={onPhoneNumChange}
                       error={phoneNumError}
                       helperText={phoneNumError ? "Введите корректный номер телефона" : ""}
            />
                    </div>
                        <div className={"underText"}>
            Для удобства связи с вами нашего специалиста.
                        </div>
                <button className={"button"} type="button" id="btnForm2" onClick={checkAndNavigate}>
                    Далее
                </button>

            </div>

        </div>
    );
}

export default Form1;
