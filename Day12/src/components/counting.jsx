import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./slicer1";


export default function Counting() {
    
    // Subscribing to the event --> useSelector()
    const count = useSelector((state) => state.slice1.count);

    const dispatch = useDispatch();
    
    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
            <button onClick={() => dispatch(Reset())}>Reset</button>
        </>
    )
}