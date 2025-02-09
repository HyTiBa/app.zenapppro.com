// import { METHODS } from 'http';
import { METHODS } from 'http';
const crypto = require("crypto")
import React from 'react'
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({
    origin: "*"
}))

const SECRET_KEY = "dVFdjxj6ytlH7W3bogjNIE5tXThDi0zg"
const ACCESS_KEY = "QdbeYCfoWF6sDVcS"
const PARTNER_CODE = "MOMO2CZI20210526_TEST"
const ORDER_INFO = "Pay with MOMO"
const REDIRECT_URL = "zenapppro.com"
const IPN_URL = "zenapppro.com"
const REQUEST_TYPE = "captureWallet"
const AMOUNT = "50000"
const ORDER_ID = `fwehfwifebf_dashbwefd`
const REQUEST_ID = ORDER_ID
const EXTRA_DATA = ""
const ORDER_GROUP_ID = ""
const AUTO_CAPTURE = true
const LANG = "vi"

let rawSignature =
    'accessKey=' +
    ACCESS_KEY +
    '&amount=' +
    AMOUNT +
    '&extraData=' +
    EXTRA_DATA +
    '&ipnUrl=' +
    IPN_URL +
    '&orderId=' +
    ORDER_ID +
    '&orderInfo=' +
    ORDER_INFO +
    '&partnerCode=' +
    PARTNER_CODE +
    '&redirectUrl=' +
    REDIRECT_URL +
    '&requestId=' +
    REQUEST_ID +
    '&requestType=' +
    REQUEST_TYPE;

const signature = crypto.createHmac('sha256', SECRET_KEY)
    .update(rawSignature)
    .digest('hex');



const REQUEST_BODY = JSON.stringify({
    partnerCode: PARTNER_CODE,
    requestType: "captureWallet",
    ipnUrl: IPN_URL,
    redirectUrl: REDIRECT_URL,
    orderId: ORDER_ID,
    amount: AMOUNT,
    orderInfo: ORDER_INFO,
    requestId: REQUEST_ID,
    extraData: EXTRA_DATA,
    signature: signature,
    lang: "en"
})



const options = {
    url: "https://test-payment.momo.vn/v2/gateway/api/create",
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(REQUEST_BODY).toString(),
    },
    data: REQUEST_BODY
}



export async function MomoPayment() {
    const req = await app.fetch(options.url, {
        body: options.data,
        headers: options.headers,
        method: options.method
    })
    //    const req = await fetch(options.url, {
    //         body: options.data,
    //         headers: options.headers,
    //         method:options.method
    //     })
    const res = await req.json()
    console.log(res);
}
