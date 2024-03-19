import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
    return (
        <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-green-400 justify-center items-center cursor-default text-center"
        >
            Your message has been successfully sent.
        </motion.p>
    );
};

export const Contact = () => {
    const [result, showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_734nyii", "template_t8uok0c", form.current, {
                publicKey: "xtck8bH5eNAwOG5ta",
            })
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showResult(true);
    };

    return (
        <div className="h-full bg-primary/30">
            <div className="continer mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full max-sm:w-[90%]">
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-12 max-sm:mb-6"
                    >
                        Let&apos;s <span className="text-accent">connect.</span>
                    </motion.h2>
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex-1 flex flex-col gap-6 w-full mx-auto"
                    >
                        <div className="flex gap-x-6 w-full">
                            <input
                                type="text"
                                placeholder="name"
                                className="input"
                                name="name"
                            />
                            <input
                                type="text"
                                placeholder="email"
                                className="input lowercase"
                                name="email"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="subject"
                            className="input normal-case"
                            name="subject"
                        />
                        <textarea
                            placeholder="message"
                            className="textarea normal-case"
                            name="message"
                        ></textarea>
                        <button
                            type="submit"
                            value="Send"
                            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                        >
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Let&apos;s talk
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                        <div className="row">{result ? <Result /> : null}</div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
