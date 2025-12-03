import { color, easeInOut, motion } from "motion/react"
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { FaCss3 } from "react-icons/fa";
import ExpressJsIcon from "./assets/icons";
import { DiMongodb } from "react-icons/di";
import  {ReactJS}  from "./individualcards";


export default function Skills(){
    const[visible,setvisible]=useState(false);
    const [active, setActive] = useState("Frontend");



    const parts = [
     {skill:"Frontend",
    elements:[{text:"React",logo:FaReact,para:"Developed interactive, real-world React apps with authentication and e-commerce.",color:"#70B2B2",card:ReactJS}
            ,{text:"Html",logo:FaHtml5 ,para:"Built structured, accessible web pages with clean, semantic HTML markup.",color:"#D97D55"}
            ,{text:"Css",logo:FaCss3,para:"Designed responsive, visually appealing layouts with modern CSS techniques.",color:"#FAEAB1"}
            ,{text:"Tailwind",logo:RiTailwindCssFill ,para:"Styled dynamic, consistent UIs efficiently using Tailwind utility classes.",color:"#A3CCDA"}]
            ,text:""}


    ,{skill:"Backend",
        elements:[
            {text:"Node JS",logo:FaNodeJs ,para:"Developed scalable server-side applications using efficient Node.js architecture." , color:"#A8BBA3"},
            {text:"Express JS",logo:ExpressJsIcon ,para:"Built robut RESTful APIs and backend services with Express.js framework",color:""}]
            ,text:""}

    ,{skill:"Database",elements:[{text:"Mongo DB",logo:DiMongodb ,para:"Managed and queried NoSQL databases efficiently using MongoDB collections."},
      {text:"Firestore",logo:RxCross1 ,para:"Built scalable, real-time databases with Firebase Firestore integration."}
    ],text:""}
    ,{skill:"DevOPs",elements:[{text:"GitHub",logo:RxCross1,text:""}],para:""}
    ,{skill:"Currently Learning",text:""}
]


const cardVariants = {
  initial: {
    scale:1,
  },
  hover: {
    opacity:1,
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
    cursor:"pointer",
  },
  tap:{
    scale:1.03,
  }
};

const overlayVariants = {
  initial: {
    opacity:0,
    y: 20, 
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const popupcard = {
  initial:{

  },

  animate:{
    
  },
}


    
    return(
        <>
               

        <motion.div className="flex  flex-1  relative  w-[90vw] sm:w-full sm:h-[80vh] flex-col gap-5 p-3 ">


          
            
          
          {/*! /* //blog section */}

          <div className="absolute  h-50 w-50 -z-1 bg-red-400 rounded-[50%] filter:blur blur-[90px]">

          </div>

          <div className="  absolute h-50 w-50 bottom-10 sm:bottom-20 -z-1 bg-gradient-to-r from-[#84ffc9] via-[#aab2ff]  to-[#eca0ff] rounded-[50%] filter:blur blur-[90px]">

          </div>
          <div className="absolute sm:flex hidden h-50 w-50 right-50 top-50 sm:right-50 sm:top-50 -z-1 bg-gradient-to-r from-[#f492f0]   to-[#a18dce] rounded-[50%] filter:blur blur-[100px]">

          </div>
          <div className="absolute h-50 sm:flex hidden w-50 sm:bottom-10 sm:right-50 -z-1 bg-gradient-to-r from-[#30c5d2]   to-[#471069] rounded-[50%] filter:blur blur-[90px]">

          </div>
          <div className="absolute h-50 w-50 bottom-[35%] right-10 sm:top-90  sm:left-30 sm:left-150 -z-1 bg-gradient-to-r from-[#f4d941]   to-[#ec8235] rounded-[50%] filter:blur blur-[100px]">

          </div>




        {/* //blogsection */ }

      <motion.div className="flex relative w-[90vw] sm:w-full h-auto  flex-col gap-5">

            <h1 className="font-GeneralSans-Semibold text-start text-3xl  ">Skills</h1>


            {/* //!navbar */}

            <div className="flex    mx-auto sm:mx-0  font-GeneralSans-Regular flex-wrap gap-2 sm:gap-3 mt-5 bg-[#303030] p-3 rounded-md w-full sm:w-1/2 ">
                {
                    parts.map((item)=>(
                        <motion.div 
                        initial={{
                          backgroundColor:"white",
                        }}
                        
                        animate={{
                            backgroundColor:active===item.skill?"#494949":"",

                        }}
                        
                        
                        className="  p-2 flex px-3 relative rounded-md  items-center   ">


                        {/* //!navbar text */}
                        <h1 onClick={()=>{setActive(item.skill)}} className={`text-[14px] whitespace-nowrap hover:cursor-pointer tracking-wide`}>{item.skill}
                        </h1>   


                        {/* //**line div */ }
                        <motion.div 
                        
                        initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                        animate={{
                            opacity:active===item.skill?1:0,
                            scaleX:active===item.skill?1:0,
                        }}
                        transition={{
                            type: "easeInOut",
                            duration:0.8,
                        }}
                        
                        
                        className={`h-[2px] w-[60px] items-center justify-center bottom-1  bg-white  absolute `}></motion.div>
                        
                        
                        </motion.div>
                    ))
                }

            </div>


            <motion.div className="flex flex-row sm:w-[80vw] w-[] sm:h-[90vh] h-full  mt-6 overflow-visibl ">

                <motion.div className="flex flex-col sm:flex-row justify-center sm:h-[60vh]  w-[50vw]   flex-   sm:p-5 b gap-5 flex-1">
                {parts.map((item)=>(active===item.skill?(
                    item.elements.map(({ text, logo: Logo, para ,color, card : Card },index)=>(
                        
                      <>
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                           

                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"

                            //card-div
                            className={`flex p-4 flex-col bg- flex-col  justify-center flex-wrap relative h-full shadow-xl gap-4 sm:p-4  rounded-md `}>
                            
                            <div className="relative h-[3rem] sm:h-[4rem] w-full">
                              <Logo
                                style={{ color }}
                                className="absolute top-0 left-0 h-[2.5rem] w-[2.5rem] sm:h-[3.25rem] sm:w-[3.25rem] rounded-md shadow-xl bg-black sm:p-2 p-1"
                              />
                            </div>
                                                    
                          <div className="flex flex-1 text-3xl font-GeneralSans-Semibold ">
                            {text}
                            </div>

                            <div className="flex flex-2 text-md text-start font-GeneralSans-Medium ">
                              {para}
                            </div>
                            <div className="flex  ">
                              <button onClick={()=>(setvisible(true))} className="p-2 border-1 bg-[#303030] rounded-[0.5rem] font-GeneralSans-Regular">Click for More</button>
                            </div>

                          
                        </motion.div>

                          {Card &&  visible &&(

                                  <motion.div onClick={()=>setvisible(false)} className=" w-100vw fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                    <motion.div
                                    inherit={false}
                                    onClick={(e) => e.stopPropagation()}
                                    
                                    className="overflow-hidden rounded-xl  place-item-center absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  fixed  z-20 h-[60vh]  w-[80vw] sm:w-[25vw]">
                                      <Card />
                                    </motion.div>
                                  </motion.div>
                              )}

                        </>
                              
                       
                        
                    ))
                )
                    
                    
                    
                    :""))}
                    
                </motion.div>


            </motion.div>

            </motion.div>

        </motion.div>
   
        </>
    )
}