import IconBtn from '../component/Common/IconBtn'
import { Icons } from '../data/data'
import HeroIll from "../assets/images/Hero/Heromain.svg"
import heroShape from "../assets/images/Hero/Hero_Shapes.svg"

function Header() {
  
  const handleImageHover = (event) => {
    event.target.style.filter = 'grayscale(0%)'; // Remove grayscale filter on hover
  };

  const handleImageLeave = (event) => {
    event.target.style.filter = 'grayscale(100%)'; // Apply grayscale filter on mouse leave
  };


  return (
    <div className='relative flex flex-row'>
    <div className='absolute w-[2429px] h-[2429px] -top-[1080px] left-[1060px] -z-10'>
      <img src={heroShape} alt="heroshap" className='-z-10'/>
    </div>
    <div className='absolute w-[702px] h-[477px] top-[271px] left-[178px] z-40'>
      <h1 className='font-bold text-[75px] text-left tracking-normal'>Task Management<br/><span>And Lists Tool</span></h1>
      <p className='text-2xl text-[#B1AAAA]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

      <div className='space-x-6 mt-[51px] flex'>
        <input
          type='search'
          placeholder='Name@company.com'
          className='border border-solid-[2px] border-[#EBEBEB] rounded-full  h-[57px] p-6 shadow-full'
          
        />
        <IconBtn 
          text={"Try for free"}
        />
      </div>

      <div className='max-md:grid-cols-4 row-span-2 grid lg:grid-cols-3 lg:grid-rows-3 mt-[150px] gap-10 '>
          {
            Icons.map((item) =>(
              <div key={item.id} className=''>
                <img src={item.image} alt="itemimages" className='w-[97px] h-[59px]'
                   style={{ filter: 'grayscale(100%)' }} 
                   onMouseEnter={handleImageHover}
                   onMouseLeave={handleImageLeave}
                 />
              </div>
            ))
          }
      </div>
    </div>
    <div className='absolute left-[1020px] w-[967px] top-[150px] h-[1035px]'>
      <img src={HeroIll} alt="HeroLLL" />
    </div>
  </div>
  )
}

export default Header
