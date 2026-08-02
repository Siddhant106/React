import { useState } from "react";
import FoodCart from "./foodCart";


const foodItems = [
    { id: 1, food: "Pizza", Price: "200" },
    { id: 2, food: "Burger", Price: "150" },
    { id: 3, food: "Pasta", Price: "180" },
    { id: 4, food: "Sandwich", Price: "120" },
    { id: 5, food: "Salad", Price: "100" },
    { id: 6, food: "Fries", Price: "80" },
    { id: 7, food: "Ice Cream", Price: "90" },
    { id: 8, food: "Sushi", Price: "300" },
    { id: 9, food: "Tacos", Price: "160" },
    { id: 10, food: "Noodles", Price: "140" },
    { id: 11, food: "Dosa", Price: "110" },
    { id: 12, food: "Paneer Tikka", Price: "220" },
];


export default function Card(){

    return (
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px"}}>
            {foodItems.map((value) => {
                return (
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )
}