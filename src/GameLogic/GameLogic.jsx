import React, { Suspense } from 'react';
import audio from './SoundEffect/wrong.mp3';
const Input = React.lazy(() => import('./Input'));
const NumButton = React.lazy(() => import('./NumButton'));
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import './ShareStyle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Api from './api'
// import firebase from '../Firebase'
import axios from 'axios'


function GameLogic() {
  const totaltime = 24
  const [time, setTime] = React.useState(totaltime)
  const [start, setStart] = React.useState(false)
  const [loss, setLoss] = React.useState(false)
  const [settingimg, setImg] = React.useState(null)
  const [settingage, setAge] = React.useState(1)

  // const age = 72
  const age = settingage

  const go = () => {
  setStart(true)
  setTime(time - 1)

  }


React.useEffect(() => {
  localStorage.setItem('age', '')
    if (time === 0) {
      setTime(time)
      setLoss(true)
    }
 if(time < totaltime && time >= 1){

    {start && 
    setTimeout(() => {
      setTime(time - 1);
      if(localStorage.getItem('age') == age){
        setStart(false)
        // alert('you win wwww')
      }
    }, 1000);
 }
    }
    }, [time]);




React.useEffect(()=>{
axios.get(`https://aggle-a6ccf-default-rtdb.firebaseio.com/aggle/0.json`)
     .then(response => { 
         // console.log(response.data.age);
         const birthyear = response.data.age 
         const img = response.data.img 
         const getAge = Math.floor((new Date() - new Date(birthyear).getTime()) / 3.15576e+10)
         setAge(getAge)
         setImg(img)
         // localStorage.setItem('age', getAge)
         // getAge()
         console.log(settingimg, age)
        })
        .catch(error => { 
            console.log(error);

        });

})


// if(time === 0){
//     new Audio(audio).play()
// }



  return (
    <div className='flex justify-center items-center w-full h-full !font-bold'>
    <div className='border-gray-700 mymainbgaggle mybitaggleboxcenter border-2 border-t-4 border-b-4 sm:border-b-2 sm:border-t-2 md:w-4/12 sm:w-1/3 sm:dark:rounded-2xl mx-auto overflow-hidden'>
    <div className='relative overflow-hidden border-b-2 border-gray-700'>
    <img className={`pointer-events-none h-64 w-full bg-gray-100 dark:bg-gray-600 ${!start && 'blur-2xl'}`} src={settingimg}/>
    <div className='absolute right-4 top-4 myshadowforagglediv h-8 flex justify-center items-center px-4 rounded'>100</div>
   </div>
    
   <div className='w-full pt-4 dark:bg-green-700'>
   <div className='w-full flex justify-between px-4 dark:text-black'>
    {!start && <button className='font-bold bg-gray-200 myshadowforaggle h-8 flex justify-center items-center px-4 rounded disabled:' onClick={go}>start</button>}
    {start && <div className='myshadowforagglediv h-8 flex justify-center items-center px-4 rounded'>{!loss ? 'counting down': `you lost the ans is: ${age}`} </div>}

    <span className='text-center flex justify-center items-center px-4 h-8 rounded myshadowforaggletime'>{time === totaltime ? 'total time: ' : time === 0 ? 'time ended: ' : 'time left: '}{time}</span>
   </div>
     <Suspense fallback={<div className='flex justify-center items-center animate-spin'><AiOutlineLoading3Quarters/></div>}>
      <NumButton time={time} start={start} age={age} img={settingimg}/>
      </Suspense>
   </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default GameLogic;
