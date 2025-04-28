import React, { useState } from 'react';
import './form.css';
import {Checkbox, TextareaAutosize, TextField} from "@mui/material";

const Form2 = () => {
    const [selectedCategory, setSelectedCategory] = useState('access');
    const [selectedSubCategoryAccess, setSelectedSubCategoryAccess] = useState('userpage');
    const [selectedSubCategoryWorkplace, setSelectedSubCategoryWorkplace] = useState('computer');
    const [selectedSubCategoryPrograms, setSelectedSubCategoryPrograms] = useState('');
    const [selectedSubCategoryConsultations, setSelectedSubCategoryConsultations] = useState('');
    const [selectedSubCategoryEtCetera, setSelectedSubCategoryEtCetera] = useState('');
    const [selectedSubCategoryMoney, setSelectedSubCategoryMoney] = useState('');
    const [selectedMailCategory, setSelectedMailCategory] = useState('creation');

    const handleMailCategoryChange = (event) => {
        setSelectedMailCategory(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleSubCategoryChangeAccess = (event) => {
        setSelectedSubCategoryAccess(event.target.value);
    };
    const handleSubCategoryChangeWorkplace = (event) => {
        setSelectedSubCategoryWorkplace(event.target.value);
    };
    const handleSubCategoryChangePrograms = (event) => {
        setSelectedSubCategoryPrograms(event.target.value);
    };
    const handleSubCategoryChangeConsultations = (event) => {
        setSelectedSubCategoryConsultations(event.target.value);
    };
    const handleSubCategoryChangeEtCetera = (event) => {
        setSelectedSubCategoryEtCetera(event.target.value);
    };
    const handleSubCategoryChangeMoney = (event) => {
        setSelectedSubCategoryMoney(event.target.value);
    };

    return (
        <div className="page">
            <div className="header">
            <h3>Категория заявки</h3>
            </div>
        <div className="container">
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="access">Предоставление доступов</option>
                <option value="workplace">Рабочее место</option>
                <option value="programs">Программы</option>
                <option value="consultation">Консультация</option>
                <option value="misc">Разное</option>
                <option value="money">Оплата и закупка</option>
            </select>


            {selectedCategory === 'access' && (
                <div className="subselect">
                    <select value={selectedSubCategoryAccess} onChange={handleSubCategoryChangeAccess}>
                        <option value="userpage">Создание учётной записи</option>
                        <option value="VPN">Создание VPN</option>
                        <option value="matrix">Матрица доступов</option>
                    </select>
                </div>
            )}
            {selectedCategory === 'access' && selectedSubCategoryAccess === 'userpage' && (
                <div className="subselect">
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}
            {selectedCategory ==='access' && selectedSubCategoryAccess === 'VPN' && (
                <div className="subselect">
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}
            {selectedCategory ==='access' && selectedSubCategoryAccess === 'matrix' && (
                <div className="subselect">
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                Прикрепление файла
                </div>
            )}


            {selectedCategory === 'workplace' && (
                <div className="subselect">
                    {selectedCategory ==='workplace' && (
                        <div className="subselect">
                            <Checkbox value='checkbox'></Checkbox>
                            <select value={selectedSubCategoryWorkplace} onChange={handleSubCategoryChangeWorkplace}>
                                <option value="computer">Компьютер</option>
                                <option value="remote">Удалёнка</option>
                                <option value="mail">Почта</option>
                                <option value="printer">Принтер</option>
                                <option value="scanner">Сканер</option>
                                <option value="phone">Телефон</option>
                                <option value="misc">Прочее</option>
                            </select>
                            {selectedSubCategoryWorkplace === 'computer' && (
                                <div className="subselect">
                                    <TextField></TextField>
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'remote' && (
                                <div className="subselect">
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'mail' && (
                                <div className="subselect">
                                    <select value={selectedMailCategory} onChange={handleMailCategoryChange}>
                                        <option value="creation">Создание почтового ящика</option>
                                        <option value="notBeingSent">Не отправляются письма</option>
                                        <option value="setting">Настройка рабочих программ</option>
                                        <option value="misc">Другое</option>
                                    </select>
                                    {selectedMailCategory === 'creation' && (
                                        <div className="subselect">
                                            <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                            Прикрепление файла
                                        </div>
                                    )}
                                    {selectedMailCategory === 'notBeingSent' && (
                                        <div className="subselect">
                                            <TextField></TextField>
                                            <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                            Прикрепление файла
                                        </div>
                                    )}
                                    {selectedMailCategory === 'setting' && (
                                        <div className="subselect">
                                            <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                            Прикрепление файла
                                        </div>
                                    )}
                                    {selectedMailCategory === 'misc' && (
                                        <div className="subselect">
                                            <TextField></TextField>
                                            <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                            Прикрепление файла
                                        </div>
                                    )}
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'printer' && (
                                <div className="subselect">
                                    <TextField></TextField>
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'scanner' && (
                                <div className="subselect">
                                    <TextField></TextField>
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'phone' && (
                                <div className="subselect">
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                            {selectedSubCategoryWorkplace === 'misc' && (
                                <div className="subselect">
                                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                                    Прикрепление файла
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}


            {selectedCategory === 'programs' && (
                <div className="subselect">
                    <Checkbox value='checkbox'></Checkbox>
                    <select>
                        <option>Office/PDF</option>
                        <option>ЭЦП, крипто, токены</option>
                        <option>ОС Windows</option>
                        <option>1С</option>
                        <option>Прочее</option>
                    </select>
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}


            {selectedCategory === 'consultation' && (
                <div className="subselect">
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}


            {selectedCategory === 'misc' && (
                <div className="subselect">
                    <select>
                        <option>Интернет</option>
                        <option>Телефония</option>
                        <option>Видеонаблюдение</option>
                        <option>Переезд</option>
                        <option>Сервер</option>
                        <option>Прочее</option>
                    </select>
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}
            {selectedCategory === 'money' && (
                <div className="subselect">
                    <select>
                        <option>Закупка или продление ПО</option>
                        <option>Закупка техники или комплектующих</option>
                        <option>Ремонт техники или комплектующих</option>
                        <option>Согласование документов</option>
                        <option>Хостинг или почта</option>
                    </select>
                    <TextareaAutosize minRows={2} maxRows={20}></TextareaAutosize>
                    Прикрепление файла
                </div>
            )}

            <button className="button" type="button" id="btnSend" onClick={undefined}>
                Отправить
            </button>
        </div>
        </div>
    );
};

export default Form2;
