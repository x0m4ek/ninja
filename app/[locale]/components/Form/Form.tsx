'use client'
import React, { useState } from 'react'
import styles from "./Form.module.scss";
import BorderedButton from '../BorderedButton/BorderedButton';
import useFormattedTranslation from '../../utils/hooks/useFormattedTranslation';

function Form() {
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const {t,rich} = useFormattedTranslation('footer');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Тут ви можете додати логіку для сабміту, наприклад відправити форму на сервер
        console.log("Submitted: ", { name, number });
    };

    return (
        <>
            <div className={styles.form}>
                <h3>{rich('form_title')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            required
                            placeholder={t('form_input_1')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="tel"
                            required
                            placeholder={t('form_input_2')}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className={styles.button}>
                        <BorderedButton
                            text={t('form_button')}
                            onClick={() => handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
