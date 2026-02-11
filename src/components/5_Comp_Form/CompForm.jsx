import { useState } from "react"
import { useForm } from "react-hook-form";

import style from "./CompForm.module.css"



export const CompForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: 'John',
            email: 'contact@gmail.com',
            message: 'Project inquiry...'
        }
    });

    return (
        <div className={style.box}>
        <div className={`flex flex-col gap-16 ${style.container}`}>
            <h2 className={style.header}>Let's Work Together!</h2>
            <div className="flex flex-col gap-8">
                <label htmlFor="name">Name*:</label>
                <input id="name" type="text"
                    {...register("name")} />
            </div>

            <div className="flex flex-col gap-8">
                <label htmlFor="email">Email*:</label>
                <input id="email" type="text"
                    {...register("email")} />
            </div>

            <div className="flex flex-col gap-8">
                <label htmlFor="message">Message:</label>
                <textarea
                    className={style.inputText}
                    id="message"
                    {...register("message")}
                />
            </div>
            <button className={style.buttonSubmit}>Send a message</button>
        </div>
        </div>
    )
}