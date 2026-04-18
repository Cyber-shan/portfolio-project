export default function Footer(){
  return(
     <footer className="border-t border-[#E5E5E5] py-8 px-6 md:px-12 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#737373]">© 2026 Alex Rivera. All rights reserved.</p>
          <div className="flex gap-6 text-sm tracking-wider">
            <span className="text-[#737373]">Built with React & Tailwind CSS</span>
          </div>
        </div>
      </footer>
  )
}