import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // Replace with your Web3Forms access key
    formData.append("access_key", "48606a29-3414-494f-8443-59c5e0cff159");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("❌ Network error. Please try again later.");
    }
    
    setIsSubmitting(false);
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl relative"
          >
            <h3 className="text-3xl text-white font-bold mb-8">Get In Touch</h3>
            <form onSubmit={onSubmit} className="flex flex-col space-y-6">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your Name" 
                className="bg-[#050505]/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all backdrop-blur-sm" 
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Your Email" 
                className="bg-[#050505]/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all backdrop-blur-sm" 
              />
              <textarea 
                name="message"
                required
                rows="4" 
                placeholder="Your Message" 
                className="bg-[#050505]/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none backdrop-blur-sm"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full mt-4 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {/* Status Message */}
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 left-0 right-0 text-center font-medium text-gray-300"
              >
                {result}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col h-full"
          >
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 flex-grow shadow-2xl">
               <h3 className="text-3xl text-white font-bold mb-8">Connect With Me</h3>
               <p className="text-gray-400 mb-10 leading-relaxed text-lg">Feel free to reach out for collaborations, project inquiries, or just a friendly hello!</p>
               
               <div className="space-y-8">
                 <div>
                   <span className="text-gray-500 text-sm font-bold uppercase tracking-widest block mb-2">Email</span>
                   <p className="text-white text-xl font-medium break-all">apvarunsanjay123@gmail.com</p>
                 </div>
                 
                 <div>
                   <span className="text-gray-500 text-sm font-bold uppercase tracking-widest block mb-4">Social Profiles</span>
                   <div className="flex space-x-8">
                     <a href="https://github.com/varunsanjay123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125">
                       <FaGithub className="text-4xl" />
                     </a>
                     <a href="https://www.linkedin.com/in/varunsanjay123/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-125">
                       <FaLinkedin className="text-4xl" />
                     </a>
                     <a href="https://www.instagram.com/_its_me_v_a_r_u_n_?igsh=cTlqaWt1ZHBuMGhh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125">
                       <FaInstagram className="text-4xl" />
                     </a>
                     <a href="https://leetcode.com/u/Varun_Sanjay/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 hover:scale-125">
                       <SiLeetcode className="text-4xl" />
                     </a>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;