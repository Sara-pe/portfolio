import { useState } from "react"
import { useForm } from "react-hook-form";

import style from "./CompForm.module.css"

import iconClose from "../../assets/close.svg"

export const CompForm = (props) => {

    const { onClose } = props;
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
    });
        const [sending, setSending] = useState(false);

        const onSubmit = async (data) => {
            setSending(true);

            try {
                const response = await fetch("https://formspree.io/f/xwvnlern", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert("Message sent!");
                    reset(); 
                } else {
                    alert("Oops! Something went wrong.");
                }
            } catch (error) {
                console.log(error);
                alert("Oops! Something went wrong.");
            }

            setSending(false);
        };

        return (

            <div className={style.modalBackground}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.modal}>
                  <button onClick={() => { onClose() }}><img className={style.close} src={iconClose} alt="Close" /></button> 
                     <div className={`flex flex-col gap-16 ${style.container}`}>
               
                    <h2 className={style.header}>Let's Work Together!</h2>
                    <div className="flex flex-col gap-8">
                        <label htmlFor="name">Name*:</label>
                        <input id="name" type="text" placeholder="John"
                            {...register("name", { required: true })} />

                        {
                            errors['name']?.type === 'required' &&
                            <span>This field is required</span>
                        }
                    </div>

                    <div className="flex flex-col gap-8">
                        <label htmlFor="email">Email*:</label>
                        <input id="email" type="text" placeholder="contact@gmail.com"
                            {...register("email", {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            })} />
                        {
                            errors['email']?.type === 'required' &&
                            <span>This field is required</span>
                        }

                        {
                            errors['email']?.type === 'pattern' &&
                            <span>Please enter a valid email address</span>
                        }
                    </div>

                    <div className="flex flex-col gap-8">
                        <label htmlFor="message">Message*:</label>
                        <textarea
                            className={style.inputText}
                            id="message" placeholder="Please write your inquiry..."
                            {...register("message", { required: true })} />
                        {
                            errors['message']?.type === 'required' &&
                            <span>This field is required</span>
                        }

                    </div>
                    <button className={style.buttonSubmit}>Send a message</button>
                </div>
            </form>
             </div>
        )
    }