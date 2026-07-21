const clothesWithOffers = [
  { cloth: "T-Shirt", offer: "40-80% off", price: 499 },
  { cloth: "Jeans", offer: "30-60% off", price: 1499 },
  { cloth: "Jacket", offer: "25-50% off", price: 2499 },
  { cloth: "Shoes", offer: "20-40% off", price: 1999 },
  { cloth: "Dress", offer: "35-70% off", price: 1799 },
  { cloth: "Sweater", offer: "25-55% off", price: 1299 },
  { cloth: "Shorts", offer: "20-35% off", price: 799 },
  { cloth: "Skirt", offer: "30-65% off", price: 999 },
  { cloth: "Saree", offer: "40-50% off", price: 2999 },
  { cloth: "Kurta", offer: "25-65% off", price: 1199 },
  { cloth: "Hoodie", offer: "20-60% off", price: 1599 },
  { cloth: "Lingerie", offer: "50-60% off", price: 699 }
];



export function greet(){
    return <h1>Hello bhaiya ji</h1>
};

export function meet(){
    return <h1>Badhiya bhai sahab</h1>
};

// One file contains only one export default
export default clothesWithOffers;