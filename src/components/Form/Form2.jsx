import './form.css';

const Form2 = () =>{
    return (
        <div className={"form"}>
            <h3>Категория заявки</h3>
            <select>
                <option>Предоставление доступов</option>
                <option>Рабочее место</option>
                <option>Программы</option>
                <option>Консультация</option>
                <option>Разное</option>
                <option>Оплата и закупка</option>
            </select>
            <button type='button' id="btnSend">
                Отправить
            </button>
        </div>
    );
};

export default Form2;