import { Cart } from '@/functions/CartFunctions';
import { METHODS } from 'http';
import { redirect } from 'next/navigation';
const crypto = require("crypto")



const page = async ({searchParams}:any) => {
 

const SECRET_KEY = "dVFdjxj6ytlH7W3bogjNIE5tXThDi0zg"
const ACCESS_KEY = "QdbeYCfoWF6sDVcS"
const PARTNER_CODE = "MOMO2CZI20210526_TEST"
const ORDER_INFO = "Pay with MOMO"
const REDIRECT_URL = "zenapppro.com"
const IPN_URL = "zenapppro.com"
const REQUEST_TYPE = "captureWallet"
const AMOUNT = `${searchParams.total}`
const ORDER_ID = `zenshop_${Date.now().toString()}`
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
    method:"POST",
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(REQUEST_BODY).toString(),
    },
    data: REQUEST_BODY
}


const req = await fetch("https://test-payment.momo.vn/v2/gateway/api/create", {
    body: JSON.stringify({
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
    }),
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify({
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
        })).toString(),
    },
    method:"POST"
})
const res = await req.json()
console.log(res.payUrl);
console.log(Date.now());
    redirect(res.payUrl)
    
  return (
    <div>page</div>
  )
}

export default page


