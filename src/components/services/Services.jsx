import { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = ()=>{

    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"});

    return(
        <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        ref={ref}
        whileInView={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br/>and move forward
                </p>
                <hr/>
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>

                <div className="title">                
                    <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>
                    Create a professional and user-friendly website, establishing a strong 
                    online presence for the business. This presence serves as a virtual 
                    storefront, allowing customers to find the company easily and access 
                    information about its products or services.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>User Experience</h2>
                    <p>
                    Ensure an enhanced user experience, making it easier for visitors to navigate the site, find what they need, and engage with the brand. This can lead to increased customer satisfaction and improved conversion rates.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Customized Solutions</h2>
                    <p>
                    Provide tailored solutions that cater to the specific requirements of the business, such as e-commerce integration, content management systems, or customer relationship management tools. These customized solutions can streamline business operations and improve overall efficiency.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Digital Marketing</h2>
                    <p>
                    Expertise in integrating digital marketing strategies into the website, such as search engine optimization (SEO), social media integration, and content marketing. These efforts can significantly improve the business's online visibility, leading to increased traffic and potential leads.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Services;