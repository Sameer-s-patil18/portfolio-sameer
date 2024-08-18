import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import {  motion } from "framer-motion";

const iconVariants = (duration)=>({
    initial:{y:-10} ,
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className = "my-20 text-center text-4xl ">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className = "flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFramerMotion className="text-7xl " />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <TiHtml5 className="text-7xl text-orange-300" />
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-300" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-600" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl " />
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaC className="text-7xl " />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl " />
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate = "animate"
            className = "rounded-2xl border-4 border-neutral-800 p-4">
                <DiPostgresql className="text-7xl text-blue-500 " />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies