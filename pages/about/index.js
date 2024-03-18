import React, { useState } from "react";
import { motion, px } from "framer-motion";
import { fadeIn } from "../../variants";
// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Web Development",
                icons: [
                    <FaHtml5 key={""} />,
                    <FaCss3 key={""} />,
                    <FaJs key={""} />,
                    <FaReact key={""} />,
                    <SiNextdotjs key={""} />,
                    <SiFramer key={""} />,
                    <SiTailwindcss key={""} />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [<FaFigma key={""} />, <SiAdobephotoshop key={""} />],
            },
        ],
    },

    {
        title: "experience",
        info: [
            {
                title: "Frontend Developer - Self-employed",
                stage: "2023 - 2024",
            },
            {
                title: "Map Developer, Marketing manager - Self-employed",
                stage: "2022 - 2023",
            },
            {
                title: "Transport planner - Folting Globe Kft.",
                stage: "2021 - 2022",
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Logistics engineer - Neumann János Egyetem, Kecskemét",
                stage: "2023",
            },
            {
                title: "Logistics clerk - Babits Mihály Gimnázium, Pécs",
                stage: "2019",
            },
            {
                title: "Graduate - Babits Mihály Gimnázium, Pécs",
                stage: "2018",
            },
        ],
    },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
    const [index, setIndex] = useState(0);
    console.log(index);
    return (
        <div className="h-full bg-primary/30 md:py-40 text-center xl:text-left max-sm:w-fit max-sm:pt-[100px]">
            <Circles />
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full h-full max-w-[737px] max-h-[678px] absolute -left-[370px] lg:bottom-0 lg:right-[8%]"
            >
                <Avatar />
            </motion.div>

            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 max-sm:pb-80">
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 max-sm:text-[24px] max-sm:mb-[16px]"
                    >
                        Captivating <span className="text-accent">stories</span>{" "}
                        birth magnificent designs.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 max-sm:mb-[16px]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras vel.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 items-center justify-center max-sm:mb-[16px]"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <div>1</div>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of experience
                                </div>
                            </div>
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <div>1</div>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                                    Satisfied clients
                                </div>
                            </div>
                            <div className="relative flex-1 ">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <div>1</div>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Finished projects
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px] sm:mb-100"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx:auto xl:mx-0 mb-4 max-xl:justify-center items-center">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${
                                        index === itemIndex &&
                                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                    }, cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start max-sm:text-[14px]">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                >
                                    <div className="font-light mb-2 md:mb-0">
                                        {item.title}
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>
                                    <div className="flex gap-x-4">
                                        {item.icons?.map((icon, itemIndex) => {
                                            return (
                                                <div
                                                    key={itemIndex}
                                                    className="text-2xl text-white"
                                                >
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
