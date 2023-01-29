import React,{useState} from 'react'

const PopupFormIncrement = (props) => {
  const [count, setCount] = useState(0);
  return <>
    <div className="flex bg-white w-1/3 h-[40px] items-center my-auto rounded-xl">
      <div onClick={()=>setCount(count-1)} className="w-1/3 text-center text-md">-</div>
      <input id={props.submitId} value={count} type="number" className="w-1/3 text-center text-md" required ></input>
      <div onClick={()=>setCount(count+1)} className="w-1/3 text-center text-md">+</div>
    </div>
</>
}

export default PopupFormIncrement