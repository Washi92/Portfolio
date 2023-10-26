import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {id:1,
    title:"Blog React",
    img:"https://i.ytimg.com/vi/tlTdbc5byAs/maxresdefault.jpg",
    desc:"How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.",
   } ,
   {id:1,
    title:"Ecomerce React",
    img:"https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0CS9DSM.png?v=3.0.0",
    desc:"How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.",
   } ,
   {id:1,
    title:"Finance App",
    img:"https://adminlte.io/wp-content/uploads/2021/06/react-examples.jpeg",
    desc:"How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.",
   } ,
   {id:1,
    title:"Python Web Scapring",
    img:"https://gologin.com/wp-content/uploads/Frame-69-2-1.png",
    desc:"How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.",
   },
]

const Single = ({item}) => {

    const ref = useRef();
    const {scrollYProgress}= useScroll({
        target:ref,
        //offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300,300],);


    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = ()=>{

    const ref = useRef();

    const {scrollYProgress}= useScroll({
        target:ref, 
        offset:["end end", "start start"]});

    const scaleX= useSpring(scrollYProgress, {
        stiffness: 100,
        damping:30,
    });
    
    return(
        <div className="portfolio">
            <div className="progress" >
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(i=>(
                <Single item={i} key={i.id}/>
            ))}           
        </div>
    )
};

export default Portfolio;