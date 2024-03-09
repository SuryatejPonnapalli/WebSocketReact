const Navbar = () => {
    return ( 
       <header className="flex flex-row justify-between items-center bg-[#3F02CA] py-6 rounded-b-3xl">
            <div>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div>
                <p className="text-white pr-44">Suryatej</p>
            </div>
       </header>
     );
}
 
export default Navbar;