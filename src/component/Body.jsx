import { tasks } from "../data/data"
import Shapes from "../assets/images/Why/Why_Shapes.svg"

const Body = () => {
  return (
    <div className='flex flex-col w-full mt-[1350px] relative '>
    <div className='absolute w-[1700px] h-[2004px] top-[254px] -left-[1209px] '> 
      <img src={Shapes} alt="shapes" />
    </div>
    <h1 className='font-extrabold text-[50px] text-center'>Key benefits of using task<br/><span>management software</span></h1>
    <div className='flex items-center justify-center ml-10 mr-10'>
      {
        tasks.map((item) => (
          <div key={item.id} className='w-[320px] h-[400px] m-10 mt-[92px] hover:scale-110 transition-all duration-200   '>
              <img src={item.img} alt="img" className='w-[106px] h-[85px] mx-auto mb-4 hover:rotate-12' />

              <h1 className='text-center font-bold text-[25px] mb-3 text-[#1E1C24] hover:font-extrabold  '>{item.title}</h1>
              <p className='line-clamp-3 text-center text-[#B1AAAA] '>{item.description}</p>
            </div>
          ))
        }
    </div>
  </div>
  )
}

export default Body
