import PropTypes from "prop-types"

{
    /* 
        THis component help me to reduse to decrese reusable component to reduce code length it apply on buttons ..
    */
}

export default function IconBtn({text}) {

    return (
        <div>
            <button className='bg-[#0634FF] h-[57px] pb-7 px-6 pt-3 text-xl shadow-custom  rounded-full text-white hover:scale-125 hover:shadow-hover hover:bg-black transition-all duration-200  '>{text}</button>
        </div>
    )
}

IconBtn.propTypes = {
    text: PropTypes.string.isRequired, 
};