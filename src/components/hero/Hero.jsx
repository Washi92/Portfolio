import "./hero.css";
import { motion } from "framer-motion";

const textVariants ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }

    }
}

const sliderVariants ={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
    initialUp:{
        x:"-700%",
    },
    animateUp:{
        x:0,
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
}

const Hero = ()=>{
    return(
        <div className="hero">
           <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants}
            initial="initial"
            animate="animate">
                    <motion.h2 variants={textVariants}>WASHINGTON AGUIRRE</motion.h2>
                    <motion.h1 variants={textVariants}>Back-End / Front-End Developer and UI Designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See my lates works</motion.button>
                        <motion.button variants={textVariants}>Contact me!</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""></motion.img>
                </motion.div>
           </div>

           <motion.div 
                className="slidingUpTextContainer" 
                variants={sliderVariants}
                initial="initialUp"
                animate="animateUp">
                Writer Content Creator Influencer
           </motion.div>

           <motion.div 
                className="slidingDownTextContainer" 
                variants={sliderVariants}
                initial="initial"
                animate="animate">
                Writer Content Creator Influencer
           </motion.div>

            <div className="imageContainer">
                <img src="/old_hero.png" alt=""></img>
            </div>
        </div>
    )
};

export default Hero;