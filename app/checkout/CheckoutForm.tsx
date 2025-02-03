'use client'
import { Button, Card, CardContent, Input } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import { MomoPayment } from './momoPayment'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Cart } from '@/functions/CartFunctions'
const CheckoutForm = () => {
  const [paymentType, setPayment] = useState('momo')
  const [delivery, setDelivery] = useState("zalo")
  const [showPopup, setShowPopup] = useState(false)
  let email: string | null
  let phoneNumber: string | null
  let address: string | null
  let [popupMessage, setPopupMessage] = useState("")

  const cart = Cart.getCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      {
        showPopup == true ? <Card className="mb-4 absolute">
          <CardContent>
            <p>{
              popupMessage
            }</p>
            <button onClick={() => {
              setShowPopup(false)
            }}>ok</button>
          </CardContent>
        </Card> : null
      }

      <Card className="mb-4">
        <CardContent>
          <div className="flex justify-center space-x-4 mb-4">
            <label htmlFor="" className='flex flex-row'>
              <input type="radio" value={"momo"} onClick={() => { setPayment("momo") }} checked={paymentType == "momo"} />
              <Image width={50} height={50} src={'/momo.png'} alt={''} />
            </label>
            {/* <input type="radio" value={"card"} onClick={() => { setPayment("card") }} checked={paymentType == "card"} /> */}
          </div>

        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className='flex flex-row gap-6 '>

            <label className='flex flex-row gap-3' >
              <input type="radio" onChange={() => { setDelivery("zalo") }} checked={delivery == "zalo"} />
              <Image width={30} height={30} src={'/zalo.png'} alt={''} />
            </label>
            <label className='flex flex-row gap-4' >
              <input type="radio" onChange={() => { setDelivery("mail") }} checked={delivery == "mail"} />
              <Image width={50} height={50} src={'/mail.png'} alt={''} />
            </label>
            <label className='flex flex-row gap-4' >
              <input type="radio" onChange={() => { setDelivery("deliver") }} checked={delivery == "deliver"} />
              <Image width={50} height={50} src={'/deliver.png'} alt={''} />
            </label>
          </div>
          {delivery === "zalo" ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input onChange={(e) => { phoneNumber = e.target.value }} placeholder="Phone Number" className="w-full" />
              </div>
            </div>
          ) : null}
          {delivery === "deliver" ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Address
                </label>
                <Input onChange={(e) => { address = e.target.value }} placeholder="Address" className="w-full" />
              </div>
            </div>
          ) : null}
          {delivery === "mail" ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Email
                </label>
                <Input onChange={(e) => { email = e.target.value }} placeholder="Email" className="w-full" />
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>
      <div className='mt-6 flex justify-center'>

        

          
    <Link href={{
      pathname: `test`,
      query: {
        total: total
      }
    }}>




        <button className='px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300' onClick={()=>{
          Cart.setCart([]);
          
        }}>
          Pay Now
        </button>
        </Link>

      </div>
    </>
  )
}

export default CheckoutForm




const LinkToMomo = ({ total }: { total: number }) => {
  return (

    <Link href={{
      pathname: "/test",
      query: {
        total: total
      }
    }}>

      <button className='px-6 py-2 bg-[#5CAE97] text-white text-lg font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'

      >
        Pay Now
      </button>
    </Link>
  )
}

