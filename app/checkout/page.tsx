"use client"
// import { Cart } from '@/functions/CartFunctions';
// import { Button, Card, CardContent, Input } from '@mui/material';
// import React, { useState } from 'react'
// import CheckoutForm from './CheckoutForm';

const page = () => {
 


//  const cart = Cart.getCart()
    
//       const total =   cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-4 max-w-lg mx-auto">
          {/* <Card className="mb-4">
            <CardContent>
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold text-orange-500">Summary</h2>
              </div>
              {cart.map((item,index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <span className="text-gray-700">{item.title}</span>
                  <span className="text-gray-900 font-medium">${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 mt-2">
                <span className="text-gray-700 font-bold">TOTAL:</span>
                <span className="text-gray-900 font-bold">${total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
    <CheckoutForm/> */}
        </div>
      );
}

export default page

