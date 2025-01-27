import React from 'react'
import Image from 'next/image'
export type ShopItem = {
    image: String,
    title: String,
    featureList: String[],
    price: number
}
import AddToCartButton from './AddToCartButton'

const ShopItemInfoCard = ({ image, title, featureList, price, }: ShopItem) => {
    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg text-start">
            <div className="mb-4">
                <img
                    src={`${image}`}
                    className="mx-auto rounded-lg shadow"
                />
            </div>

            <h2 className="text-3xl font-bold text-[#5B2C8B] mb-2">
                {title}
            </h2>

            <ul className="text-[#836B97] font-semibold text-base mb-4 space-y-1">
                {featureList.map((feature, index) => (
                    <li key={index}>{`• ${feature}`}</li>
                ))}
            </ul>


            <p className="text-[#7A5C9C] text-2xl font-bold mb-4">{priceDisplay(price)}</p>

            {/* Add to Cart Button */}
            <AddToCartButton image={image} title={title} featureList={featureList} price={price} />
            {/* <button className="px-6 py-2 bg-[#5CAE97] text-white text-sm font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                ADD TO CART
            </button> */}
        </div>
    )
}

export default ShopItemInfoCard

export function priceDisplay(number: number): string {
    const numStr: string = number.toString();

    const result: string = numStr
        .split("")
        .reverse()
        .reduce<string[]>((acc, char, index) => {
            if (index > 0 && index % 3 === 0) {
                acc.push(".");
            }
            acc.push(char);
            return acc;
        }, [])
        .reverse()
        .join("");

    return `${result} đ`;
}