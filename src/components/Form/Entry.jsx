import './form.css';
import React, {useEffect, useState} from "react";

const Entry=()=>{
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const sendInitData = async () => {
            setLoading(true);
            setError(null);
            if (window.Telegram && window.Telegram.WebApp) {
                const webApp = window.Telegram.WebApp;
                const initData = webApp.initDataUnsafe || webApp.initData;

                if (initData) {
                    try {
                        const response = await fetch('/verify-init-data', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(initData)
                        });

                        if (!response.ok) {
                            const errorData = await response.json();
                            throw new Error(errorData.error || `Ошибка при отправке данных: ${response.status}`);
                        }

                        const data = await response.json();
                        if (data.success) {
                            setUserId(data.userId);
                        } else {
                            setError(data.error || 'Ошибка верификации на сервере.');
                            console.error("Ошибка верификации на сервере:", data);
                        }

                    } catch (err) {
                        setError(err.message || 'Неизвестная ошибка при отправке данных.');
                        console.error("Ошибка при отправке данных:", err);
                    } finally {
                        setLoading(false);
                    }
                } else {
                    setError("initData не найден.");
                    console.warn("initData не найден.");
                    setLoading(false);
                }
            } else {
                setError("Telegram Web Apps API не доступен.");
                console.warn("Telegram Web Apps API не доступен.");
                setLoading(false);
            }
        };

        sendInitData();
    }, []);

    return (
        <div>
            <h1>Форма регистрации</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            {userId ? (
                <p>Ваш Telegram UserId: {userId}</p>
            ) : (
                <p>UserId не найден.</p>
            )}
        </div>
    );
}

export default Entry;
