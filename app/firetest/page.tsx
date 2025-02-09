"use client"
import { db } from '@/firebase'
import { collection, doc, query, where } from 'firebase/firestore'
import React from 'react'

const page = () => {
const testcols = collection(db,"test")
query(testcols,where("name",'array-contains',"bao"))
return (
<div></div>
)
}

export default page