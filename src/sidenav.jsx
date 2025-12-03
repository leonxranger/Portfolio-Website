//**sidenavbar file */
import { IoMdPerson } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { spring, useScroll } from "motion/react";
import { useSpring } from "motion/react";
import { motion } from "motion/react";


const navelement = [
   {id:1,item:"home",element: IoMdHome  } ,
   {id:2, item:"about",element: IoMdPerson  } ,
   {id:3,item:"projects",element: FaCode } ,
   {id:4, item:"contact" ,element: MdPermContactCalendar },
];




export const Sidenav =(props)=>{
     const { scrollYProgress } = useScroll();
  // smoothen the animation
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
   
    return(
        <>
        <div className="align-center relative p-4 justify-center flex ">
            <div className="flex absolute  h-[70vh] w-[2px]  bg-white z-0 "></div>

               <motion.div
                className={`absolute origin-top w-[2px]  bg-orange-500 z-10`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.3 }}
                style={{ height:'70vh' , scaleY:scrollYProgress }}
               
                 />    

            <div className="flex flex-col gap-25 z-10 justify-center">

            {
                navelement.map(({id,item,element:Icon})=>(
                    <Icon key={id} className="h-10 mt-2 bg-black shadow-xl hover:cursor-pointer w-10 rounded-2xl p-2   z-10"/>
                ))
            }

            </div>

        </div>
        </>

    )
}