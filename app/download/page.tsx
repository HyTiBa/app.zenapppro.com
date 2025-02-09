import { SlackQRPostMessage } from '@/functions/SlackQRFunction'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    const timeLapse = Date.now()

    // SlackQRPostMessage(Date.now().toString)
    // redirect("https://qrplanet.com/appstores")
    console.log();
    
  return (
    <div>page</div>
  )
}

export default page