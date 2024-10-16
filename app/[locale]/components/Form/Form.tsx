'use client'
import React, { useState } from 'react'
import styles from "./Form.module.scss";
import BorderedButton from '../BorderedButton/BorderedButton';

function Form() {
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Тут ви можете додати логіку для сабміту, наприклад відправити форму на сервер
        console.log("Submitted: ", { name, number });
    };

    return (
        <>
            <div className={styles.form}>
                <h3>Залиште свої дані,<br /> ми передзвонимо:</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            required
                            placeholder='Ваше ім’я:'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="tel"
                            required
                            placeholder='Ваш телефон:'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className={styles.button}>
                        <BorderedButton
                            text='Відправити'
                            onClick={() => handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
