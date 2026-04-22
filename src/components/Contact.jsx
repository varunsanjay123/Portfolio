import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
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
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl text-white font-bold mb-8">Get In Touch</h3>
            <form className="flex flex-col space-y-6">
              <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
              <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
              <textarea rows="4" placeholder="Your Message" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"></textarea>
              <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full mt-4">Send Message</button>
            </form>
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
                   <p className="text-white text-xl font-medium">apvarunsanjay123@gmail.com</p>
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