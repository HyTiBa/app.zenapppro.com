import { ShopItem } from "@/components/ShopItemInfoCard";
import { createContext, ReactElement, useContext, useState } from "react";

export const cart:CartItem[] = []

type CartItem ={
    item:ShopItem,
    amount:number
}