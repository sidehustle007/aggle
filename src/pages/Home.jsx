import React, { Suspense } from 'react';
const GameLogic = React.lazy(() => import('../GameLogic/GameLogic'));
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


function Home() {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <Suspense fallback={<div className='flex justify-center items-center animate-spin'><AiOutlineLoading3Quarters/></div>}>
        <GameLogic/>
      </Suspense>
    </div>
  )
}

export default Home
