import React, {useState, } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function PayDone() {
const [done, setDone] = useState(false)
const url = "https://api.chapa.co/v1/transaction/verify/naol-tx-12122022"


  axios.get(url, { 'headers': { 'Authorization': "CHASECK_TEST-Sgv4Pkoiu8lNu8YPOzUDW25rm5rYdzQ8" } })
  .then(res=> console.log(res))
  .catch(err=> console.log(err))


return (
    <div className='flex justify-center'>
   
  <h1>verifing payment on out server {!done ? "pending" : 'done'}</h1>

    
    </div>
  )
}

export default PayDone
