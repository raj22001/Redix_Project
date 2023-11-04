

{
    /* 
        THis component help me to reduse to decrese reusable component to reduce code length ..
    */
}

export function headline({text , size , color , p_text , p_Size }) {
  return (
    <div>
        <h1 className={`font-bold text-[${size}] text-left tracking-normal mb-4`}>{text}</h1>
        <p className={`text-[${p_Size}] text-[${color}] mb-10`}>{p_text}</p>
    </div>
  )
}

export default headline
