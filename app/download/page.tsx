import { SlackQRPostMessage } from '@/functions/SlackQRFunction'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const timeLapse = Date.now()

    await SlackQRPostMessage("this is a test")
    redirect("https://qrplanet.com/appstores")
    console.log();
    
  return (
    <div>page</div>
  )
}

export default page