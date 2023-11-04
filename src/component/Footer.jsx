import IconBtn from '../component/Common/IconBtn'
import illustration from "../assets/images/Why/Why_Illustration.svg"
import arrow from "../assets/images/Why/Arrow_icon.svg"

const Footer = () => {
  return (
    <div className='relative  w-[1346px] h-[688px] -mt-[100px] mx-auto max-sm:flex-col'>  
    <div className='flex  flex-wrap '>
      <div className=''>
        <img src={illustration} alt="illustration" className='w-[642px] h-[645px] hover:scale-100  ' />
      </div>
      <div className='w-[50%] mt-16  '>
        <h1 className='font-bold text-[50px] text-left tracking-normal mb-4'>Why do you need task management software?</h1>
        <p className='text-2xl text-[#B1AAAA] mb-10'>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
        
        <div className='flex '>
          <button className='font-bold text-[18px] '>LEARN MORE</button>
          <img src={arrow} alt="arrow" className='ml-3 items-center hover:rotate-90 transition-all duration-200 '/>
        </div>
      </div>
    </div>

    <div className='-mt-[-79px] flex flex-col flex-wrap  '>
        <div>
          <h1 className='font-bold text-[50px] tracking-normal mb-4 text-center flex items-center justify-center' >Get better work done</h1>
          <p className='text-[#1E1C24] text-center text-[27px]'>See why millions of people across 195<br/> <span>countries use TaskMan.</span></p>
        </div>
        <div className='space-x-6 mt-[51px] flex items-center justify-center'>
          <input
          type='search'
          placeholder='Name@company.com'
          className='border border-solid-[2px] border-[#EBEBEB] rounded-full w-[396px] h-[57px] p-6 shadow-full'
      
          />
          <IconBtn 
          text={"Try for free"}
          />
  </div>
  </div>
</div>
  )
}

export default Footer
