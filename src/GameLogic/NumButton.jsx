import React, {useState, useEffect} from 'react'
import Input from './Input'
import './ShareStyle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NumButton({time, age, img, start}) {
const [num, setNum] = useState([])
const [bnum, setBNum] = useState(null)
const [placeholder, setPlaceholder] = useState(null)

useEffect(()=>{
  if(num === ''){
   setBNum('')
    // console.log(num)
  }else{
setBNum(num.join(""))

  }
}, [num])

const enter = () => {
if(bnum >= 130 || bnum == 0){
  setNum('')
  setPlaceholder('what 😮')
  // console.log('nahhh')
  // toast.warn(`${placeholder}`, {
  // position: "top-right",
  // autoClose: 1400,
  // hideProgressBar: false,
  // closeOnClick: true,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // theme: "colored",
  // });



}
else if(age == bnum){
  setNum('')
  // localStorage.setItem('age', bnun)
  // console.log('waw')
  setPlaceholder('correct good 😃')
  localStorage.setItem('age', bnum)

}
else if(age !== bnum){
setNum('')
  setPlaceholder('nahhh 😔')
  // console.log('nahhh')
}
}


const clear = () => {
  setPlaceholder(null)
  setNum('')
}

  return (
    
    <div className="flex flex-col -mb-2">
    <Input time={time} num={bnum} start={start} placeholder={placeholder}/>
      
  <div className="border-t-2 dark:border-t-0 border-black bg-black dark:bg-green-900 place-content-center grid overflow-x-hidden sm:overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block sm:min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="dark:bg-green-700 bg-white h-full min-w-full text-center">
          <thead className="border-b border-[#000000]">
            <tr>
              <th scope="col" className="sm:border-l-4 border-[#000000] font-bold text-gray-900 px-6 py-4">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 9])}}>
                9
                </button>
              </th>
              <th scope="col" className="border-l border-[#000000] font-bold text-gray-900 px-6 py-4">
                <button className='font-bold  h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 8])}}>
                8
                </button>
              </th>
              <th scope="col" className="sm:border-r-4  border-l border-[#000000] font-bold text-gray-900 px-6 py-4">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 7])}}>
                7
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#000000]">
              <td className="sm:border-l-4 border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 6])}}>
                6
                </button>
              </td>
              <td className="border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 5])}}>
                5
                </button>
              </td>
              <td className="sm:border-r-4 border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 4])}}>
                4
                </button>
              </td>
            </tr>
            <tr className="border-b border-[#000000]">
              <td className="sm:border-l-4 border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 3])}}>
                3
                </button>
              </td>
              <td className="border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 2])}}>
                2
                </button>
              </td>
              <td className="sm:border-r-4 border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 1])}}>
                1
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="sm:border-l-4 border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={clear}>
                clear
                </button>
              </td>
              <td className="border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={()=>{setNum(num => [...num, 0])}}>
                0
                </button>
              </td>
              <td className="sm:border-r-4 border-l border-[#000000] text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              <button className='font-boldbg-gray-200 h-10 w-20 rounded myshadowforaggle' onClick={enter}>
                enter
                </button>
              </td>
            </tr>
   

          </tbody>
        </table>
      </div>
    </div>
  </div>
        
</div>
  )
}

export default NumButton;
