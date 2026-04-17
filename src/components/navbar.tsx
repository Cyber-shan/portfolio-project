import { motion } from "motion/react";
export default function Navbar() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#FAFAF9] text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#E5E5E5]"
        >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
            <motion.div 
            className="text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}>
            PORTFOLIO <span className="text-[#F59E0B]">{year}</span>
            </motion.div>

            <div className="flex gap-8 text-sm tracking-wider">
            <a className="cursor-pointer hover:text-[#F59E0B] transition-colors">WORK</a>
            <a className="cursor-pointer hover:text-[#F59E0B] transition-colors">ABOUT</a>
            <a className="cursor-pointer hover:text-[#F59E0B] transition-colors">CONTACT</a>
            </div>

        </div>
        </motion.nav>
    </div>
  );
}