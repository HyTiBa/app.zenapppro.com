import React from 'react'

const url = "https://zen.qrplanet.com/api/details?key=9e28615f5c57333b3e3a27cfcddcb9ba&id=oakwood"

const page = async () => {
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    
  return (
    <div>page</div>
  )
}

export default page
