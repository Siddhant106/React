import Third from "./third";
import GlobalContext from "./global";
import { useContext } from "react";


export default function Second() {

    const {count, setCount} = useContext(GlobalContext);

    return (
        <>
            <h2>Mastt mai toh!!! {count}</h2>
            <Third/>
        </>
    )
}