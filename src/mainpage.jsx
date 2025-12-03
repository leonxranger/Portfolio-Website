import { FaSuitcase } from "react-icons/fa6";
import './mainpage.css'
import Profilephoto from "./assets/profile-photo.jpeg"
import { motion } from "motion/react"
import { useState ,useEffect} from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import Skills from "./skills";
import { Link } from "react-scroll";
import { Sidenav } from "./sidenav";
import { Aboutme } from "./aboutme";
import { Contact } from "./Contact";
export default function Mainpage(){

   

    return(
        <>

        <div className="w-90 sm:w-full  h-auto ">

        <motion.div  className={`absolute h-50 w-50 blur-3xl bg-[#FE7743] -z-[1] top-50 right-[0]`}
         style={{borderTopLeftRadius:'50%',borderBottomLeftRadius:'50%'}}
          animate={{
            x: [-200, -100, 0, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          >

        </motion.div>
        <motion.div className="absolute h-50 w-50 blur-3xl bg-[#FE7743] z-[-1] top-150 left-[0] " style={{borderTopLeftRadius:'50%',borderBottomLeftRadius:'50%'}}>

        </motion.div>


        <motion.div className="flex flex-col  w-full   " style={{height:'500vh'}}  
        >


            {/* //navbar header */}
            <div className="flex  md:w-full flex-row items-center  mt-2 p-2 md:p-0">
                <div className="lg:flex-1 md:flex w-full hidden  ">

                </div>
                <div className="mt-3 flex flex-1 w-full flex-row justify-between w-full font-GeneralSans-Medium hover:cursor-pointer gap-2">
                    {[
                    {element:"Home",navigate:""},
                    {element:"About",navigate:"Aboutme"},
                    {element:"Projects",navigate:"Skills"},
                    {element:"Contact",navigate:"Contact"},
                    
                    ].map((item,i)=>(   
                        <>
                        <div>
                        <h1 className="hover:cursor-pointer "  id="nav-element"><Link smooth spy to={item.navigate}>{item.element}</Link></h1>
                        </div>
                        
                        </>
                        
                    ))}

                </div>
            </div>
            {/* //navbar header */}

    

            <motion.div className="flex flex-1 w-80 md:w-full h-[2000px]  justify-center flex-col-reverse md:flex-row "
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>

                <div className="flex flex-col   flex-1 p-7 gap-3">
                    <div className="mt-10 hidden md:flex">
                        <FaSuitcase className="h-10 w-10"/>
                    </div>
                    <div>
                        <h1 className="font-GeneralSans-Semibold text-4xl text-start mt-20 text-center md:text-start">Subhrodeep Choudhury</h1>
                    </div>

                    <h2 className="font-GeneralSans-Semibold text-2xl text-start mt-10">
                        Full Stack Developer
                        
                    </h2>

                    <h2 className="font-GeneralSans-Medium text-md md:text-xl text-start mt-10 ">
                        Design That Speaks. Code That Works.
                    </h2>

                    <h2 className="font-GeneralSans-Medium text-md md:text-xl text-start  ">
                        Blending creativity with technology to build intuitive and beautiful digital products.
                    </h2>

                    <div className="mt-10 flex flex-row gap-10">

                    <button id="button1" className="shadow-md shadow-[#686D76] bg-[#393636] h-12 w-40 rounded-xl align-center justify-center  ">Get Started</button>
                    <button id="button1" className="shadow-md shadow-[#686D76] bg-[#f8f8f8] h-12 w-40 rounded-xl align-center justify-center text-black ">Download Resume</button>


                    </div>
                </div>

                <div className=" flex lg:flex-1 justify-center  w-full ">
                    <img
                    src={Profilephoto}
                    alt="Profile picture"
                    className="
                        h-40 w-40 rounded-full object-cover           
                        mx-auto mt-20                                 
                        md:h-80 md:w-80 md:my-32                      
                    "
                    />
                </div>


               
                
            </motion.div>

            <div className="md:fixed hidden md:flex md:right-3  top-10 flex-2  p-5 mt-10">
               <Sidenav viewlength={500}/>

            </div>



            <motion.div className="flex flex-col gap-[30vh] ">

            <section id="Aboutme" className="m-0 p-0 w-full flex  flex-row flex-1">
            <Aboutme className="flex"/>
            
            </section>


            <section id="Skills">
                    <Skills/>

            </section>

            <section id="Contact" className="rounded-xl overflow-hidden">
                <Contact/>

            </section>

            </motion.div>

            

               

        </motion.div>
        </div>
        </>
    )

}