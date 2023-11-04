

const Navbar = () => {
  return (
    <nav className=" w-full z-50 top-[68px] left-4 relative ">
    <div className="max-w-[1480px] flex flex-wrap items-center justify-between mx-auto p-6 ">
        <span className="self-center text-3xl font-bold  whitespace-nowrap">Task Man</span>
      <div className="flex md:order-2  ">
        <button  className=" font-medium  rounded-full border border-white  text-white text-xl px-4 py-4 text-center p-3 md:mr-0 hover:bg-slate-800 transition-all duration-150 hover:text-red-400">Get started</button>       
      </div>  
    </div>
  </nav>
  )
  
}
{
/*

  <nav className="fixed w-full z-50 top-[52px] left-0  ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <span className="self-center text-3xl font-bold  whitespace-nowrap">Task Man</span>
      <div className="flex md:order-2 ">
        <button  className="font-medium  rounded-full border border-blue-200 text-sm px-4 py-2 text-center p-3 md:mr-0">Get started</button>       
      </div>  
    </div>
  </nav>

*/


}


export default Navbar
