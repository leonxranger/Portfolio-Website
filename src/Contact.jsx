import { motion } from "motion/react"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import background from "./assets/background.jpeg"
  
export const Contact = () =>{

  const form = useRef();

  //email js function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a6bx0ac', 'template_mvdzmqj', form.current, 'qKQxi54iihDjKkDrr')
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Message Sent Successfully');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Message Failed to Send');

        },
      );
  };

    return(
        <>

        

        {/* //blog */}
        
        <motion.div className="flex flex-1 flex-col-reverse sm:flex-row  relative  h-[90vh] rounded-xl ">
            <div style={{opacity:0.5}} className="absolute  h-50 w-50 -z-1 bg-red-400 rounded-[50%] filter:blur blur-[120px]">

          </div>

          <div style={{opacity:0.5}} className="  absolute h-50 w-50 bottom-10 sm:bottom-20 -z-1 bg-gradient-to-r from-[#84ffc9] via-[#aab2ff]  to-[#eca0ff] rounded-[50%] filter:blur blur-[90px]">

          </div>
          <div style={{opacity:0.5}} className="absolute sm:flex hidden h-50 w-50 right-50 top-50 sm:right-50 sm:top-50 -z-1 bg-gradient-to-r from-[#f492f0]   to-[#a18dce] rounded-[50%] filter:blur blur-[100px]">

          </div>
          <div  style={{opacity:0.5}} className="absolute h-50 sm:flex hidden w-50 sm:bottom-10 sm:right-50 -z-1 bg-gradient-to-r from-[#30c5d2]   to-[#471069] rounded-[50%] filter:blur blur-[90px]">

          </div>
          <div style={{opacity:0.5}} className="absolute h-50 w-50 bottom-[35%] right-10 sm:top-90  sm:left-30 sm:left-150 -z-1 bg-gradient-to-r from-[#f4d941]   to-[#ec8235] rounded-[50%] filter:blur blur-[100px]">

          </div>



            <div className="h-3/4 w-full absolute z-10">
            <motion.img 

            // Start invisible
        initial={{ opacity: 0 }}
        
        // Animate to 20% opacity when in view
        whileInView={{ opacity: 0.2}}
        
        // Animation settings
        transition={{ duration: 3, ease: 'easeOut' }}
        
        // Viewport settings:
        once: true

            style={{
                backgroundSize:"cover",
            }}
            src={background}
            className="absolute  w-full h-full object-cover object-center  z-0"></motion.img>

            </div>
            
            {/* //left-side content */}


            <div  className="flex  flex-col z-10 flex-2      ">

                {/* contact */}
                <div className="flex flex-2  items-end p-5">
                    
                    <h1 className="font-GeneralSans-Semibold text-start text-4xl">Contact Us</h1>
                    
                </div>

                {/* address contact */}
                <div className="flex flex-1 flex-row  bg-[#191919] font-GeneralSans-Regular ">

                    <div className="flex flex-1 p-10 flex-col gap-4">
                        <h1 className="text-md font-GeneralSans-Regular text-start">My Address:</h1>
                        <h1 className="text-start">Patia <br></br> Bhubaneswar , Odisha</h1>
                    </div>

                    <div className="flex flex-1 p-10 flex-col text-start gap-4 ">

                        <h1>My Contact:</h1>

                        <h1>subhrodeepchoudhury12@gmail.com <br></br> (+91) 9641734660 </h1>


                    </div>


                </div>

            


            

            </div>


            {/* right side content */}

            <div  className="flex z-10 flex-1 flex-col ">

                {/* //right div form part */}

            <div className=" flex-3 border-1 relative flex px-3 pb-2 justify-center ">

                  <div className="absolute bottom-0 left-0 w-full h-[48px] border-1 hidden md:flex bg-[#191919]"></div>


                <div className="h-full absolute w-[90%]  rounded-b-md relative  bg-white  place-items-center p-5 justify-center">
                    <form  ref={form} onSubmit={sendEmail} className="flex gap-10 flex-col place-items-center   justify-center w-full">
                        <h1 className="font-GeneralSans-Medium text-md text-black tracking-wide text-start p-4">Feedback Form</h1>

                        {/* //name email phone message */}

                        <input 
                        type="text"
                        placeholder="Name" 
                        required
                        name="name"   
                        className="h-[35px] rounded-md focus:outline-none focus:ring-0 p-3 w-3/4 border-1 border-black text-black placeholder:Email"></input>
                        <input 
                        type="email"
                        required
                        name="email"
                        placeholder="Email"    
                        className="h-[35px]  rounded-md focus:outline-none focus:ring-0 p-3 w-3/4 border-1 border-black text-black placeholder:Email"></input>
                        <input 
                        type="number"
                        required
                        name="phone"
                        placeholder="Phone"    
                        className="h-[35px]  rounded-md focus:outline-none focus:ring-0 p-3 w-3/4 border-1 border-black text-black placeholder:Email"></input>
                        <input 
                        type="text"
                        required
                        name="message"
                        placeholder="Message"    
                        className="h-[35px]  rounded-md focus:outline-none focus:ring-0 p-3 w-3/4 border-1 border-black text-black placeholder:Email"></input>

                      
                      <label className="flex items-center md:border-0 border-1 justify-center gap-2 self-start hover:ring-1 hover:cursor-pointer h-[45px] md:w-auto sm:w-auto p-3 rounded-md text-black font-GeneralSans-Medium">
                        <FaCloudUploadAlt className="h-5 w-5" />
                        <span>Upload File</span>
                        <input 
                          type="file" 
                          name="file"
                          className="hidden"
                        />
                      </label>
                        

                        <button type="submit" className="  text-sm absolute p-2 hover:cursor-pointer h-[10%] w-[40%] bottom-5 sm:bottom-20   right-0  text-white font-GeneralSans-Regular items-center justify-center bg-black rounded-l-sm place-self-end"><h1 >Send Message--</h1></button>
                    </form>

                </div>

            </div>


            <div className=" flex-1 hidden md:flex border-1 flex bg-[#191919] items-center  ">


                <div className="flex flex-row flex-1">
                <FaInstagram className="flex h-8 flex-1 "/>
                <FaLinkedin  className="flex h-8 flex-1" />
                
                <FaXTwitter className="flex h-8 flex-1" />


                </div>

                <div className="flex flex-1">

                </div>

                


            </div>


            

            </div>


           

        
        

        </motion.div>
            
        </>
    )
}