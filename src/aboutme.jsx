import { motion } from "motion/react"
import { Sidenav } from "./sidenav"
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import '../src/styles/aboutme.css'
const tech =[
    {Icon:FaHtml5 , text: "Frontend Development",paragraph:"Crafting sleek, responsive, and user-friendly interfaces using React, Tailwind CSS, and modern UI frameworks."},
    {Icon:FaNodeJs  , text: "Backend Development",paragraph:"Building scalable server-side applications with Node.js and Express.js, ensuring secure and efficient performance."},
    {Icon:GoProjectSymlink , text:"Full Stack Projects",paragraph:"Developing end-to-end solutions, integrating frontend with backend APIs, and managing data flow seamlessly."},
    {Icon:BsGraphUpArrow , text:"Learning & Growth",paragraph:"Currently exploring Firebase integration and advancing skills in UI/UX design to deliver complete web solutions."}];

export const Aboutme =()=>{
   
    return(
            <motion.div className="  relative  p-3 flex flex-row h-full w-full  mt-5 bg-black-400  " 
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:1}}
        >


            {/* //!blog */}

            <motion.div className="absolute h-60 w-60  rounded-[50%] top-30 right-5 bg-[#4E56C0] -z-1 blur-[50px]"
             animate={{
            x: [-200, -100, 0, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}>

            </motion.div>

                <div className="absolute h-60 w-60 bg-[#9B5DE0] rounded-[50%] top-30 right-40 -z-1 blur-[50px]">

                </div>

             <div className="absolute h-60 w-60 bg-[#D78FEE] rounded-[50%] top-30 right-90 -z-1 blur-[100px]">

            </div>

            <motion.div className="bg-[#4FB7B3] absolute h-40 w-40 top-140 blur-[100px] -z-1"
            animate={{
            x: [0, 200, 50, 0],
            y: [0, -200, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}>

            </motion.div>







            <div className="flex flex-col w-full gap-3 ">
                    <h1 className="font-GeneralSans-Semibold text-start text-3xl flex-3 ">About Me</h1>

                <div className="flex flex col gap-3 text-left align-center">
                <h2 className="font-GeneralSans-Regular text-start text-xl my-5">I'm </h2>
                    <h2 className="font-GeneralSans-Medium text-start text-2xl my-4 ">Subhrodeep Choudhury</h2>
                    <h2 className="font-GeneralSans-Regular text-start text-xl my-5">, Full Stack Developer</h2>
                </div>

                <h2 className="text-left font-GeneralSans-Regular text-[18px] py-4">
                    I started my web development journey in college by experimenting with small React projects.<br></br>
                    Over time, I grew passionate about creating sleek UIs and optimizing user experiences.
                    
                    
                </h2>

                <div id="textdiv" className=" shadow-xl  relative  w-full p-2 flex flex-col  backdrop-blur-3xl gap-3  sm:h-100 shadow-md rounded-lg  shadow-white-500/50 mt-9" >
                     <h1 className="text-left text-3xl font-GeneralSans-Medium mb-5">What i do?</h1>

                    <div className="flex gap-4  sm:flex-row flex-col mt-5 w-full hover:cursor-pointer  ">
                     {tech.map(({text:text,Icon:Icon,paragraph:paragraph})=>(

                         <div className="flex flex-1 items-start  p-2 flex-row   h-full shadow-sm  rounded-md  gap-3 ">
                        <div className="flex items-start mt-3 ml-2"><Icon className="h-full w-7 hover:cursor-pointer"/></div>
                        
                        <div className="justify-start text-left gap-4  flex flex-col p-3">
                            <h1 className="flex  text-left text-md font-GeneralSans-semiBold  tracking-wide hover:cursor-pointer">{text}</h1>
                            <h2 className="text-[14px] font-GeneralSans-Regular tracking-wide">{paragraph}</h2>
                        
                        </div>
                         </div>


                     ))}

                     <motion.div className="absolute h-60 w-60  rounded-[50%] bottom-30 right-5 bg-[#4E56C0] -z-1 blur-[200px]"
                      animate={{
                      // x: [-200, -100, 0, 0],
                      // y: [0, 2000, 80, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}>
                                
                     </motion.div>

                     </div>


                </div>

                <div>
                    
                </div>


                </div>

               
                
                
                

            


                    
             </motion.div>
    )
}