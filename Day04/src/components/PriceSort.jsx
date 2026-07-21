export default function priceSort(arrSort, setArrSort) {
    arrSort.sort((a, b) => a.price - b.price);
    setArrSort([...arrSort]);
    console.log(arrSort);
};