import React, { useState, useCallback } from 'react';
import './form.css';
import {Checkbox, TextareaAutosize, TextField} from "@mui/material";
import {useNavigate} from 'react-router-dom';

const Form2 = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        category: 'access',
        access: 'userpage',
        workplace: 'computer',
        programs: '',
        consultations: '',
        etcetera: '',
        money: '',
        mail: 'creation'
    });

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    function navigateBack() {
        navigate('/form1');
    }
    const renderSubcategory = () => {
        switch (formState.category) {
            case 'access':
                return (
                    <div className="subselect">
                        <div className="eachForm">
                        С чем связан ваш вопрос?
                        <select
                            name="access"
                            value={formState.access}
                            onChange={handleChange}
                        >
                            <option value="userpage">Создание учётной записи</option>
                            <option value="VPN">Создание VPN</option>
                            <option value="matrix">Матрица доступов</option>
                        </select>
                        </div>
                        {formState.access === 'userpage' && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                    <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}
                        {formState.access === 'VPN' && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}
                        {formState.access === 'matrix' && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}
                    </div>
                );
            case 'workplace':
                return (
                    <div className="subselect">
                        <div className="eachFormCheckbox">
                        <Checkbox value="checkbox"/>
                            <div className="eachFormCheckboxText">Работаю из дома</div>
                        </div>
                        <div className="eachForm">
                        <select
                            name="workplace"
                            value={formState.workplace}
                            onChange={handleChange}
                        >
                            <option value="computer">Компьютер</option>
                            <option value="remote">Удалёнка</option>
                            <option value="mail">Почта</option>
                            <option value="printer">Принтер</option>
                            <option value="scanner">Сканер</option>
                            <option value="phone">Телефон</option>
                            <option value="misc">Прочее</option>
                        </select>
                        </div>
                        {formState.workplace === 'computer' && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                    <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}
                        {formState.workplace === 'remote' && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                    <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}

                        {formState.workplace === 'mail' && (
                            <div className="subselect">
                                <div className="eachForm">
                                <select
                                    name="mail"
                                    value={formState.mail}
                                    onChange={handleChange}
                                >
                                    <option value="creation">Создание почтового ящика</option>
                                    <option value="notBeingSent">Не отправляются письма</option>
                                    <option value="setting">Настройка рабочих программ</option>
                                    <option value="misc">Другое</option>
                                </select>
                                </div>
                                {formState.mail === 'creation' && (
                                    <div className="subselect">
                                        <TextField />
                                        <div className="eachFormTextArea">
                                            <TextareaAutosize minRows={5} maxRows={40}></TextareaAutosize>
                                        </div>
                                        Прикрепление файла
                                    </div>
                                )}
                                {formState.mail === 'notBeingSent' && (
                                    <div className="subselect">
                                        <TextField />
                                        <div className="eachFormTextArea">
                                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                        </div>
                                        Прикрепление файла
                                    </div>
                                )}
                                {formState.mail === 'setting' && (
                                    <div className="subselect">
                                        <TextField />
                                        <div className="eachFormTextArea">
                                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                        </div>
                                        Прикрепление файла
                                    </div>
                                )}
                                {formState.mail === 'misc' && (
                                    <div className="subselect">
                                        <TextField />
                                        <div className="eachFormTextArea">
                                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                        </div>
                                        Прикрепление файла
                                    </div>
                                )}
                            </div>
                        )}

                        {['printer', 'scanner'].includes(formState.workplace) && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                    <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}

                        {['phone', 'misc'].includes(formState.workplace) && (
                            <div className="subselect">
                                <TextField />
                                <div className="eachFormTextArea">
                                    <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                                </div>
                                Прикрепление файла
                            </div>
                        )}
                    </div>
                );
            case 'programs':
                return(
                    <div className="subselect">
                        <div className="eachForm">
                            <div className="eachFormCheckbox">
                                <Checkbox value="checkbox"/>
                                <div className="eachFormCheckboxText">Работаю из дома</div>
                            </div>
                        </div>
                        <div className="eachForm">
                        <select>
                            <option>Office/PDF</option>
                            <option>ЭЦП, крипто, токены</option>
                            <option>ОС Windows</option>
                            <option>1С</option>
                            <option>Прочее</option>
                        </select>
                        </div>
                        <div className="eachFormTextArea">
                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                        </div>
                        Прикрепление файла
                    </div>
                )
            case 'consultations':
                return(
                    <div className="subselect">
                        <div className="eachFormTextArea">
                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                        </div>
                        Прикрепление файла
                    </div>
                )
            case 'misc':
                return(
                    <div className="subselect">
                        <div className="eachForm">
                        <select>
                            <option>Интернет</option>
                            <option>Телефония</option>
                            <option>Видеонаблюдение</option>
                            <option>Переезд</option>
                            <option>Сервер</option>
                            <option>Прочее</option>
                        </select>
                    </div>
                        <div className="eachFormTextArea">
                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                        </div>
                        Прикрепление файла
                    </div>
                )
            case 'money':
                return(
                    <div className="subselect">
                        <div className="eachForm">
                        <select>
                            <option>Закупка или продление ПО</option>
                            <option>Закупка техники или комплектующих</option>
                            <option>Ремонт техники или комплектующих</option>
                            <option>Согласование документов</option>
                            <option>Хостинг или почта</option>
                        </select>
                        </div>
                        <div className="eachFormTextArea">
                            <TextareaAutosize minRows={3} maxRows={40}></TextareaAutosize>
                        </div>
                        Прикрепление файла
                    </div>
                )
            default:
                return null;
        }
    };

    return (
        <div className="page">
            <div className="header">
                <h3>Заявка в ITBot</h3>
            </div>
            <div className="container">
                <div className="eachForm">
                    Категория заявки
                    <select
                        name="category"
                        value={formState.category}
                        onChange={handleChange}
                    >
                        <option value="access">Предоставление доступов</option>
                        <option value="workplace">Рабочее место</option>
                        <option value="programs">Программы</option>
                        <option value="consultations">Консультация</option>
                        <option value="misc">Разное</option>
                        <option value="money">Оплата и закупка</option>
                    </select>
                </div>
                {renderSubcategory()}
                <div className="buttonsArea">
                <button className="button" type="button" id="btnBack" onClick={navigateBack}>
                    Назад
                </button>
                <button className="button" type="button" id="btnSend" onClick={undefined}>
                    Отправить
                </button>
                </div>
            </div>
        </div>
    );
};

export default Form2;