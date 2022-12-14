import React, {useState, } from 'react'
import PayDone from './PayDone'


function About() {
const pay = '200'
const tx_ref = 'aye-tx-123445'
const key = "CHAPUBK_TEST-8RIpOGjp9GzhI3JxL4G2hrfZSp3u53Qb"
  return (
    <div className=''>
   
<form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={key} />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={pay} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value="google@google.com" />
    <input type="hidden" name="first_name" value="aye" />
    <input type="hidden" name="last_name" value="weye" />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://yourcompany.com/logo.png" />
    <input type="hidden" name="callback_url" value="" />
    <input type="hidden" name="return_url" value="http://localhost:5173/about/paydone" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit" className='bg-gray-200 px-4 py-2'>Pay Now</button>
</form>

{/*<PayDone/>*/}
    
    </div>
  )
}

export default About
