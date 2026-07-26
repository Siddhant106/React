import GlobalContext from "./global"
import { useContext } from "react"


export default function Third(props) {

    const {count, setCount} = useContext(GlobalContext);

    return (
        <>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+5)}>Increment</button>
        </>
    )
}