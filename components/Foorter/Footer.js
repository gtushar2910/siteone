import { Tooltip } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-3 justify-center navbar font-sans'>
       Designed and Maintained by : <Tooltip content="Prof. Tushar Gohil, Prof. Bhumika Patel, Ms. Khushbu Naik"><div className='space-x-2'> &nbsp; Web Committee, I.T. Department</div></Tooltip> , SCET, Surat.
    </div>
  )
}

export default Footer
